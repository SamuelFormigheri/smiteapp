import { createContext, useContext, useState } from "react";

export interface IHeaderContext{
    backArrow: boolean;
    showBackArrow: () => void;
    hideBackArrow: () => void;
}

export const HeaderContext = createContext<IHeaderContext>({} as IHeaderContext);

export function useHeader(): IHeaderContext {
    const context = useContext(HeaderContext);

    if (!context){
        throw new Error('useHeader must be used within the Header Provider');
    }

    return context;
}

const HeaderProvider: React.FC = ({children}) => {
    const [backArrow, setBackArrow] = useState<boolean>(false); 
    const showBackArrow = () => setBackArrow(true);
    const hideBackArrow = () => setBackArrow(false);
  
    return (
        <HeaderContext.Provider value={{
            backArrow,
            showBackArrow,
            hideBackArrow
        }}>
            {children}
        </HeaderContext.Provider>
  
    );
  }
  
  export default HeaderProvider;