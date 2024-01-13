import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addType} from "../../redux/slices/cartSlice";


export const PizzaType = (props: any) => {
    const typesName = ['тонкое', 'традиционное'];

    const dispatch = useDispatch();

    // @ts-ignore
    const { currentType } = useSelector(state => state.cart);

    const setActiveType = (index: number) => {
        dispatch(addType(index));
    }

    return (
        <ul>
            {
                props.pizza.types.map((type: any, i: number) => {
                    return (
                        <li
                            key={i}
                            onClick={() => setActiveType(i)}
                            className={currentType === i ? 'active' : ''}
                        >
                            {typesName[type]}
                        </li>
                    )
                })
            }
        </ul>
    )
}
