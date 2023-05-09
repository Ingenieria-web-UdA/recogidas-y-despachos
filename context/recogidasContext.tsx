import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface RecogidasContextProps {
    openModalRecogidas:boolean;
    setOpenModalRecogidas: Dispatch<SetStateAction<boolean>>;
    openModalDespachos:boolean;
    setOpenModalDespachos: Dispatch<SetStateAction<boolean>>;
}
// le pasamos un objeto vacio como esa interfaz
const RecogidasContext = createContext<RecogidasContextProps>({} as RecogidasContextProps); //ya tenemos el contexto

export const useRecogidasContext = () => useContext(RecogidasContext);  // cada vez que necesitemos el contexto lo usamos

interface RecogidasContextProviderProps {
    children: JSX.Element;
}

const RecogidasContextProvider = ({children,} : RecogidasContextProviderProps) => {
    const [openModalRecogidas, setOpenModalRecogidas] = useState<boolean>(false);
    const [openModalDespachos, setOpenModalDespachos] = useState<boolean>(false);
    return <RecogidasContext.Provider
    value={{
        openModalRecogidas,
        setOpenModalRecogidas,
        openModalDespachos,
        setOpenModalDespachos
    }}
    >
        {children}
    </RecogidasContext.Provider>;
};

export {RecogidasContextProvider};