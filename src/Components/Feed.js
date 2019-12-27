import React from 'react';
import Post from '../Components/Post'
import styled from 'styled-components'

const Feed = props => {

    const feed = props.data.map(post => 
        <Post 
            data={post} 
            mode={props.mode}
        />
    )

    return (
        <Container>
            {feed}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
`

export default Feed;
