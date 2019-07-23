import React from 'react';
import { render } from 'react-testing-library'; 
import 'react-testing-library/cleanup-after-each';
import "jest-dom/extend-expect";
import Modal from './ChangePlayerModal.js';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Instructions from './Instructions.js';


describe('<instructions />', () => {
    it('runs the tests', () => {
        render(<Instructions/>)
        expect(true).toBe(true)
    })


    it('should correctly render the title that is being passed through props', () => {  
        const { container, getByTestId } = render(<Instructions title={"hello"}/>)
        const title = getByTestId('title')
        expect(title).toHaveTextContent('hello');
    })

})

