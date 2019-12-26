import React from 'react';

const Post = props => {
    return (
        <div style={styles.postStyle}>
            <img style={styles.imageStyle} src={props.data.url} alt="post"/>
            <h1 style={styles.titleStyle}>{props.data.title}</h1>
        </div>
    );
}

const styles = {
    postStyle: {
        width: '30%',
        margin: '1%',
        boxShadow: '0 19px 38px rgba(0,0,0,0.10), 0 15px 12px rgba(0,0,0,0.11)'
    },
    imageStyle: {
        width: '100%'
    },
    titleStyle: {
        fontFamily: 'Magra',
        padding: '5%',
        fontSize: '2vw'
    }
}

export default Post;
