import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circle', 'rect'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  render: () => (
    <View style={{ width: 300 }}>
      <Skeleton variant="text" />
    </View>
  ),
};

export const MultipleLines: Story = {
  render: () => (
    <View style={{ width: 300 }}>
      <Skeleton variant="text" lines={4} />
    </View>
  ),
};

export const Circle: Story = {
  render: () => <Skeleton variant="circle" width={48} height={48} />,
};

export const Rect: Story = {
  render: () => (
    <View style={{ width: 300 }}>
      <Skeleton variant="rect" height={120} />
    </View>
  ),
};

export const CardSkeleton: Story = {
  name: 'Exemplo — Card',
  render: () => (
    <View style={{ width: 320, gap: 12, padding: 16, backgroundColor: '#fff', borderRadius: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Skeleton variant="circle" width={40} height={40} />
        <View style={{ flex: 1, gap: 6 }}>
          <Skeleton variant="text" height={12} />
          <Skeleton variant="text" height={12} width="60%" />
        </View>
      </View>
      <Skeleton variant="rect" height={140} />
      <Skeleton variant="text" lines={3} />
    </View>
  ),
};
