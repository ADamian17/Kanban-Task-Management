import type { Meta, StoryObj } from "@storybook/react";

import Select from ".";

const meta = {
  component: Select,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "Array of options to display in the dropdown",
    },
  },
  args: {
    placeholder: "Select an option",
    options: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" },
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: { label: "Option 1", value: "option-1" },
  },
};
