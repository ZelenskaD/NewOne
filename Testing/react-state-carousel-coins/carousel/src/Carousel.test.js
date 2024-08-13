import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";



//smoke test

it("renders without crashing", () => {
  render(<Carousel photos="photos" title="Shells from far-away beaches"/>);
});

//Snapshot test
it("renders without crashing", () => {
  const {asFragment} = render(<Carousel photos="photos" title="Shells from far-away beaches"/>);
  expect(asFragment()).toMatchSnapshot();
});




it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

//catches bug
it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move to the left in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the third image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).toBeInTheDocument();
});


test("left arrow is missing on the first image", () => {
  const { queryByTestId } = render(<Carousel photos={TEST_IMAGES} title="Test Carousel" />);

  // Check that the left arrow is not in the document
  const leftArrow = queryByTestId("left-arrow");
  expect(leftArrow).not.toBeInTheDocument();
});

test("right arrow is missing on the last image", () => {
  const { queryByTestId, getByTestId } = render(<Carousel photos={TEST_IMAGES} title="Test Carousel" />);

  // Move to the last image
  const rightArrow = getByTestId("right-arrow");
  fireEvent.click(rightArrow); // move to second image
  fireEvent.click(rightArrow); // move to third image

  // Check that the right arrow is not in the document
  const newRightArrow = queryByTestId("right-arrow");
  expect(newRightArrow).not.toBeInTheDocument();
});