import type { Meta, StoryObj } from "@storybook/react";

import TextField from ".";

const meta = {
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the input field",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input field",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
  },
  args: {
    label: "Text Field (Idle)",
    placeholder: "Enter task name",
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextFieldActive: Story = {
  args: {
    label: "Text Field (Active)",
    value: "Building a slideshow",
  },
};

export const TextFieldError: Story = {
  args: {
    label: "Text Field (Error)",
    error: "Can't be empty",
  },
};
