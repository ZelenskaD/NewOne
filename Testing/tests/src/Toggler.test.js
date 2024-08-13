import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Toggler from './Toggler';

// it('should start show up', () => {
//     const { getByText} = render(<Toggler/>)
//     expect(getByText("Hello World" )).toHaveClass("Toggler-text")
// })

it('should start show up', () => {
    const { getByText} = render(<Toggler/>)
    const heading = getByText("Hello World")
    expect(heading).toHaveClass("Toggler-text");
    expect(heading).toBeInTheDocument();
    fireEvent.click(getByText('Toggle'));
    expect(heading).not.toBeInTheDocument();

})


