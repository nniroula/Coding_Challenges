import React, { useState } from 'react';

/**  
 * Palindrome is a phrase/word that reads same backward or forward.
 * Example, tacocat reads tacocat from both directions. Similarly noon.
*/
const Palindrome = () => {
    const [formData, setFormData] = useState();
    const [palindrome, setPalindrome] = useState();
 
    const handleChange = (e) => {
        e.preventDefault();
        setFormData(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const isPalindrome = (word) =>{
            let right = false;
            for(let i = 0; i< word.length; i++){
                if(word[word.length - 1 -i] === word[i]){
                    right = true;
                }
                else{
                    right = false;
                    break;
                }
            }
            return right;
        }
        const result = isPalindrome(formData);
        if(result === true){
            setPalindrome("It's a palindrome!")
        }
        if(result === false){
            setPalindrome("Not a palindrome.");
        }
    }

    return (
        <div className='PalindromeDiv'>
            <div className='palindromeQuestions'>
                <p className='excitement'>Find Palindrome</p>
               <div>
                <p className='palin'> Do you know what the <b>Palindrome</b> is? </p>
                <p className='ans'>It's a word/phrase that reads the same backward or forward.</p>
                <p>Submit a word and I will tell you if it's a palindrome.</p>
               </div>
            </div>
            <form className='form'>
                <label htmlFor='word'>Word </label>
                <input id='word' 
                    type='text' 
                    placeholder='enter a word' 
                    name='userWord' 
                    value={formData}
                    onChange={handleChange}
                /> 
                <button onClick={handleSubmit}> Submit </button>
            </form>
            <div className='palindromeVariable'>
                {palindrome ? palindrome : <div> &nbsp;</div>}
            </div>
        </div>
    )
}

export default Palindrome;
