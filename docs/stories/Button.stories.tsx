import { fn } from '@storybook/test';
import Button from '../../src/atoms/Button/Button';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    countCommitsFor: 'Button',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      table: { defaultValue: { summary: 'primary' } },
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'outlined'],
      },
    },
    disabled: {
      type: 'boolean',
    },
  },
  args: { variant: 'primary' },
};
export default ButtonMeta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: ({ variant, ...props }) => (
    <Button variant={variant} {...props}>
      Click
    </Button>
  ),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: ({ variant, ...props }) => (
    <Button variant={variant} {...props}>
      Click
    </Button>
  ),
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
  render: ({ variant, ...props }) => (
    <Button variant={variant} {...props}>
      Click
    </Button>
  ),
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
  render: ({ variant, ...props }) => (
    <Button variant={variant} {...props}>
      Click
    </Button>
  ),
};
