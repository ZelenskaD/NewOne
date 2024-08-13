import React from 'react';
import { render } from '@testing-library/react';
import FixedComponent from './FixedComponent';


test("it renders without crashing",  ()=> {
  render(<FixedComponent />);
}); //smoke test

//snapshot test

 test("it matches snapshot", ()=> {
    const {asFragment} = render(<FixedComponent />);
    expect(asFragment()).toMatchSnapshot();
})