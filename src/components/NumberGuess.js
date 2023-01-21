import React, {useState} from 'react';


const NumberGuess = () => {
    const [formNumber, setFormData] = useState();
    const [clicked, setClicked] = useState(false);
    const [randomNum, setRandomNum] = useState();
    const [ans, setAns] = useState('');
    const [gameOver, setGameOver] = useState(false);
    const [round, setRound] = useState(0);
    const [count, setCount] = useState(1);
    let guess = '';

    const num_Regex = new RegExp("^[0-9]$");
    // const phone_regex =  new RegExp("^[1-9]\\d{2}-\\d{3}-\\d{4}$");
 
    const handleChange = (e) => {
        e.preventDefault();
        setFormData(e.target.value);
    }

    const playGame = (e) =>{
        e.preventDefault();
        setClicked(true); 
        setCount(1);
        setRandomNum(Math.floor(Math.random()*10));
        setFormData('');
        setAns('');
    }
    console.log((num_Regex.test('1')));
    const handleSubmit = (e) =>{
        e.preventDefault();
        const isGuessCorrect = (num) =>{
            if(num == randomNum){
                guess = `Correct! You took ${count} attempts`;
                if(count === 1){
                    guess = `Correct! ${count} attempt. Y're GENIUS!`;
                }
                else if(count === 2){
                    guess = `Correct! ${count} attempts. Y're ENTHUSIASTIC!`;
                }
                else if(count === 3){
                    guess = `Correct! ${count} attempts. Y're HARD WORKING!`;
                }
                else if(count === 4){
                    guess = `Correct! ${count} attempts. Y're RESULT ORIENTED!`;
                }
                else {
                    guess = `Correct! ${count} attempts. Great GRIT!`;
                }
                setGameOver(true);
                setAns(guess);
                setRound(round + 1);
            }else if(num > randomNum){
            setAns("It's high")
            }else if(num < randomNum){
                setAns("It's low");
            }
            else if(!num_Regex.test(num)){
                setAns('Takes only a positive number.');
            }
            setCount(count + 1);
            return guess;
        }
        isGuessCorrect(formNumber);
    }

    return (
        <div className='GameContainer'>
            {clicked ? 
                <div> 
                    <div className='palindromeQuestions'>
                        <p className='excitement'>Guess a Number</p>
                        <div>
                            <p>I am thinking a random positive number less than 10. </p>
                            <p className='palin'>Follow the <b>HINTS</b> and find that number.</p>
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
                    <div className='gameVariable'>
                        <div> 
                            {ans ? <div className='ansDiv'>{ans} </div>: <div className='ansEmpty'>&nbsp;</div>}
                        </div> 
                      
                        <div>
                            {gameOver ? <button onClick={playGame} className='playAgainButton'>Play Again</button>
                            : <div> &nbsp; </div> }
                        </div>
                    </div>
                </div> 
                : 
                <div className='guessBtnDiv'>
                    <div> <button onClick={playGame} className='guessNumberBtn'>Guess A Number Game</button> </div>
                </div>
            }
        </div>
    )
}

export default NumberGuess;