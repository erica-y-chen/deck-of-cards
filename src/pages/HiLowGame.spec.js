import React from 'react';
import { render } from 'react-testing-library'; 
import 'react-testing-library/cleanup-after-each';
import "jest-dom/extend-expect";
import Game from './HiLowGame.js';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'



it('runs the test', () => {
    const expected = true;
    const actual = true;
    expect(actual).toBe(expected);
    expect(true).toBe(true);
})

describe('<HiLowGame />', () => {
    it('should display the correct number of guesses correctly', () => {  
        const { getByTestId } = render(<MemoryRouter correct={"2"}><Game testing={true}/></MemoryRouter>)
        const playerGuess = getByTestId('numCorrect');
        expect(playerGuess).toHaveTextContent('Correct: 0');
    })

    it('should display the correct card style when toggled', () => {
        const { getByTestId } = render(<MemoryRouter correct={"2"}><Game modern={true}/></MemoryRouter>)    
        const theme = getByTestId('cardTheme')
        expect(theme).toHaveTextContent('Change Card Theme (Modern)')
    })

})

