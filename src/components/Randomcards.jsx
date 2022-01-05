
import React from 'react';

const Randomcards = ({card, randomColors}) => {
    return (<>
            <h4 style={{color : randomColors}} className='shadow--text'><span className="ico icon-hangouts shadow--text" style={{color : randomColors}}></span>{card.quote}</h4>
         <div className='flex-finally'><h3 style={{color : randomColors}} className='shadow--text'>{card.author}</h3></div>
    </>);
};

export default Randomcards;