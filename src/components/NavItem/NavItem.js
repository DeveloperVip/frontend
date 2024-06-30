import { useState } from "react";
import "./NavItem.css"
import { Link, useNavigate, useParams } from "react-router-dom";

const NavItem = (props) => {
    const {name,url,subName,subLink = [] } = props 
    const navigate = useNavigate();
    const [state,setState] = useState(" ");
    const handleButtonHover = (e) => {
        // e.currentTarget.classList.add('show');
        setState('show')
    };
    
    const handleButtonLeave = (e) => {
        // e.currentTarget.classList.remove('show');
        setState(" ")
    };
    const handleClick=()=>{
        navigate(url)
    }
    return (
        <li className="nav-item">
          <div className={`dropdown ${state}`} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>
            <Link
              className="btn dropdown-toggle"
              to={url}
              role="button"
              aria-expanded="false"
              onClick={handleClick}
            >
              {name}
            </Link>
            {subName?<ul className={`dropdown-menu dropdown-menu-dark w-auto h-auto ${state}`}>
              {subName.map((item, index) => (
                <li key={index}>
                  <Link className="dropdown-item" to={`${url}/${subLink[index]}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>:""}
          </div>
        </li>
      );
};

export default NavItem;
