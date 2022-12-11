import React from 'react';
import {useSelector} from 'react-redux';
import {State} from '../reducers';
import styles from './Editor.module.css';

const ErrorViz: React.FC = () => {
  const withViz = useSelector((state: State) => state.withViz);
  if (!withViz.enabled) return null;

  const { errorSvg: { svgs, error } } = useSelector((state: State) => state.output);
  if (!error && svgs === undefined) {
    return <div className={styles.container}>Visualizing ...</div>;;
  }

  if (error) {
    return <div className={styles.container}>Visualization failed: {error}</div>;
  }

  if (svgs) {
    return (
      <div className={styles.container}>
      {
        svgs.map((s) => {
            const svgBlob = new Blob([s.svg], { type: "image/svg+xml" });
            const url = URL.createObjectURL(svgBlob);
            return <><img title={s.lineno.toString()} src={url} />&nbsp;</>;
        })
      }
      </div>
    );
  }

  return <div className={styles.container}>No error or SVG received.</div>;;
}

export default ErrorViz;
