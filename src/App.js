import React, { useState, useEffect } from 'react';
import Feed from './Components/Feed'
import axios from "axios";
import styled from 'styled-components'
import './App.css';

const App = props => {

    const [data, setData] = useState([])
    const [limit, setLimit] = useState(0)
    const [mode, setMode] = useState('light')

    const fetchData = () => {
        let url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit='+(limit+30)
        axios.get(url).then(res => {
            setData(res.data)
        })
    }

    const isScrolling = () => {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
          return;
        }
        setLimit(limit + 30)
    }
      
    useEffect(() => {
        fetchData()
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    })

    return (
        <div>
            {mode === "light" ?
                <LightContainer>
                    <Buttons>
                        <input type="search" placeholder="Search by ID..."/>
                        <button onClick={() => setMode('dark')}>Dark Mode</button>
                    </Buttons>
                    <Feed mode="light" data={data}/>
                </LightContainer> 
                :
                <DarkContainer>
                    <Buttons>
                        <button onClick={() => setMode('light')}>Light Mode</button>
                    </Buttons>
                    <Feed mode="dark" data={data}/>
                </DarkContainer>
            }
        </div>
    );
}

const LightContainer = styled.div`
    background-color: #F9F8F6;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;
`

const DarkContainer = styled.div`
    background-color: #121212;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    z-index: 0;
`

// const Header = styled.div`
//     height: 150px;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-family: 'PT Sans', sans-serif;
//     font-size: 1.5em;
// `

const Buttons = styled.div`
    button{
        &:hover{
            opacity: 1;
            cursor: pointer;
        }
        transition: 0.5s;
        opacity: 0.5;
        font-size: 1.05em;
        font-family: 'Pt Sans', serif;
        padding: 15px;
        background: none;
        margin-left: 20px;
        border: none;
    }
    input{
        border: none;
        font-family: 'Pt Sans', serif;
        padding: 15px;
        background: none;
    }
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
    height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
`

export default App;
