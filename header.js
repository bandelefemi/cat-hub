import React from "react";


export default function Header(props){


    return (
        <div className="header-container">
            <div className="logo-text">
                <h1>Few Days Of React..</h1>
            </div>

            <nav className="nav-bar">
                <span>Home</span>
                <span>About</span>
                <span>Buy</span>

            </nav>

            <div className="header-bottom">
                <h2>
                    Cats Paradises
                </h2>
                <p>
                    There are {props.num} cat breeds
                </p>
                <p>
                    on average, a cat can weigh about xx kg and lives about xx years
                </p>
            </div>
        </div>
    )
}