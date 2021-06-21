import React,{useState,useEffect} from 'react'


import Logo from '../../img/rmove.png'


import {Nav,NavLink,Bars,NavMenu,NavBtnLink,NavLinkImg} from './ NavbarElement'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {signoutstart} from '../../redux/user/user.actions'


function Navbarcomponent({currentuser,signoutstart}) {
  const [toggle,settoggle] = useState(false)
  const [scroll, setscroll] = useState(false)
  const handlesignout = ()=>{
    signoutstart();
    settoggle(!toggle)
  }
  useEffect(()=>{
    window.addEventListener('scroll',
    ()=>{
      const st = window.scrollY
      if(st > 0){
        return setscroll(true)
      }if(st === 0){
        return setscroll(false)
      }else return
    }

  )
  },[])
  return (
    <>
   <Nav scroll={scroll}>
     <NavLink scroll={scroll} to='/'>
       <NavLinkImg src={Logo} alt="logo"/>
     </NavLink>
     <Bars toggle={toggle} onClick={()=>settoggle(!toggle)}/>
     <NavMenu toggle={toggle}>
     <NavLink scroll={scroll} onClick={()=>settoggle(!toggle)} exact to='/' security>
       Home  
      </NavLink> 
       <NavLink scroll={scroll} onClick={()=>settoggle(!toggle)} to='/market' activeStyle>
        Market   
      </NavLink> 
      <NavLink scroll={scroll} onClick={()=>settoggle(!toggle)} to='/post' activeStyle>
       Post
      </NavLink>
      <NavLink scroll={scroll} onClick={()=>settoggle(!toggle)} to='/chat' activeStyle>
       chat
      </NavLink>
      {
        currentuser ?
      (<NavBtnLink as='div' onClick={handlesignout}>Sign out</NavBtnLink>) 
      :
      (<>
      <NavBtnLink onClick={()=>settoggle(!toggle)} to='/signin'>Login</NavBtnLink></>)
      } 
     </NavMenu>
   </Nav>
    </>
  )
}

const mapstatetoprops = createStructuredSelector({
  currentuser: selectCurrentUser
})
const mapdispatchtoprops = dispatch =>({
  signoutstart:() => dispatch(signoutstart())
})

export default connect(mapstatetoprops,mapdispatchtoprops)(Navbarcomponent)