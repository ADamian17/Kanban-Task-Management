import type { Meta, StoryObj } from "@storybook/react";

import SelectField from ".";

const meta = {
  component: SelectField,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "Array of options to display in the dropdown"
    }
  },
  args: {
    label: "Current Status",
    placeholder: "Select status..."
  }
} satisfies Meta<typeof SelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: "Option 1", value: "option-1" },
      { label: "Option 2", value: "option-2" },
      { label: "Option 3", value: "option-3" }
    ],
    onChange: (val) => alert(val)
  }
};
