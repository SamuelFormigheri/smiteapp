import React from 'react';
import LoadContext from './LoadContext';

const SharedContext: React.FC = ({children}) => {
  return (
      <LoadContext>
          {children}
      </LoadContext>
  );
}

export default SharedContext;