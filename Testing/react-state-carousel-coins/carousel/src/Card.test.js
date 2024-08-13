import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

it("should render", () => {
    render(<Card caption="testing image 1" src="test1.com"  />)
})

it("should match snapshot", () => {
    const{asFragment} = render(<Card caption="testing image 1" src="test1.com"  />);
    expect(asFragment()).toMatchSnapshot();
})