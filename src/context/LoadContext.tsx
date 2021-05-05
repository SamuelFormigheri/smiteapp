import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

export interface ILoadContext{
    loaded: boolean;
    toggleLoaded: () => void;
}

export const LoadContext = createContext<ILoadContext>({} as ILoadContext);

export function useLoad(): ILoadContext {
    const context = useContext(LoadContext);

    if (!context){
        throw new Error('useLoad must be used within the Load Provider');
    }

    return context;
}

const LoadProvider: React.FC = ({children}) => {
    const [loaded, setLoaded] = useState(Boolean(Cookies.get('smitegame_load')));
  
    const toggleLoaded = () => setLoaded((prevState) => !prevState);
  
    useEffect(() => Cookies.set('smitegame_load', String(loaded)), [loaded]);

    return (
        <LoadContext.Provider value={{
          loaded,
          toggleLoaded
        }}>
            {children}
        </LoadContext.Provider>
  
    );
  }
  
  export default LoadProvider;