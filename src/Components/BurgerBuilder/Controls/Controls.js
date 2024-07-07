import React from "react";
import { Card, Button, CardFooter, CardHeader, CardBody } from "reactstrap";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const IngredientControl = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2">
      <div
        className=""
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        {props.label}
      </div>
      <div
        style={{
          marginLeft: "50%",
        }}
      >
        <Button className="btn btn-success btn-sm m-1" onClick={props.added}>
          Add
        </Button>
        <Button className="btn btn-danger btn-sm m-1" onClick={props.removed}>Remove</Button>
      </div>
    </div>
  );
};
const Controls = (props) => {
  return (
    <div className="container ml-md-5" style={{ textAlign: "center" }}>
      <Card
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <CardHeader
          style={{
            backgroundColor: "#D70F64",
            color: "white",
            textAlign: "center",
          }}
        >
          <h4>Add Ingredient</h4>
        </CardHeader>
        <CardBody>
          {controls.map((item) => {
            return (
              <IngredientControl
                key={Math.random}
                label={item.label}
                type={item.type}
                added={() => props.ingredientAdded(item.type)}
                removed={() => props.ingredientRemoved(item.type)}
              />
            );
          })}
        </CardBody>
        <CardFooter>
          <h5>Price:<strong>{props.price}</strong> BDT</h5>
          <Button disabled={!props.purchasable} onClick={props.toggleModal}>Order Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Controls;
