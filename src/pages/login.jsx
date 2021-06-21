import React,{useState} from 'react'

import Signinimg from '../img/signin.svg'
import Signupimg from '../img/signup.svg'

import {EmailIcondisplay,PasswordIcondisplay,Container,FormContainer,Title,InputField,Usericondisplay,UsernameInput,BtnSolid,SocialText,SocialMedia,SocialIcon,SigninSignup,Signinform,SignUpform,Image,PanelContainer,LeftPanel,RightPanel,Content,PanelH3,PanelP,BtnTransparent} from './loginstyle'
import {googleSignInstart,emailSignInstart,signupStart} from '../redux/user/user.actions'
import {connect} from 'react-redux'

function Login(props) {
  const {GoogleSigninStart,SignupStart,emailSignInstart} = props

  const [usercredential, setusercredential] = useState({
    email:"",
    confirmpassword:"",
    password:"",
    UserName:""
  })
  const [logincredential, setlogincredential] = useState({
    email:'',
    password: ''
  })

  const [control, setcontrol] = useState(false)
  const handlesignup= ()=>{
    setcontrol(!control)
  }
  const handleChange = (e)=>{
    const {name,value} =e.target
    setusercredential({...usercredential, [name]: value})
  }

  const handleLoginChange =(e) =>{
    const {name,value} =e.target
    setlogincredential({...logincredential, [name]: value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const {UserName,email,password,confirmpassword} = usercredential
    if (password !== confirmpassword) {
      alert("password does not match! Try again");
      return;
    }
    SignupStart({
      email,
      password,
      UserName
    })
  }

  const handleloginSubmit = async event => {
    event.preventDefault();
    const { email, password } = logincredential
    emailSignInstart(email,password)

  };

  
  return (
   <Container control={control}>
     <FormContainer>
    <SigninSignup control={control}>
      <Signinform onSubmit={handleloginSubmit} control={control}>
        <Title>Sign-In</Title>
        <InputField>
          <Usericondisplay></Usericondisplay>
          <UsernameInput onChange={handleLoginChange} name='email'value={logincredential.email} type="text" placeholder="UserName"/>
        </InputField>
        <InputField>
          <PasswordIcondisplay></PasswordIcondisplay>
          <UsernameInput onChange={handleLoginChange} name='password'value={logincredential.password} type="password" placeholder="Password"/>
        </InputField>
        <BtnSolid type="submit"  value="Login"/>
        <SocialText>Or Sign in with Social Platforms</SocialText>
        <SocialMedia>
          <SocialIcon>
            <i className="fab fa-facebook"></i>
          </SocialIcon>
          <SocialIcon>
            <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon onClick={GoogleSigninStart}>
            <i className="fab fa-google"></i>
          </SocialIcon>
          <SocialIcon>
            <i className="fab fa-linkedin-in"></i>
          </SocialIcon>
        </SocialMedia>
      </Signinform>

      <SignUpform onSubmit={handleSubmit} control={control}>
        <Title>Sign-Up</Title>
        <InputField>
          <Usericondisplay></Usericondisplay>
          <UsernameInput onChange={handleChange} name="UserName" value={usercredential.UserName} type="text" placeholder="UserName"/>
        </InputField>
        <InputField>
          <EmailIcondisplay></EmailIcondisplay>
          <UsernameInput onChange={handleChange} name="email" value={usercredential.email} type="email" placeholder="Email"/>
        </InputField>
        <InputField>
          <PasswordIcondisplay></PasswordIcondisplay>
          <UsernameInput onChange={handleChange} name="password" value={usercredential.password} type="password" placeholder="Password"/>
        </InputField>
        <InputField>
          <PasswordIcondisplay></PasswordIcondisplay>
          <UsernameInput onChange={handleChange} name="confirmpassword" value={usercredential.confirmpassword} type="password" placeholder="Confirm Password"/>
        </InputField>
        <BtnSolid type="submit" value="Sign-up"/>
        <SocialText>Or Sign up with Social Platforms</SocialText>
        <SocialMedia>
          <SocialIcon>
            <i className="fab fa-facebook"></i>
          </SocialIcon>
          <SocialIcon>
            <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon>
            <i className="fab fa-google"></i>
          </SocialIcon>
          <SocialIcon>
            <i className="fab fa-linkedin-in"></i>
          </SocialIcon>
        </SocialMedia>
      </SignUpform>
    </SigninSignup>
     
    

     </FormContainer>
     <PanelContainer>
      <LeftPanel control={control} >
        <Content>
          <PanelH3>New here?</PanelH3>
          <PanelP>Do you want to Sign up?</PanelP>
          <BtnTransparent onClick={handlesignup} id='sign-up-button'>Sign Up</BtnTransparent>
        </Content>
        <Image src={Signinimg} alt="signin"/>
      </LeftPanel>
      <RightPanel control={control}>
        <Content>
          <PanelH3>One of us</PanelH3>
          <PanelP>Did you already Sign up?</PanelP>
          <BtnTransparent onClick={handlesignup}  id='sign-in-button'>Sign in</BtnTransparent>
        </Content>
        <Image src={Signupimg} alt="signup"/>
      </RightPanel>
     </PanelContainer>
   </Container>
  )
}


const mapaction = dispatch => ({
  SignupStart:(info) => dispatch(signupStart(info)),
  GoogleSigninStart: () =>dispatch(googleSignInstart()),
  emailSignInstart: (email,password) =>dispatch((emailSignInstart({email,password})))
})

export default connect(null,mapaction)(Login)
