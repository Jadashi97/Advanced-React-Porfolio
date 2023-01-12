import React from 'react';
import {useTheme}  from "../ThemeContext";
import SwitchBtn from "../switchfolder/infor";

const Title = ({ children }) => {
    const {theme} = useTheme();
    return(
        <h2
            style={{
                color: theme === "light" ? "black" : "white",
            }}
        >
            {children}
        </h2>
    );
};

const Paragraph = ({children}) => {
    const {theme } = useTheme();
    return(
        <p
            style={{
                color: theme === "light" ? "black" : "white",
            }}
        >
            {children}
        </p>
    );
};

const Content = ()=> {
    return(
        <div>
            <Paragraph>
            We are a Asida loving family. And for years, I searched and searched and
            searched for the perfect Asida recipe. I tried dozens, or more.
            And while some were good, none of them were that recipe that would
            make me stop trying all of the others.
            </Paragraph>
        </div>
    );
};

const Header = ()=> {
    return(
        <header>
            <Title>Mama's Restaurant</Title>
            <SwitchBtn/>
        </header>
    );
};

const Page = ()=> {
    return(
        <div>
            <Title>When it comes to Asida</Title>
            <Content/>
        </div>
    )
}


const SwitchDetails = () => {
    const {theme} = useTheme();

    return (
        <div
            className="App"
            style={{
            backgroundColor: theme === "light" ? "white" : "black",
            }}
        >
            <Header/>
            <Page/>
        </div>
    );
};

export default SwitchDetails
