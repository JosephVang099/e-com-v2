import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import { Link, NavLink, Route, Switch } from "react-router-dom";
import styled from 'styled-components';



// ROUTING PAGES
import Americano from '../pages/products/Americano';
import Apple from '../pages/products/Apple';
import Citron from '../pages/products/Citron';
import Grape from '../pages/products/Grape';
import Honey from '../pages/products/Honey';
import Lychee from '../pages/products/Lychee';
import Mango from '../pages/products/Mango';
import Original from '../pages/products/Original';
import Peachy from '../pages/products/Peachy';
import Pineapple from '../pages/products/Pineapple';
import Pomegranate from '../pages/products/Pomegranate';
import Watermelon from '../pages/products/Watermelon';



const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
    opacity: 1;
  }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;
const Image = styled.img`
    height: 75%;
    z-index: 2;
`;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const Product = ({ item }) => {
  return (
    <Container>
        <Circle />
        
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <Link to={`/pages/products/${item.id}`} className="nav-link" activeClassName="active">
                    <SearchOutlined />
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    
        <Switch>
            <Route path="/pages/products/Americano" component={Americano} />
            <Route path="/pages/products/Apple" component={Apple} />
            <Route path="/pages/products/Citron" component={Citron} />
            <Route path="/pages/products/Grape" component={Grape} />
            <Route path="/pages/products/Honey" component={Honey} />
            <Route path="/pages/products/Lychee" component={Lychee} />
            <Route path="/pages/products/Mango" component={Mango} />
            <Route path="/pages/products/Original" component={Original} />
            <Route path="/pages/products/Peachy" component={Peachy} />
            <Route path="/pages/products/Pineapple" component={Pineapple} />
            <Route path="/pages/products/Pomegranate" component={Pomegranate} />
            <Route path="/pages/products/Watermelon" component={Watermelon} />
        </Switch>
    </Container>
  )
}

export default Product
