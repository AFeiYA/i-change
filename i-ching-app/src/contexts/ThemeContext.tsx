import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
    theme: 'light' | 'dark' | 'auto';
    setTheme: (theme: 'light' | 'dark' | 'auto') => void;
    currentTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>(() => {
        const saved = localStorage.getItem('theme');
        return (saved as 'light' | 'dark' | 'auto') || 'auto';
    });    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const updateTheme = () => {
            let newTheme: 'light' | 'dark';
            
            if (theme === 'auto') {
                newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            } else {
                newTheme = theme;
            }
            
            setCurrentTheme(newTheme);
            document.documentElement.setAttribute('data-theme', newTheme);
        };

        updateTheme();
        localStorage.setItem('theme', theme);        if (theme === 'auto') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', updateTheme);
            return () => mediaQuery.removeEventListener('change', updateTheme);
        }
        
        return undefined;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};
