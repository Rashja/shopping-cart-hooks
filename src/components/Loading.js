import React from 'react';

const loadingStyle={
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}
const Loading = () => {
    return(
        <div style={loadingStyle} >
            <img  src='./images/loading.gif' alt="loading..." />
        </div>
    )
}
export default Loading;