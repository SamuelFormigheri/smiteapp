import React from 'react';
import { IObject3D } from './interface';

const Object3D: React.FC<IObject3D> = ({
  src,
  type
}) => {
  return (
    <>
      {/* {(typeof window !== 'undefined') ? (
        <ModelViewer type={type} src={src} />
      ): 
      null
      } */}
    </>
  );
}

export default Object3D;