import { Email, Facebook, Instagram, Phone, Place, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
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
    padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
    flex: 1;
    padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
    width: 50%;
    height: auto;
`;



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>AZN BUZZIN ~_~</Logo>
            <Desc>There are many variations of flavor of Soju. You won't know until you try.</Desc>
            <SocialContainer>

                <SocialIcon color='3B5999'>
                    <Facebook />
                </SocialIcon>

                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>

                <SocialIcon color='55ACEE'>
                    <Twitter />
                </SocialIcon>

            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>CONTACT US</Title>

            <ContactItem>
                <Place style={{marginRight: "10px"}} /> 11823 Westminster Commons, Charlotte NC 28217
            </ContactItem>

            <ContactItem>
                <Phone style={{marginRight: "10px"}} /> +1 704 987 6543
            </ContactItem>

            <ContactItem>
                <Email style={{marginRight: "10px"}} /> contact@aznbuzzin.com
            </ContactItem>

            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

        </Right>
    </Container>
  )
}

export default Footer
