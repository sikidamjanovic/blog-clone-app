import React, { useState, useEffect } from 'react';
import Feed from './Components/Feed'
import axios from "axios";
import styled from 'styled-components'
import Switch from "react-switch";

const App = props => {

    const [data, setData] = useState([])
    const [idFilter, setIdFilter] = useState('')
    const [titleFilter, setTitleFilter] = useState('')
    const [limit, setLimit] = useState(0)
    const [darkMode, setDarkMode] = useState(false)
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        //Fetch api data
        let url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit='+(limit+30)
        axios.get(url).then(res => {
            setData(res.data)
            setLoading(false)
        })
    }

    const isScrolling = () => {
        // Set the load limit higher when bottom of page is reached
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight){
          return;
        }
        setLimit(limit + 30)
    }

    const filterByID = (e) => {
        e.preventDefault()
        setIdFilter(e.target.value)
        let url = 'https://jsonplaceholder.typicode.com/photos?id=' + e.target.value
        axios.get(url).then(res => {
            setData(res.data)
        })
    }

    const filterByTitle = (e) => {
        e.preventDefault()
        setTitleFilter(e.target.value)
        let url = 'https://jsonplaceholder.typicode.com/photos?title=' + e.target.value
        axios.get(url).then(res => {
            setData(res.data)
        })
    }
      
    useEffect(() => {
        // Fetch unfiltered data whenever searches are empty
        if(data.length !== (limit + 30) && titleFilter.length === 0 && idFilter.length === 0){
            setLoading(true)
            fetchData()
        }
        // Listen to scrolling events (to fetch for more data when bottom is reached)
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    })

    // Return loading and no results text
    const isLoading = () =>{
        if(loading){
            return <InfoText>Loading...</InfoText>
        }else if(!loading && data.length === 0){
            return <InfoText>No Results Found</InfoText>
        }
    }

    const buttons = (
        <Buttons>
            <h1>Blog Clone</h1>
            <input 
                type="search" 
                onChange={filterByID}
                placeholder="Search by ID"
                value={idFilter}
            />
            <input 
                type="search" 
                onChange={filterByTitle}
                placeholder="Search by title"
                value={titleFilter}
            />    
            <Switch 
                onChange={() => setDarkMode(!darkMode)} 
                checked={darkMode ? true : false}
            />
        </Buttons>
    )

    return (
        <div>
            {!darkMode ?
                <LightContainer>
                    {buttons}
                    <Feed mode="light" data={data}/>
                    {isLoading()}
                </LightContainer> 
                :
                <DarkContainer>
                    {buttons}
                    <Feed mode="dark" data={data}/>
                    {isLoading()}
                </DarkContainer>
            }
        </div>
    );
}

const LightContainer = styled.div`
    background-color: #F9F8F6;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 0;
    min-height: 100vh;
`

const DarkContainer = styled.div`
    background-color: #121212;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    z-index: 0;
    min-height: 100vh;
`

const InfoText = styled.p`
    font-family: 'Playfair Display', serif;
    margin-top: 100px;
`

const Buttons = styled.div`
    button{
        &:hover{
            cursor: pointer;
        }
        transition: 0.5s;
        opacity: 1;
        font-size: 13px;
        font-family: 'Source Sans Pro', sans-serif;
        padding: 15px;
        background: none;
        margin-left: 10px;
        margin-right: 2em;
        border: none;
        border-radius: 10px;
    }
    input{
        &::placeholder{
            font-size: 1.2em;
        }
        border: none;
        border-bottom: 2px solid rgba(0,0,0,0.1);
        margin-left: 10px;
        margin-right: 10px;
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 13px;
        padding: 15px;
        background: none;
        color: inherit;
    }
    h1{
        font-family: 'Playfair Display', serif;
    }
    @media (max-width: 600px) {
        height: 200px;
        h1{
            width: 100%;
            text-align: center;
        }
    }
    @media (min-width: 600px) {
        height: 100px;
    }
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: inherit;
    flex-wrap: wrap;
    align-content: stretch;
`

export default App;
