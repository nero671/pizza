import React, {useState} from "react";
import {PizzasType} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {addItem, selectCartItemById} from "../../redux/slices/cartSlice";
import {Link} from "react-router-dom";


type PizzaType = {
    id: number,
    title: string,
    price: number,
    imageUrl: string,
    sizes: any,
    types: any,
}

export const PizzaBlock = (props: PizzasType) => {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const dispatch = useDispatch();

    const typesName = ['тонкое', 'традиционное'];

    //@ts-ignore
    const cartItem = useSelector(selectCartItemById(props.id));
    const addedCount = cartItem ? cartItem.count : '0';

    const onClickAdd = () => {
        const item = {
            id: props.id,
            title: props.title,
            price: props.price,
            imageUrl: props.imageUrl,
            type: typesName[activeType],
            size: props.sizes[activeSize],
        }

        dispatch(addItem(item));
    }

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
                        {
                            props.types.map((type: any, i: number) => {
                                return (
                                    <li
                                        key={i}
                                        onClick={() => setActiveType(i)}
                                        className={activeType === i ? 'active' : ''}
                                    >
                                        {typesName[type]}
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <ul>
                        {
                            props.sizes.map((size: any, i: number) => {
                                return (
                                    <li
                                        key={i}
                                        onClick={() => setActiveSize(i)}
                                        className={activeSize === i ? 'active' : ''}
                                    >
                                        {size} см.
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">от {props.price} ₽</div>
                    <div className="button button--outline button--add"  onClick={onClickAdd}>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {addedCount > 0 && <i>{addedCount}</i>}
                    </div>
                </div>
            </div>
        </div>

    )
}
