import React, {useState} from "react";
import {PizzasType} from "../../App";
import {Link} from "react-router-dom";
import {AddToCart} from "../PizzaInfo/AddToCart";
import {PizzaType} from "../PizzaInfo/PizzaType";
import {PizzaSize} from "../PizzaInfo/PizzaSize";

export type PizzaType = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    sizes: number[],
    types: number[],
}

export const PizzaBlock: React.FC<PizzasType> = (props) => {

    return (
        <div className="pizza-block__wrapper">
            <div className="pizza-block">
                <Link to={`/pizza/${props.id}`}>
                    <img
                        className="pizza-block__image"
                        src={props.imageUrl}
                        alt="Pizza"
                    />
                    <h4 className="pizza-block__title">{props.title}</h4>
                </Link>
                <div className="pizza-block__selector">
                    <ul>
                        <PizzaType pizza={props} />
                    </ul>
                    <ul>
                        <PizzaSize pizza={props} />

                    </ul>
                </div>
                <AddToCart pizza={props} />
            </div>
        </div>

    )
}
