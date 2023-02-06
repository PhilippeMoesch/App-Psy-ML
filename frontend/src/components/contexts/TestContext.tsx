import React, { useState, useContext, useEffect, createContext } from 'react';



export interface pidContextProps {
    pid: number;
    setPid: (pid: number) => void;
    id: number;
    setId: (id: number) => void;
}

// TextContext.Provider && pidContext.Consumer
export const PidContext = createContext<pidContextProps>({
    pid: -1,
    setPid: () => { },
    id: -1,
    setId: () => { }
});

export function PidContextProvider({ children }) {
    const [pid, setPid] = useState<number>(-1);
    const [id, setId] = useState<number>(-1);

    return (
        <PidContext.Provider value={{ pid, setPid, id, setId }}>
            {children}
        </PidContext.Provider>
    )
}