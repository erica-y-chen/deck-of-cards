import React from 'react';
import { render } from 'react-testing-library'; 
import 'react-testing-library/cleanup-after-each';
import "jest-dom/extend-expect";
import Modal from './ChangePlayerModal.js';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import ChangePlayerModal from './ChangePlayerModal.js';



// it('runs the test', () => {
//     const expected = true;
//     const actual = true;
//     expect(actual).toBe(expected);
//     expect(true).toBe(true);
// })

describe('<ChangePlayerModal />', () => {
    it('runs the tests', () => {
        render(<Modal/>)
        expect(true).toBe(true)
    })


    it('should display the turn is being passed if the user is passing the turn', () => {  
        const { container, getByTestId } = render(<Modal show={true} passing={true} correct={"4"}/>)
        const modal = getByTestId('modalText')
        expect(modal).toHaveTextContent('Turn passed Next player, click here to begin your turn');
    })

    it('should display the player was wrong and the turn is being passed if there was an incorrect guess', () => {  
        const { container, getByTestId } = render(<Modal show={true} passing={false} correct={"4"}/>)

        console.log(container.firstChild)
        const modal = getByTestId('modalText')
        expect(modal).toHaveTextContent("You're wrong! Next player, click here to begin your turn");
    })

})

