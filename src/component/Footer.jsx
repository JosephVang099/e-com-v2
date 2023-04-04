import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AZN BUZZIN ~_~</Logo>
            <Desc>There are many variations of flavor of Soju. You won't know until you try.</Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook />
                </SocialIcon>

                <SocialIcon>
                    <Instagram />
                </SocialIcon>

                <SocialIcon>
                    <Twitter />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer
