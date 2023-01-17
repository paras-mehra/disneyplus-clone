import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Components/Images/logo.svg";
import { AiFillHome } from "react-icons/ai";
import { RiSearchFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GiFilmSpool } from "react-icons/gi";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserPhoto, setLoginState, setLogOutState } from "./Redux/Reducer/UserReducer";
import { auth, provider } from "../Firebase";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const [Toggler, setToggler] = useState(false); // false - not Active
  const ifPopupOpen = () => setToggler(!Toggler); // true - active State

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setLoginState({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    })
  }, [dispatch]);
  

  const SignIn = () => {
    auth.signInWithPopup(provider).then((response) => {
      let user = response.user;
      dispatch(
        setLoginState({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history("/home"); // user will navigate into home
    });
  };

  const SignOut = () => {
    auth.signOut().then(() => {
      dispatch(setLogOutState());
      history("/"); // This will navigate the user in to back login screen.
    });
  };

  return (
    <>
      <Nav>
        <Navbrand>
          <NavLink to="/">
            <img src={logo} alt="disney/logo" />
          </NavLink>
        </Navbrand>
        {!userName ? (
          <LoginButton onClick={SignIn}>Log In</LoginButton>
        ) : 
          <>
            <MenuLinks>
              <li>
                <NavLink to="/home" className="nav-link">
                  <AiFillHome style={{ fontSize: "15px" }} />
                  <span>HOME</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="#" className="nav-link">
                  <RiSearchFill />
                  <span>SEARCH</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="#" className="nav-link">
                  <FaPlus />
                  <span>WATCHLIST</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="#" className="nav-link">
                  <FaStar />
                  <span>ORIGINALS</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="#" className="nav-link">
                  <GiFilmSpool />
                  <span>MOVIES</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="#" className="nav-link">
                  <BsCollectionPlayFill />
                  <span>SERIES</span>
                </NavLink>
              </li>
            </MenuLinks>

            <UserAuth>
              <img src={userPhoto} onClick={ifPopupOpen} alt="Admin" />
            </UserAuth>

            <PopupMenu activeState={Toggler}>
              <li>
                <NavLink to="/home" className="nav-link">
                  <AiFillHome />
                  <span>HOME</span>
                </NavLink>
              </li>
              <li>
                <NavLink onClick={SignOut} to="/" className="nav-link">
                  <FaPowerOff />
                  <span>Sign Out</span>
                </NavLink>
              </li>
            </PopupMenu>
          </>
        }
      </Nav>
    </>
  );
};

const LoginButton = styled.button`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600 !important;
  cursor: pointer;
  padding: 5px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;
  background-color: rgba(0, 0, 0, 0.6);
  @media screen and (min-width: 280px) and (max-width: 550px) {
    font-size: 0.8rem;
    padding: 4px 13px;
  }
  &:hover {
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const Nav = styled.nav`
  display: flex;
  min-height: 7vh;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  padding: 0.5rem 2rem;
  opacity: 1;
  z-index: 2500;
`;

const Navbrand = styled.div`
  width: 100px;
  height: auto;
  object-position: center;

  img {
    width: 100%;
    height: auto;
    object-fit: fill;
  }
`;
const MenuLinks = styled.div`
  @media screen and (min-width: 280px) and (max-width: 991px) {
    display: none;
  }

  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: row wrap;
  flex-shrink: 0;
  justify-content: flex-start;
  margin-right: auto;
  margin-left: 2.5rem;

  > li {
    list-style: none;

    .nav-link {
      display: flex;
      align-items: center;
      color: white;
      text-decoration: none;
      position: relative;

      span {
        color: white;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.8;
        padding-left: 0.4rem;
        padding-right: 1.3rem;
        margin-top: 2px;
        position: relative;

        &::before {
          position: absolute;
          content: "";
          top: 100%;
          left: 0;
          right: 0;
          width: 0%;
          height: 2px;
          background: #f9f9f9;
          transition: all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
      }
    }

    &:hover {
      span::before {
        width: 80%;
      }
    }
  }
`;

const UserAuth = styled.div`
  width: 50px;
  height: 50px;
  object-position: center;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 100px;
  }
`;

const PopupMenu = styled.div`
  position: absolute;
  top: 7.5vh;
  right: 3.5rem;
  opacity: 1;
  z-index: 2500;
  padding: 0.5rem 1rem;
  background-color: #040714;
  border-radius: 0.345rem;
  border: 1.3px solid rgba(151, 151, 151, 1);
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;

  display: ${(event) => (event.activeState ? "flex" : "none")};
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  > li {
    width: 100%;
    display: flex;
    align-items: flex-start;
    border-bottom: 1px solid rgba(151, 151, 151, 1);
    list-style: none;

    > .nav-link {
      display: flex;
      align-items: center;
      color: white;
      text-decoration: none;
      position: relative;

      span {
        color: white;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1.8;
        padding-left: 0.4rem;
        padding-right: 1rem;
        margin-top: 5px;
        position: relative;
      }
    }
  }
`;

export default Navbar;
