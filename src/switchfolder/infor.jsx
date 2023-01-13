import "./Styles.css";
import { useTheme } from "../ThemeContext";

const SwitchBtn = ()=> {
    const {theme, toggleTheme} = useTheme();

    return(
        <label className="switch">
            <input
                type={"checkbox"}
                checked={theme === "light"}
                onChange={toggleTheme}
            />
            <span className="slider round"/>
        </label>
    );
};

export default SwitchBtn;