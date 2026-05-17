import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: { size: 'md' },
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 24, padding: 16 }}>
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
    </View>
  ),
};

export const CustomColor: Story = {
  args: { size: 'md', color: '#E91616' },
};

export const Fullscreen: Story = {
  render: () => (
    <View style={{ height: 300 }}>
      <Loading fullscreen />
    </View>
  ),
};
