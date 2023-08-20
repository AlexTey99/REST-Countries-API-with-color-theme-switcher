import React, { createContext, useContext, useState } from 'react';
import {Theme} from "../types/theme"; 

// Crear el contexto
const ThemeContext = createContext<{ theme: Theme; switchThemes: () => void } | undefined>(undefined);

// Proveedor del contexto
export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const switchThemes = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'white' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, switchThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser utilizado dentro de un ThemeProvider');
  }
  return context;
};
