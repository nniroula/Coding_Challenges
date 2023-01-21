import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import NumberGuess from '../components/NumberGuess';
import Palindrome from '../components/Palindrome';
import Home from '../components/Home';

/*This is a Smoke test: it tests if the component is rendered.
 SnapShot test tests if the rendering changed.
 */
 test('Component should render without crashing', () => {
    render(
          <NumberGuess />
    );      
});

test('Click on the Guess a number game button should show the content(HINTS)', () => {
        render(
            <NumberGuess />
        )
        const mainButton = screen.queryByText('Guess A Number Game');
        expect(mainButton).toBeInTheDocument();
        expect(screen.queryByText(/HINTS/i)).not.toBeInTheDocument();
        
        fireEvent.click(mainButton);
        expect(screen.queryByText(/HINTS/i)).toBeInTheDocument(); 
})

test('Component should render without crashing', () => {
    render(
          <Palindrome />
    );      
});

test('Component should render without crashing', () => {
    render(
          <Home />
    );      
});