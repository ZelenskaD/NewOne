import React from 'react';
import { render } from '@testing-library/react';
import Dog from './Dog';


// it("should renders without crashing",  ()=> {
//   render(<Dog />);
// }); //smoke test

it("should render", () => {
    render(<Dog name="Rusty" isAdopted={true} />)
})

it("should match snapshot", () => {
    const {asFragment} = render(<Dog name='Rusty' isAdopted={true} />)
    expect(asFragment()).toMatchSnapshot();
})

it("should not match snapshot", () => {
    const {asFragment} = render(<Dog name='Rusty' isAdopted={false} />)
    expect(asFragment()).toMatchSnapshot();
})