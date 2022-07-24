import React from "react";

import { render, fireEvent, act } from "@testing-library/react-native";
import MealSelectionView from "../src/components/MealSelectionView";
import { mockData1, mockData2 } from "../src/util/mockData";

test("render component and expect to match snapshot", async () => {
  fetch.mockResponseOnce(
    // If the fetch is immediately when you load component, you have to set the mocked fetch before you load component
    JSON.stringify({ meal_roulette_app_meals_aggregate: mockData1 })
  ); // when fetch is called this is what will be returned
  const navigate = jest.fn();

  const component = render(<MealSelectionView navigation={{ navigate }} />);

  await act(() => new Promise((resolve) => setImmediate(resolve))); // wait for the fetch to be resolved

  expect(component).toMatchSnapshot();
});

test("before the component has loaded the isLoadingcomponent should be shown", async () => {
  fetch.mockResponses([
    JSON.stringify({ meal_roulette_app_meals_aggregate: mockData1 }),
  ]);

  const navigate = jest.fn();

  const component = render(<MealSelectionView navigation={{ navigate }} />);

  const { queryByTestId } = component;

  const loader = queryByTestId("loader");

  expect(loader).not.toBeNull();
  await act(() => new Promise((resolve) => setImmediate(resolve)));
});

test("pressing the refresh button, refreshes the page", async () => {
  fetch.mockResponses(
    [JSON.stringify({ meal_roulette_app_meals_aggregate: mockData1 })],
    [JSON.stringify({ meal_roulette_app_meals_aggregate: mockData2 })]
  );

  const navigate = jest.fn();

  const component = render(<MealSelectionView navigation={{ navigate }} />);

  const { getByText } = component;
  await act(() => new Promise((resolve) => setImmediate(resolve)));

  const refreshButton = getByText("Refresh");

  fireEvent.press(refreshButton);

  await act(() => new Promise((resolve) => setImmediate(resolve)));

  expect(component).toMatchSnapshot();
});

test("pressing the refresh button until no more meals arrive gives error message", async () => {
  fetch.mockResponses([
    JSON.stringify({ meal_roulette_app_meals_aggregate: mockData1 }),
  ]);

  const navigate = jest.fn();

  const component = render(<MealSelectionView navigation={{ navigate }} />);

  const { getByText, queryByTestId } = component;
  await act(() => new Promise((resolve) => setImmediate(resolve)));

  const refreshButton = getByText("Refresh");

  fireEvent.press(refreshButton);

  await act(() => new Promise((resolve) => setImmediate(resolve)));

  const errorText = queryByTestId("errorText");

  expect(errorText).not.toBeNull();
});

test("navigate should be called when pressing on each of the food items", async () => {
  fetch.mockResponses([
    JSON.stringify({ meal_roulette_app_meals_aggregate: mockData1 }),
  ]);

  const navigate = jest.fn();

  const component = render(<MealSelectionView navigation={{ navigate }} />);

  const { debug, getAllByTestId } = component;
  await act(() => new Promise((resolve) => setImmediate(resolve)));

  const foodFlatlist = getAllByTestId("food-item");

  for (let i = 0; i < foodFlatlist.length; i++) {
    const foodItemPressable = foodFlatlist[i];
    fireEvent.press(foodItemPressable);
  }

  expect(navigate.mock.calls.length).toBe(4); // expect each food item to be pressed
});
