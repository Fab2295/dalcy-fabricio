import React from "react";
import Card from "./card/Card";

export default function ListCard(props) {
  return (
    <div className="row h-100 align-items-center">
      {props.data.map(value => (
        <Card key={value.id} data={value} />
      ))}
    </div>
  );
}
