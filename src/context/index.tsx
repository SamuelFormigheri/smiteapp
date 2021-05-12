import React from 'react';
import LoadContextProvider from './LoadContext';
import HeaderContextProvider from './HeaderContext';

const SharedContext: React.FC = ({children}) => {
  return (
      <LoadContextProvider>
        <HeaderContextProvider>
          {children}
        </HeaderContextProvider>
      </LoadContextProvider>
  );
}

export default SharedContext;