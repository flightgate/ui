import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithInitials: Story = {
  args: { initials: 'AB', size: 'md' },
};

export const WithImage: Story = {
  args: {
    source: 'https://i.pravatar.cc/150?img=3',
    size: 'md',
  },
};

export const Fallback: Story = {
  args: { size: 'md' },
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <Avatar initials="SM" size="sm" />
      <Avatar initials="MD" size="md" />
      <Avatar initials="LG" size="lg" />
      <Avatar initials="XL" size="xl" />
    </View>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 12 }}>
      <Avatar initials="A1" bg="primary" />
      <Avatar initials="A2" bg="success" />
      <Avatar initials="A3" bg="danger" />
      <Avatar initials="A4" bg="warning" />
      <Avatar initials="A5" bg="#9C27B0" />
    </View>
  ),
};
