/**
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { resetCart } from '../slices/cartSlice';
 */

import { useState } from 'react';
import ImageComponent from './ImageComponent';
import LanguageSwitch from './LanguageSwitch';
import menuIcon from '../images/menu.svg';

const Header = ({ action, className, centerItem, icon, options, title }) => {
  /**
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      // NOTE: here we need to reset cart state for when a user logs out so the next
      // user doesn't inherit the previous users cart and shipping
      dispatch(resetCart());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };
    
  */

  const [isShowMenu, setIsShowMenu] = useState(false);
  let menu = options && (
    <span className='header__menu'>
      {options.map((option, i) => (
        <span
          className='header__option'
          key={i}
          onClick={() => option?.action}
          onKeyDown={() => option?.action}
          tabIndex={i}
        >
          {option.label}
        </span>
      ))}
    </span>
  );

  return (
    <header className={`header ${className ? className : ''} `}>
      <div className='header__inner'>
        <div className='header__left'>
          {icon && <span className='header-icon'>{icon}</span>}
          {title && <span className='header-title'>{title}</span>}
        </div>
        <span className={`header__switch ${isShowMenu ? '--hide' : ''}`}>
          {centerItem}
        </span>
        <div className=''>
          {/**menu ? (
            menu
          ) : (
            <LanguageSwitch active={true} onClick={() => action()} />
          )*/}
        </div>
        {/**menu && (
          <span
            className='header__md'
            onClick={() => setIsShowMenu(!isShowMenu)}
            onKeyDown={() => setIsShowMenu(!isShowMenu)}
            tabIndex={0}
          >
            <ImageComponent alt='menu' className='menu-icon' src={menuIcon} />
          </span>
        )*/}
      </div>
      {/**isShowMenu && (
    <span className={`header__menu-drop ${isShowMenu ? "--active" : ""}`}>
      {isShowMenu &&
        options.map((option, i) => (
          <span
            className="header__option-drop"
            key={i}
            onClick={() => option?.action}
            onKeyDown={() => option?.action}
            tabIndex={i}
          >
            {option.label}
          </span>
        ))}
    </span>
  )*/}
      {/**
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={logo} alt='Insta' />
              Insta
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <SearchBox />
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
       */}
    </header>
  );
};

export default Header;
