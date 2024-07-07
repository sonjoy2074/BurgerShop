import React, { Component } from "react";
import Burger from  "./Burger/Burger";
import Controls from "./Controls/Controls"; 
import {Modal,ModalHeader, ModalBody, ModalFooter, Button} from "reactstrap";
const INGREDIENT_PRICES={
    salad:10,
    cheese:20,
    meat:30,
}

export default class BurgerBuilder extends Component {
state={
    ingredients:[
        {type:"salad", amount:0},
        {type:"cheese", amount:0},
        {type:"meat", amount:0},
    ],
    totalPrice:40,
    modalOpen:false,
    purchasable:false,
    }
    updatePurchaseState = (ingredients) => {
        const sum = ingredients.reduce((sum, element) => {
            return sum + element.amount;
        }, 0);
        this.setState({ purchasable: sum > 0 });
    };
    addIngredientHandler = type => {
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        for (let item of ingredients) {
            if (item.type === type) {
                item.amount++;
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: newPrice});
        this.updatePurchaseState(ingredients);
    };
    rmoveIngredientHandler = type => {
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        for (let item of ingredients) {
            if (item.type === type) {
                if (item.amount <= 0) return;
                item.amount--;
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: newPrice});
        this.updatePurchaseState(ingredients);
    };

toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
};

    render() {
        return (
        <div>
            <div className="d-flex flex-md-row flex-column"> 
                <Burger ingredients={this.state.ingredients} />
                <Controls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.rmoveIngredientHandler}
                price={this.state.totalPrice}
                toggleModal={this.toggleModal}
                purchasable={this.state.purchasable}
                />
            </div>
            <Modal isOpen={this.state.modalOpen}>
                <ModalHeader>Your Order Summary</ModalHeader>
                <ModalBody>
                    <h5>Total Price: {this.state.totalPrice.toFixed()}</h5>
                    {this.state.ingredients.map(item => (
                        <p key={item.type}>
                            {item.type} : {item.amount}
                        </p>
                    ))}
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.toggleModal}>Continue to Checkout</Button>
                    <Button color="danger" onClick={this.toggleModal}> Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        );
    }
}