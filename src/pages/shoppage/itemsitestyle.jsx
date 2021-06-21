import styled from 'styled-components'
import img from '../../img/tejasvi-ganjoo-VEWPvPCtcpE-unsplash.jpg'

export const Design = styled.section`
   padding: 1.7rem 0;
   background: linear-gradient(350deg,rgba(98, 123, 79, 0.1), rgba(255, 255, 255, 0.9));
   @media screen and (max-width:768px){
    padding: 0.4rem 0;
    }
`
export const Container = styled.div`
`
export const Title = styled.div`

    text-align: center;
    padding: 2rem 0;
    @media screen and (max-width:768px){
        padding: 1.5rem;
    }

`
export const TitleH2 = styled.h2`
    font-size: 2.9rem;
    margin: auto;
    padding:auto;
    padding-bottom: 1rem;
    color: #1C4012;
    @media screen and (max-width:768px){
        font-size:1.8rem;

    }

    
`
export const TitleP = styled.p`
    text-transform: uppercase;
    padding:auto;
    margin: auto;
    font-size:0.8rem;
    color:black;
`
export const DesignContent = styled.div`
   height: 100%;
   width: 100%;
   margin: 0 auto;
   padding: 0rem calc((100vw - 900px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    @media screen and (max-width:768px){
        padding:1rem;
        grid-template-columns: 46% 46%;
        margin:0
       
    }


`