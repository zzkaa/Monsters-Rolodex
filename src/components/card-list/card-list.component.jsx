import React from "react";
import { Card } from "../card/card.component.jsx";
import "./card.-list.styles.css";

export const CardList = (props) => (
  <div className="card-list">
    {props.elements.map((monster) => (
      <Card key={monster.id} monster={monster}></Card>
    ))}
  </div>
);
