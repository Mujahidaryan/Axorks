import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CalContextType {
  isOpen: boolean;
  openCal: () => void;
  closeCal: () => void;
  calLink: string;
}

const DEFAULT_CAL_LINK = 'https://cal.com/axorks-discovery';

const CalContext = createContext<CalContextType>({
  isOpen: false,
  openCal: () => {},
  closeCal: () => {},
  calLink: DEFAULT_CAL_LINK,
});

export const CalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Support both NEXT_PUBLIC_CAL_LINK and VITE_CAL_LINK, or default
  const calLink = 
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_CAL_LINK) ||
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_CAL_LINK) ||
    DEFAULT_CAL_LINK;

  const openCal = () => setIsOpen(true);
  const closeCal = () => setIsOpen(false);

  return (
    <CalContext.Provider value={{ isOpen, openCal, closeCal, calLink }}>
      {children}
    </CalContext.Provider>
  );
};

export const useCal = () => useContext(CalContext);
