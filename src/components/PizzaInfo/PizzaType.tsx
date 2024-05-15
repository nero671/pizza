import React, { useState} from "react";
import {useDispatch} from "react-redux";
import {addType} from "../../redux/slices/cartSlice";

type PizzaTypeProps = {
    pizza: {
        types: number[];
    };
}

export const PizzaType:React.FC<PizzaTypeProps> = (props) => {
    const [activeType, setActiveType] = useState<number>(0);

    const typesName = ['тонкое', 'традиционное'];

    const dispatch = useDispatch();

    const setActiveTypes = (index: number) => {
        dispatch(addType(index));
        setActiveType(index);
    }

    return (
        <ul>
            {
                props.pizza.types.map((type: any, i: number) => {
                    return (
                        <li
                            key={i}
                            onClick={() => setActiveTypes(i)}
                            className={activeType === i ? 'active' : ''}
                        >
                            {typesName[type]}
                        </li>
                    )
                })
            }
        </ul>
    )
}
