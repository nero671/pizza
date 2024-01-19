import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem, selectCartItemById} from "../../redux/slices/cartSlice";

type AddToCartProps = {
    pizza: {
        id: string,
        title: string,
        price: number,
        imageUrl: string,
        sizes: number[],
    }
}

export const AddToCart: React.FC<AddToCartProps> = (props) => {

    const dispatch = useDispatch();

    // @ts-ignore
    const { currentType, currentSize } = useSelector(state => state.cart);

    const typesName = ['тонкое', 'традиционное'];

    // @ts-ignore
    const cartItem = useSelector(selectCartItemById(props.pizza.id));
    const addedCount = cartItem ? cartItem.count : '0';

    const onClickAdd = () => {
        const item = {
            id: props.pizza.id,
            title: props.pizza.title,
            price: props.pizza.price,
            imageUrl: props.pizza.imageUrl,
            type: typesName[currentType],
            size: props.pizza.sizes[currentSize],
        }

        dispatch(addItem(item));
    }

    return (
        <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {props.pizza.price} ₽</div>
            <div className="button button--outline button--add" onClick={onClickAdd}>
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
    )
}
