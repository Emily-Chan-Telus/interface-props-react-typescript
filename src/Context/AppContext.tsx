import React, { createContext, useState, SetStateAction } from 'react';
import { AppState } from "../interfaces";

// const AppContext = createContext({
//     customers: [],
//     customersError: false
// });

type IAppContext = [AppState, React.Dispatch<React.SetStateAction<AppState>>];

const AppContext = createContext<IAppContext>([{}, () => { }]);

const AppContextProvider = ({ children }: { children: any }) => {
    const [state, setState] = useState<AppState>({
        customers: [],
        customersError: false
    });

    return (
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider }; 