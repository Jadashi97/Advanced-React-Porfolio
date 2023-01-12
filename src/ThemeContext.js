export const ThemeProvider = ({children})=> {
    <ThemeContext.Provider
        value={}
    
    />
};

export const useTheme = ()=> ({theme: "light"});

export const ThemeContext = React.createContext()