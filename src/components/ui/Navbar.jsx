import { Button } from "antd";
import { VscSignOut } from "react-icons/vsc";

import { useDispatch, useSelector } from "react-redux";
import { startSignOut } from "../../actions/auth";

const Navbar = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth);

  const handleSignOut = () => dispatch(startSignOut());
  return (
    <div className="navbar">
      <span className="navbar-name">{name}</span>
      <Button type="primary" danger onClick={handleSignOut}>
        Salir
        <VscSignOut size="1rem" style={{ verticalAlign: "middle" }} />
      </Button>
    </div>
  );
};

export default Navbar;
