import React from "react";
import "./Burger.css";
import Ingredient from "../Ingredient/Ingredient";
const Burger = (props) => {
    let ingredientArr = props.ingredients.map((items) => { 
        let tempArr = [...Array(items.amount).keys()];
        return tempArr.map(_ => {
            return <Ingredient type={items.type} key={Math.random()} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    if (ingredientArr.length === 0) {
        ingredientArr = <p>Please start adding ingredients!</p>;
    }
  return (
    <div className="burger">
      <Ingredient type="bread-top" />
        {ingredientArr}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
