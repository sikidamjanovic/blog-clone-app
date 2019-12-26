import React from 'react';
import Post from '../Components/Post'

const Feed = props => {

    const feed = props.data.map(post => 
        <Post data={post}/>
    )

    return (
        <div style={styles.feedStyle}>
            {feed}
        </div>
    );
}

const styles = {
    feedStyle: {
        display: 'flex',
        flexWrap: 'wrap'
    }
}

export default Feed;
