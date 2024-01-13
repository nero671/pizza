import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addItem, selectCartItemById} from "../redux/slices/cartSlice";
import {PizzaType} from "../components/PizzaInfo/PizzaType";
import {PizzaSize} from "../components/PizzaInfo/PizzaSize";
import {AddToCart} from "../components/PizzaInfo/AddToCart";


export const FullPizza = (props: any) => {
    const { id } = useParams();
    const [pizza, setPizza] = useState<any>();

    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get('https://6538d707a543859d1bb20638.mockapi.io/pizza/' + id);
                setPizza(data);
            } catch (err) {
                console.log(err);
            }
        }

        fetchPizza();
    }, [id]);


    if (!pizza) {
        return (
            <div className="container">
                Загрузка...
            </div>
        )
    }


    return (
        <div className="container">
            <div className="pizza-detail__wrapper">
                <img
                    className="pizza-block__image"
                    src={pizza.imageUrl}
                    alt="Pizza"
                />

                <div className="pizza-detail__info">
                    <h2 className="content__title">
                        {pizza.title}
                    </h2>
                    <div className="pizza-block__selector">
                        <ul>
                            <PizzaType pizza={pizza} />
                        </ul>
                        <ul>
                            <PizzaSize pizza={pizza} />
                        </ul>
                    </div>

                    <AddToCart pizza={pizza} />
                </div>


            </div>


        </div>
    )
}
