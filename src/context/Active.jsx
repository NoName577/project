import { createContext, useContext, useState } from "react";

const ActiveContext = createContext();

export const useActive = () => useContext(ActiveContext);

export const ActiveProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <ActiveContext.Provider value={[active, setActive]}>
      {children}
    </ActiveContext.Provider>
  );
};
