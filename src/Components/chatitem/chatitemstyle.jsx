import styled from 'styled-components'

export const Container = styled.div`
padding: 0.5rem calc((100vw - 900px) / 2);
margin:auto;
`
export const Formcontainer = styled.div`
padding-top: 6rem;
background:transparent;
`
export const Displaycontainer = styled.span`
`
export const DispalyimgContainer = styled.div`
display:flex;
flex-direction: row;
align-items: center;
margin-bottom: 0.8rem;

`
export const Displayimg = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
`
export const Displaysername = styled.h4`
margin-left: 0.5rem;
`

export const Displaymassage = styled.span`
border-radius: 30px;
border: 1px solid yellow;
background: yellow;
padding: 0.5rem;
`

export const TypeContainer = styled.span`

`
export const Typeformcontainer = styled.form`
border: 1px solid gray;
border-radius: 30px;
width: 100%;
margin-top: 3rem;
padding: 0.5rem;
`
export const Typeforminput = styled.input`
width: 90%;
border:none;
border-bottom: 1px solid grey;
font-size: 1rem;
`
export const Typeformbutton = styled.button`
border:none;
background: yellow;
color: black;
padding: 0.5rem;
border-radius: 50px;
font-size: 1rem;

`