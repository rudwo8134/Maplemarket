import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'


export const Nav = styled.nav`
  position: ${props=> props.scroll ? 'fixed':'relative'};
  background: transparent;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  transition: all 0.7s ease-in-out;
  background: ${props=> props.scroll ? 'rgb(139,231,140)':'none'};
 
`
export const NavLink = styled(Link)`
  color: #080D0B;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &.active{
    color: ${props=> props.scroll ? '#f9faf9':'rgb(139,231,140)'};
  };
  @media screen and (max-width: 768px){
    color: white;
    &.active{
    color: black;
  };
  }
`
export const NavLinkImg = styled.img`
  height: 80px;
  width: 80px;
 


`

export const Bars = styled(FaBars)`
  display: none;
  color:#0e2109;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right:0;
    transform: translate(-100%,75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width:768px){
  display: ${props => props.toggle ? "flex" : "none"};
  font-size:1.1rem;
  flex-direction: column;
  position: absolute;
  top:10vh;
  width: 100%;
  height: 30vh;
  transform: scale(1.2 to 1.0);
  background: rgb(139,231,140);
 
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #508C3F;
  padding: 10px 22px;
  color:#fff;
  border:none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  transition: all 0.5s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #B8D9A0;
    color:#010606
  }
  @media screen and (max-width:768px){
    background: #c2f0a1;
    width: 100%;
    text-align: center;
    color:black;
    margin:0
   }
`

export const logoutButton = styled(Link)`
border-radius: 4px;
  background: #508C3F;
  padding: 10px 22px;
  color:#fff;
  border:none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #B8D9A0;
    color:#010606
  }
`