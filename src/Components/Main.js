import React from "react";
import Header from "./Header/Header"
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder"
const Main = () => {    
    return (
        <div>
            <Header />
             <div className="container">
                <BurgerBuilder />
             </div>
        </div>
    );
};

export default Main;