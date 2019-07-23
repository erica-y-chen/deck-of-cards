import React from 'react';
import { render } from 'react-testing-library'; 
import 'react-testing-library/cleanup-after-each';
import "jest-dom/extend-expect";
import Game from './HiLowGame.js';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { fireEvent } from 'react-testing-library/dist';



it('runs the test', () => {
    const expected = true;
    const actual = true;
    expect(actual).toBe(expected);
    expect(true).toBe(true);
})

describe('<HiLowGame />', () => {
    it('should display the correct number of guesses correctly', () => {  
        const { getByTestId } = render(<MemoryRouter><Game testing={true}/></MemoryRouter>)
        const playerGuess = getByTestId('numCorrect');
        expect(playerGuess).toHaveTextContent('Correct: 0');
    })

    it('should display the correct card style when toggled', () => {
        const { getByTestId } = render(<MemoryRouter><Game modern={true}/></MemoryRouter>)    
        const theme = getByTestId('cardTheme')
        expect(theme).toHaveTextContent('Change Card Theme (Classic)')
    })

    it('should have the active player selected', () => {
        const { getByTestId } = render(<MemoryRouter><Game/></MemoryRouter>)    
        const player1 = getByTestId('player1-info')
        expect(player1).toHaveClass('player-info-selected')
    })

    it('should display the pass player button when the player has 3 or more correct ', () => {
        const { getByTestId } = render(<MemoryRouter><Game correct={3}/></MemoryRouter>) 

        const passPlayer = getByTestId('pass-player')
        expect(passPlayer).toHaveTextContent('Pass Turn')
    })

    it("the player should able to pick a card once they have made a guess", () => {
        const { getByTestId } = render(<MemoryRouter><Game playerGuess={true}/></MemoryRouter>) 

        const drawCard = getByTestId('drawCard')
        expect(drawCard).toHaveTextContent('draw card')
    })

    it("the player should not be able to draw a card without making a guess first", () => {
        const { getByTestId } = render(<MemoryRouter><Game playerGuess={false}/></MemoryRouter>) 

        const drawCard = getByTestId('drawCard')
        expect(drawCard).toHaveTextContent('')
    })

})

