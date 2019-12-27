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
    column-count: 3;
    column-gap: 2em;
    max-width: 1280px;
`

export default Feed;
