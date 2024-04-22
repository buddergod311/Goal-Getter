import React from 'react';
import './Title.css';

const Title = () => {
    return (
        <div className='title'>
            <img width='180' src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fnotebook-transparent%2Fnotebook-transparent-19.png&f=1&nofb=1&ipt=82fe25543e4b71cb793eb83d543824caaf18bd0e1e13968ccd71d7729fd28314&ipo=images' alt='Notebook'/>
            <h1>Goal Getter</h1>
            <p>
                Interactive schedule builder and goal management system.
            </p>
        </div>
    );
};

export default Title;