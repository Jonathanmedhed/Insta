import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ user, className, centerItem, icon, title }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;

  return (
    <header className={`header ${className || ""} `}>
      <div className="header__inner">
        <div className="header__left" onClick={() => navigate("/")}>
          {icon && <span className="header-icon">{icon}</span>}
          {title && <span className="header-title">{title}</span>}
        </div>
        <span className={`header__switch ${"isShowMenu" ? "--hide" : ""}`}>
          {centerItem}
        </span>
        <div className="">
          {/**menu ? (
            menu
          ) : (
            <LanguageSwitch active={true} onClick={() => action()} />
          )*/}
        </div>
        <Link to={`${pathname.includes(user.id) ? "/" : `users/${user.id}`}`}>
          <i
            className={`fa fa-${
              pathname.includes(user.id) ? "home" : "user"
            } prof-btn`}
            aria-hidden="true"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
