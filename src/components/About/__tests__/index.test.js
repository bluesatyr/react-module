import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup); // ensures that after each test, we won't have any leftover memory data

describe('About component', () => {
    it('renders', () => { // `it` and `test` can be used interchangeably to create a test
        render(<About />);
    });

    // compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />); // asFragment returns a snapshot of the About component
        expect(asFragment()).toMatchSnapshot();
    })
})