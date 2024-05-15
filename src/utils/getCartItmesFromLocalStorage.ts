import {calcTotalPrice} from "./calcTotlPrice";

export const getCartItmesFromLocalStorage = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);

    return {
        items,
        totalPrice
    }
}
