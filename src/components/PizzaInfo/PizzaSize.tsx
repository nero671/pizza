import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addSize, addType} from "../../redux/slices/cartSlice";

export const PizzaSize = (props: any) => {

    const dispatch = useDispatch();

    // @ts-ignore
    const { currentSize } = useSelector(state => state.cart);

    const setActiveSize = (index: number) => {
        dispatch(addSize(index));
    }

    return (
        <ul>
            {
                props.pizza.sizes.map((size: any, i: number) => {
                    return (
                        <li
                            key={i}
                            onClick={() => setActiveSize(i)}
                            className={currentSize === i ? 'active' : ''}
                        >
                            {size} см.
                        </li>
                    )
                })
            }
        </ul>
    )
}
