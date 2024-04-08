
import { useNavigate } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";

import classes from "./Header.module.css";
const Header = (props) => {
    const navigate = useNavigate();
    const current = props.current;
  return (
    <div className={classes.header}>
      <p><RiMovie2Line /> GEEKSYNERGY Movies</p>
      <div className={classes.buttons}>
          {current==='login' && <p onClick={()=>{navigate('/')}}>Sign-Up</p>}
          {current==='signup' && <p onClick={()=>{navigate('/login')}}>Login</p>}
          
          {current==='home' && <p onClick={()=>{navigate('/')}}>Logout</p>}
        <p onClick={props.onOpen}>Company info </p>
      </div>
    </div>
  );
};

export default Header;
