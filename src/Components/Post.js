import React from 'react';
import styled from 'styled-components'
import Lorem from 'react-lorem-component'

const Post = props => {
    
    return (
        <Container>
            {props.mode === "light" ?
                <Light>
                    <Img src={props.data.url} alt="post"></Img>
                    <Title>{props.data.title}</Title>
                    <Paragraph>
                        <Lorem 
                            count={1} 
                            seed={props.data.id}
                        />
                    </Paragraph>
                </Light>:
                <Dark>
                    <Img src={props.data.url} alt="post"></Img>
                    <Title>{props.data.title}</Title>
                    <Paragraph>
                        <Lorem 
                            count={1} 
                            seed={props.data.id}
                        />
                    </Paragraph>
                </Dark>
            }
        </Container>
    );
}

const Container = styled.div`
    &:hover{
        transform: scale(1.01);
        box-shadow: 0 19px 38px rgba(0,0,0,0.10), 0 15px 12px rgba(0,0,0,0.07);
        cursor: pointer;
        border: none;
    }
    transition: 0.5s;
    display: inline-block;
    margin: 0 0 1.5em;
    width: 100%;
    background-color: #FFFFFF;
`

const Light = styled.div`
    background-color: white;
    height: 100%;
`

const Dark = styled.div`
    background-color: #303030;
    height: 100%;
`

const Img = styled.img`
    &:hover{
        -webkit-filter: grayscale(0%);
    }
    transition: 0.5s;
    width: 100%;
    height: 200px;
    object-fit: cover;
    -webkit-filter: grayscale(60%);
`

const Title = styled.h1`
    font-family: 'PT Sans', sans-serif;
    font-size: 1.5em;
    padding-left: 5%;
    padding-right: 5%;  
    letter-spacing: 0.05em;
`

const Paragraph = styled.p`
    font-family: 'Playfair Display', serif;
    opacity: 0.6;
    padding-left: 5%;
    padding-right: 5%;  
    letter-spacing: 0.03em;
`

export default Post;
