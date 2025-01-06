import type { Meta, StoryObj } from '@storybook/react';

import TextareaField from '.';

const meta = {
  component: TextareaField,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    error: {
      control: 'text',
      description: 'Error message to display'
    }
  },
  args: {
    label: 'Textarea Field (idle)',
    placeholder: "e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little",
  },
} satisfies Meta<typeof TextareaField>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {},
};

export const TextareaFieldActive: Story = {
  args: {
    label: 'Textarea Field (Active)',
    value: 'Building a slideshow',
  },
};

export const TextareaFieldError: Story = {
  args: {
    label: 'Textarea Field (Error)',
    error: "Can't be empty",
  },
};
