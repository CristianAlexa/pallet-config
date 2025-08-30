import { createContext, useContext, useState } from "react";

const PalletContext = createContext();

export const PalletProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [palletData, setPalletData] = useState({});
  const [caseData, setCaseData] = useState({});

  return (
    <PalletContext.Provider
      value={{
        palletData,
        setPalletData,
        caseData,
        setCaseData,
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </PalletContext.Provider>
  );
};

export const usePallet = () => useContext(PalletContext);
