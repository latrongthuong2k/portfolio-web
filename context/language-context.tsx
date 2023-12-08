"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Language = "EN" | "JP";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [language, setLanguage] = useState<Language>("JP");

  const toggleLanguage = () => {
    if (language === "EN") {
      setLanguage("JP");
    } else {
      setLanguage("EN");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "localSaveLanguage",
    ) as Language | null;

    if (localLanguage) {
      setLanguage(localLanguage);

      if (localLanguage === "JP") {
      }
    } else if (localLanguage === "EN") {
      setLanguage("JP");
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language: language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider",
    );
  }

  return context;
}
