import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser } from "../../utils/firebase/firebase.utils";


import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Crwnlogo />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">
                        {" "}
                        SHOP{" "}
                    </NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : (
                        <NavLink to="/auth">
                            {" "}
                            SIGN IN{" "}
                        </NavLink>
                    )}

                    <CartIcon/>
                    

                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default Navigation;
