import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addSize} from "../../redux/slices/cartSlice";

type PizzaSizeProps = {
    pizza: {
        sizes: number[];
    };
}


export const PizzaSize: React.FC<PizzaSizeProps> = (props) => {

    console.log(props)

    const [activeSize, setActiveSize] = useState<number>(0);

    const dispatch = useDispatch();

    const setActiveSizes = (index: number) => {
        dispatch(addSize(index));
        setActiveSize(index);
    }

    return (
        <ul>
            {
                props.pizza.sizes.map((size: any, i: number) => {
                    return (
                        <li
                            key={i}
                            onClick={() => setActiveSizes(i)}
                            className={activeSize === i ? 'active' : ''}
                        >
                            {size} см.
                        </li>
                    )
                })
            }
        </ul>
    )
}
