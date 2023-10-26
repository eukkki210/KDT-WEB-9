import { createContext, useState } from 'react'

const UserSettingContext = createContext({
    theme: '',
    language: '',
    setTheme: () => { },
    setLanguage: () => { },
});

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    return <UserSettingContext.Provider value={{ theme, setTheme }}>
        {children}
    </UserSettingContext.Provider>;
}

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("English");

    return <UserSettingContext.Provider value={{ language, setLanguage }}>
        {children}
    </UserSettingContext.Provider>;
}

export default UserSettingContext;