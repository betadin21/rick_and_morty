import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { req } from "../methods";
import { css, styled } from "styled-components";
import { Img } from "./Characters";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 25%;
  margin: 2rem auto;
  border-radius:5%;
  overflow:hidden;
  box-shadow: 0px 4px 10px 0px #00000033;
`
const Features = styled.div`
  text-align:center;
  margin:0.5rem;
`
const Span = styled.span`
  font-size:1rem;
  color: #2e5a7c;
`
const Button = styled.div`
  background: #3b3b9e;
  height:3rem;
  display:flex;
  justify-content: center;
  align-items: center;
  transition:all 0.3s linear;
  &:hover{
    color:white;
    background: #202048;
  }
`
const CharactersNext = ({url}) => {
    const [data,SetData] = useState({})
    const {id} = useParams()
  
    useEffect(()=>{
      req(url + `/${id}`)
      .then(data=>SetData(data))
    },[])
    const {origin} = data;
  return (
    <Container>
      <div><Img src={data.image} alt="" /></div>
      <Features><Span>Name:</Span>  {data.name}</Features>
      <Features><Span>Gender:</Span>  {data.gender}</Features>
      <Features><Span>Species:</Span>  {data.species}</Features>
      <Features><Span>Status:</Span>  {data.status}</Features>
      <Button>{origin ? origin.name : null}</Button>
    </Container>
  )
}

export {CharactersNext}