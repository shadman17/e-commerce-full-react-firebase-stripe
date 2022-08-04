import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.contexts";
import "./navigation.styles.scss";

const Navigation = () => {
  const  { currentUser } = useContext(UserContext)
  console.log(currentUser);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwnlogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            {" "}
            SHOP{" "}
          </Link>
          <Link className="nav-link" to="/auth">
            {" "}
            SIGN IN{" "}
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
