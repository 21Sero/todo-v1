import React from 'react';
import "./githubBtn.css"
import githubIcon from "./gitHub-black.svg";
const BtnGitHub = () => {
    return (

        <a href="https://github.com/21Sero/todo-v1/tree/main" target="_blank" rel="noreferrer"  className="btn-outline">
            <img src={githubIcon} alt="Github Repos" />
            Github Code
        </a>
    );
};

export default BtnGitHub;
