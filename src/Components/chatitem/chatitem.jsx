import React,{useState,useEffect} from 'react'
import * as F from './chatitemstyle'
import image from '../../img/background.jpg'

import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {ChatEngine} from 'react-chat-engine'
import {history} from 'react-dom'
import axios from 'axios'



function Chatitem({currentUser}) {

  const {UserName,email,id} = currentUser 
  const [loading, setloading] = useState(true);

 

  useEffect(()=>{
    if(!currentUser){
      history.push('/')
      return;
    }
    axios.get('https://api.chatengine.io/users/',{
      header:{
        "project-id": process.env.REACT_APP_CHAT_ENGINE_KEY,
        "username": UserName,
        "secret": id
      }
    }).then(()=>{
      setloading(false)
    })
    .catch(()=>{
      var formdata = new FormData();
      formdata.append('email', email)
      formdata.append('username',UserName)
      formdata.append('secret',id)

      axios.post('https://api.chatengine.io/users/', 
      formdata,{headers:{'PRIVATE-KEY': "78dea8f9-5ee4-4e8c-b4fc-b3922d181f00"}})
      .then(res=>console.loge(res)).catch(err=>console.log(err))
    })
  },[currentUser,history])

  if (!currentUser || !loading) return `loading...`

  return (
    <F.Container>
    <F.Displaysername >{UserName}</F.Displaysername>
    
      <ChatEngine
        height='80vh'
        projectID= {process.env.REACT_APP_CHAT_ENGINE_KEY}
        userName={UserName}
        userSecret={id}
      />
    </F.Container>
  )
}

const statetoprops = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(statetoprops)(Chatitem)
