import React from 'react';

const Button = ({handleRandomCards,randomColors}) => {
    
    return (
    <>
    
        <button onClick={handleRandomCards}><span className="icon-circle-right shadow--text" style={{color : randomColors}}></span></button>
    
    </>
    );
};

export default Button;