import { createContext , useContext, useState} from "react";

const StoregContext =createContext()

export const useStoreg=()=>useContext(StoregContext)


export const StoregProvider = ({ children }) => {
    const[store,setStore] = useState(false)
  return (
   <StoregContext.Provider value={[store,setStore]}>
    { children }
   </StoregContext.Provider>
  )
}
