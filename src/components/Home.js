import React from 'react';
import Palindrome from './Palindrome';
import NumberGuess from './NumberGuess';

const Home = () => {
    return (
        <div className='HomePage'>
            <div className='HomePageButton'>
                <button className='HomeButton'>Play Games, Be Refreshed!</button>
            </div>
     
            <Palindrome />
            <NumberGuess />
        </div>
    )
}
export default Home;