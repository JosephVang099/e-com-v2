import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../../component/Announcement';
import Footer from '../../component/Footer';
import Navbar from '../../component/Navbar';
import Newsletter from '../../component/Newsletter';

import PomegranateSoju from '../../Img/pomegranatesoju.jpeg';


const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
   width: 100%;
   height: 90vh;
   object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option`
    
`;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
     padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    
    &:hover{
        background-color: #f8f4f4;
    }
`;


const Pomegranate = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />

        <Wrapper>
            <ImgContainer>
                <Image src={PomegranateSoju}/>
            </ImgContainer>
            <InfoContainer>
                <Title>Pomegranate Soju</Title>
                <Desc>Original Soju with a Pomegranate Taste to it. Fruity and Flavorful!!</Desc>
                <Price>$ 10.99</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>SIZE</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>375 ML</FilterSizeOption>
                            <FilterSizeOption>1.75 L</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>

            </InfoContainer>
        </Wrapper>

        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Pomegranate;