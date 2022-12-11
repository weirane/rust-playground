import { Action, ActionType, SVGItem } from '../../actions';

const DEFAULT: State = {
}

interface State {
  success?: boolean;
  svgs?: SVGItem[];
  error?: string;
}

export default function errorSvg(state = DEFAULT, action: Action) {
  switch (action.type) {
    case ActionType.RequestVisualization:
      return { ...state, svgs: undefined, error: "" };
    case ActionType.VisualizationSucceeded:
      return { ...state, success: action.success, svgs: action.svgs, error: "" };
    case ActionType.VisualizationFailed:
      return { ...state, svgs: undefined, error: action.error };
    default:
      return state;
  }
}
