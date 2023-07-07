import React from "react";
import { useState, useEffect } from "react";
import { req } from "../methods";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
`;
const StyledLink = styled(Link)`
  min-width: 20%;
  border-radius: 5%;
  overflow: hidden;
  text-align: center;
  box-shadow: 0px 4px 10px 0px #00000033;
  min-height: 23rem;
  text-decoration:none;
`;
const ImgContainer = styled.div`
  width: 100%;
`;
export const Img = styled.img`
  width: 100%;
`;
const Name = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  margin: 1rem 0;
`;
 export const Button = styled.div`
  cursor: pointer;
  height: 3rem;
  background: #bd9f9f;
  border-radius:5%;
  width: 15%;
  display:flex;
  align-items: center;
  justify-content:center;
  transition:all 0.2s linear;
  &:hover{
    background: #7a6fa8;
  }
`;
const ButtonContainer = styled.div`
margin: 2rem;
display:flex;
align-items: center;
justify-content:center;
gap: 2rem;
`;
const Characters = ({ url }) => {
  const [posts, SetPosts] = useState([]);
  useEffect(() => {
    req(url).then((info) => {
      SetPosts(info);
    });
  }, []);
  const nextPage = () => {
    return posts["info"].next
      ? req(posts["info"].next).then((info) => {
          SetPosts(info);
        })
      : null;
  };
  const prevPage = () => {
    return posts["info"].prev
      ? req(posts["info"].prev).then((info) => {
          SetPosts(info);
        })
      : null;
  };

  return (
    <>
      <Title>Characters</Title>
      <ButtonContainer>
        <Button onClick={prevPage}>Previous page</Button>
        <Button onClick={nextPage}>Next page</Button>
      </ButtonContainer>
      <StyledContainer>
        {posts.results
          ? posts.results.map((post) => (
              <StyledLink key={post.id}  to={`/characters/${post.id}`}>
                <ImgContainer>
                  <Img src={`${post.image}`} alt={post.name} />
                </ImgContainer>
                <Name>{post.name}</Name>
              </StyledLink>
            ))
          : null}
      </StyledContainer>
      <ButtonContainer>
        <Button onClick={prevPage}>Previous page</Button>
        <Button onClick={nextPage}>Next page</Button>
      </ButtonContainer>
    </>
  );
};

export default Characters;
