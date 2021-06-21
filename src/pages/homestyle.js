
import styled from 'styled-components'
import Image from '../img/pawel-czerwinski-lWBZ01XRRoI-unsplash.jpg'

// logo container!! do not touch --eric--
const Searchlogocontainer = ()=>{
  const styles ={
      color: 'black',
      display:'flex',
      justifyContent: 'center',
      alignItems:'center'
    }
  return(
   
    <>
   <i style={styles} className = "fas fa-search"></i>
    </>
  )
}
export const Itemcontainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
max-width: 1100px;
padding: auto;
margin: 3rem auto;
column-gap: 1.5rem;
row-gap: 1.5rem;

`

export const Banner = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #040404;
    transition: all 3s ease-in-out;
    
`
export const Container = styled.div`

`
export const BannerTitle= styled.h1`
    font-size: 3rem;
    line-height: 1.2;
`
export const BannerTitlespan = styled.span`
/* color:2b2b2b */
color: #29591C;
`
export const BannerTitleP= styled.p`
     padding: 1rem 0 2rem 0;
    font-size: 1.2rem;
    text-transform: capitalize;
    font-weight: 300;
    word-spacing: 2px;
`
export const Form= styled.form`
     background: #fff;
    border-radius: 2rem;
    padding: 0.6rem 1rem;
    display: flex;
    justify-content: space-between;
`
export const SearchInput = styled.input`
    font-size: 1.1rem;
    width: 100%;
    outline: 0;
    padding: 0.6rem 0;
    border: none;
    &::placeholder{
      text-transform: capitalize;
    }
`
export const Searchbutton= styled.button`
  width: 40px;
    font-size: 1.1rem;
    color: #2b2b2b;
    border: none;
    background: transparent;
    outline: 0;
    cursor: pointer;
`

export const Searchlogo = styled(Searchlogocontainer)`

`
export const Background = styled.div`
    height: 90vh;
    background: linear-gradient(to top,rgba(98, 123, 79, 0.4), rgba(255, 255, 255, 0.75)),url(${Image}),center,no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
`