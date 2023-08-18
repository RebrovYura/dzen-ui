import React from 'react'
import { Meta, StoryObj } from "@storybook/react";
import Button from "../src/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Yuri's/Button",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);

Primary.args = {
  variant: "solid",
  isDisabled: false,
  text: "Solid",
};

export const Secondary: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Secondary.args = {
  variant: "outline",
  isDisabled: false,
  text: "Outline",
};

export const Disabled: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Disabled.args = {
  variant: "solid",
  isDisabled: true,
  text: "Disabled",
};

export const Small: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Small.args = {
  variant: "solid",
  isDisabled: false,
  size: "sm",
  text: "Small",
};

export const Medium: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Medium.args = {
  variant: "solid",
  isDisabled: false,
  size: "md",
  text: "Medium",
};

export const Large: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Large.args = {
  variant: "solid",
  isDisabled: false,
  size: "lg",
  text: "Large",
};