import React, {useState} from 'react';

/*
const NumberGuess = () => {
    // random number
    // let randomNumber = Math.floor(Math.random()*10);
    const isGuessCorrect = () => {

        let randomNumber = Math.floor(Math.random()*10);
        let num = prompt('enter number:');
        let guess = false;
        let count = 0;
        if(num == randomNumber){
            guess = `Correct! You took ${count} guesses`;
            console.log(guess);
        }
        while(num != randomNumber){
            // if(num === randomNumber){
            //     guess = true;
            // }
            if(num > randomNumber){
                guess = 'You are little bit high';
                // console.log('enter a number');
                // num = prompt('enter number');
                console.log(guess);
            }
            else if(num < randomNumber){
                guess = 'You are littel bit low';
                console.log(guess);
            }  
            count++;
            num = prompt('enter number');
        }
        return guess;
    }
    // console.log(isGuessCorrect(3));
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        console.log("GOOD");
    }
    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor='num'>Number</label>
                <input 
                    type='text'
                    id='num' 
                    placeholder='Enter a number' 
                    value={e.target.value}
                    name='num'
                    onChange={handleChange}
                />
                <button onClick="handleSubmit">Submit</button>
            </form>
        </div>
    )
}

export default NumberGuess;

*/


// 
// 


const NumberGuess = () => {
    const [formNumber, setFormData] = useState();
    const [clicked, setClicked] = useState(false);
    const [randomNum, setRandomNum] = useState();
    const [ans, setAns] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [round, setRound] = useState(0);
 
    const handleChange = (e) => {
        e.preventDefault();
        setFormData(e.target.value);
    }

    let count = 0;

    const playGame = (e) =>{
        e.preventDefault();
        setClicked(true); 
        count = 0;
        setRandomNum(Math.floor(Math.random()*10));
        setFormData('');
    }

    let guess = '';

    const handleSubmit = (e) =>{
        e.preventDefault();
       
        const isGuessCorrect = (num) =>{
            if(num == randomNum){
                guess = 'correct';
                setGameOver(true);
                setAns('correct!')
                setRound(round + 1);
            }else if(num > randomNum){
                setAns("It's high")
            }else if(num < randomNum){
                setAns("It's low");
            }
            return guess;
        }
        isGuessCorrect(formNumber);
    }

    return (
        <div className='PalindromeDiv'>
            {clicked ? 
                <div> 
                    <div className='palindromeQuestions'>
                        <p className='excitement'>Guess a Number</p>
                        <div>
                            <p>I am thinking a random number between 0 to 10. </p>
                            <p> Find what that number is.</p>
                            <p className='palin'> <b>HINTS</b> will take you from A to B. </p>
                        </div>
                    </div>
                    <form className='form'>
                        <label htmlFor='num'>Number </label>
                        <input id='num' 
                            type='text' 
                            placeholder='Enter a number' 
                            name='userNumber' 
                            value={formNumber}
                            onChange={handleChange}
                        /> 
                        <button onClick={handleSubmit}> Submit </button>
                   
                    </form>
                    <div className='variable'>
                            {ans}
                    </div>
                </div> 
                : 
                <div>
                    <div> <button onClick={playGame}>Guess A Number Game</button> </div>
                </div>
            }
            {gameOver && <div> <button onClick={playGame}>Play Again</button></div> }
        </div>
    )
}

export default NumberGuess;