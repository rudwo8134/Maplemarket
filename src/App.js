import './App.css';

import { useEffect} from 'react'
// redux setting
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'


// router
import {Switch,Route,Redirect} from 'react-router-dom'

//Navbar
import Navbar from './Components/Navbar/Navbarcomponent' 
//pages 
import Home from './pages/home'
import Signin from './pages/login'
import Market from './pages/shoppage/itemsite'
import Itemdetail from './pages/itemdetail/itemdetail'
import Itempost from './pages/itempost /itempost.jsx'
// selector
import {selectCurrentUser} from './redux/user/user.selectors'
// action
import {checkUsersession} from './redux/user/user.actions'

import Chat from './Components/chatitem/chatitem'

function App({currentUser,CheckUserSession}) {
  useEffect(()=>{
    CheckUserSession()
  },[CheckUserSession])


  return (
    <div className="App" >
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/signin' render={()=>
      currentUser ? (<Redirect to='/' />) : (<Signin/>)
      }/>
      <Route exact path='/market' render={()=> currentUser ? (<Market/>):(<Redirect to='/signin' />)}/>
      <Route path='/market/:id' render={(match)=>currentUser ? (<Itemdetail ID={match}/>):(<Redirect to='/signin'/>)}/>
      <Route path='/post' render={()=> currentUser ? (<Itempost/>):(<Redirect to='/signin'/>)}/>
      <Route path='/chat' render={()=> currentUser ? (<Chat/>):(<Redirect to='/signin'/>)}></Route>
      <Route path='*' render={()=><Redirect to='/'></Redirect>}/>
    </Switch>
    </div>
  );
}

const mapstatetoprops = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapdispatchtoprops = dispatch =>({
  CheckUserSession: ()=>dispatch(checkUsersession())
})


export default connect(mapstatetoprops,mapdispatchtoprops)(App);
