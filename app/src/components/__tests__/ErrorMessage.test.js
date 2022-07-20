import * as React from "react";

import renderer from "react-test-renderer";

import ErrorMessage from "../ErrorMessage";

it("Will render ErrorMessage correctly", () => {
  const component = renderer
    .create(<ErrorMessage message={"error"} />)
    .toJSON();

  expect(component).toMatchSnapshot();
});
