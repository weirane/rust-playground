import { Action, ActionType } from '../actions';

const DEFAULT: State = {
  enabled: false,
};

export interface State {
  enabled: boolean;
}

export default function visualize(state = DEFAULT, action: Action) {
  switch (action.type) {
    case ActionType.RequestVisualization:
      return { enabled: true };
    default:
      return state;
  }
}
