import type { Meta, StoryObj } from "@storybook/react";

import Modal from ".";

const meta = {
  component: Modal,
  parameters: {},
  tags: ["autodocs"]
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    show: true,
    children: <div>Modal content</div>,
  },
};
