import { useState } from "react";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import AppleSoju from "../Img/applesoju.jpeg"
import styled from "styled-components"

// import { sliderItems } from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: teal; */
    position: relative;
    overflow: hidden;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"}; //JS 
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Wrapper =styled.div`
    height: 100%;  
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * - 100}vw);
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`
    height: 90%;
    flex: 1;
`;
const Image = styled.div`
    height: 10px;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            <Slide bg="f5fafd">
                <ImgContainer>
                    <Image><img src={AppleSoju} alt="Soju" /></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>DISCOUNT</Title>
                    <Desc>SOJU ON SALE!! ONLY LIMITED TIME!!</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            
            <Slide bg="fcf1ed">
                    <ImgContainer>
                        <Image><img src={AppleSoju} alt="Soju" /></Image>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>DISCOUNT</Title>
                        <Desc>SOJU ON SALE!! ONLY LIMITED TIME!!</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
            </Slide>
            
            <Slide bg="fbf0f4">
                <ImgContainer>
                    <Image><img src={AppleSoju} alt="Soju" /></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>DISCOUNT</Title>
                    <Desc>SOJU ON SALE!! ONLY LIMITED TIME!!</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>

        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider











 