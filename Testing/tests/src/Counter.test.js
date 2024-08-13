import React from 'react';
import { render ,fireEvent} from '@testing-library/react';
import Counter from './Counter';


test("it renders without crashing",  ()=> {
  render(<Counter />);
}); //smoke test

test("playing with queries", () =>{
  const {getByText} = render(<Counter />)
  console.log(getByText(`Let's count`, {exact: false}));

})

test("get all", () =>{
  const {getAllByText} = render(<Counter />)
  console.log(getAllByText(`count`, {exact: false}));

})

// test("get all", () =>{
//   const {getAllByText} = render(<Counter />)
//   console.log(getAllByText(`count`, {exact: false}));
//
// })

test("get by ", () =>{
  const {getByPlaceholderText} = render(<Counter />)
  console.log(getByPlaceholderText(`username`));

})

test("get by label", () =>{
  const {getByLabelText} = render(<Counter />)
  console.log(getByLabelText(`Username`));

})


test("button increment counter", () =>{
  const {getByText, debug} = render(<span> <Counter /></span>);
  // eslint-disable-next-line testing-library/no-debugging-utils
  debug();
  const h2 = getByText('Current count: 0');
  const btn = getByText("Add");
  fireEvent.click(btn);
  debugger;
  expect(h2).toHaveTextContent('1')
  expect(h2).not.toHaveTextContent('0')

})