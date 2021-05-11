import React from 'react';
import '@google/model-viewer';
import { IObject3D } from './interface';
import styles from "./styles.module.scss";

const Object3D: React.FC<IObject3D> = ({
  src,
  alt,
  style
}) => {
  return (
    // @ts-ignore
    <model-viewer 
      className={styles.modelViewer}
      src={src}
      alt={alt}
      shadow-intensity="2"
      disable-zoom
      autoplay
      style={style}
    />
  );
}

export default Object3D;