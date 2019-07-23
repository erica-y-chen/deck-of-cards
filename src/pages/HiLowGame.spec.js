import React from 'react';
import {render} from 'react-testing-library'; 
import 'react-testing-library/cleanup-after-each';
import "jest-dom/extend-expect";
import Game from './HiLowGame.js';

it('runs the test', () => {
    const expected = true;
    const actual = true;
    expect(actual).toBe(expected);
    expect(true).toBe(true);
})

describe('<HiLowGame />', () => {
    it('should allow user to draw a card when they have made a guess', () => {
        const { getByTestId } = render(<Game playerGuess={true}/>);
    
        const drawCard = getByTestId('draw-card');
        expect(drawCard).toHaveClass("draw-card");
    })
})
// describe('guess High', () => {
//     it('should return high if correct', () => {
//         expect(highLow.guessHigh('high')).toBe('low');
//     })
// })

