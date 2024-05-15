import {CartItem} from "../redux/slices/cartSlice";

export const calcTotalPrice = (items: CartItem[]) => {
    return items.reduce((sum: number, obj: any) => {
        return (obj.price * obj.count) + sum
    }, 0)
}
