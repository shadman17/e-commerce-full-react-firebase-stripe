
import { useDispatch, useSelector } from "react-redux";

import {setIsCartOpen} from "../../store/cart/cart.action"

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";


import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
    const cartCount = useSelector(selectCartCount)
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
