import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Button from "../src/Button";

describe("Running Test for Marbella Button", () => {

  test("Check Button Disabled", () => {
    render(<Button text="Button disabled" isDisabled />)
    expect(screen.getByRole('button', { name: "Button disabled" })).toBeDisabled();
  });
});