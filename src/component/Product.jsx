import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

import Grapesoju from '../Img/grapesoju.jpeg';

const Container = styled.div`
    flex: 1;
    margin: 5px;
`;
const Circle = styled.div`
    
`;
const Image = styled.img`
    
`;
const Info = styled.div`
    
`;
const Icon = styled.div`
    
`;


const Product = () => {
  return (
    <Container>
        <Circle />
        <Image><img src={Grapesoju} alt="Soju" /></Image>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>

            <Icon>
                <SearchOutlined />
            </Icon>

            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
