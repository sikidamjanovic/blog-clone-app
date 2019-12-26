import React, { useState, useEffect } from 'react';
import Feed from './Components/Feed'
import axios from "axios";
import './App.css';

const App = props => {

    const [data, setData] = useState([])
    const [limit, setLimit] = useState(0)

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
        <div style={styles.appStyle}>
            <Feed data={data}/>
        </div>
    );
}

const styles = {
    appStyle: {
        backgroundColor: '#F9F8F6'
    }
}

export default App;
