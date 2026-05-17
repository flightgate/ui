import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Text } from '../Text';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const SampleContent = () => (
  <View style={{ gap: 8 }}>
    <Text size="md" weight="semibold">
      Título do card
    </Text>
    <Text size="sm" color="textSecondary">
      Conteúdo de exemplo dentro do card.
    </Text>
  </View>
);

export const Default: Story = {
  render: () => (
    <View style={{ maxWidth: 360 }}>
      <Card>
        <SampleContent />
      </Card>
    </View>
  ),
};

export const SmallPadding: Story = {
  render: () => (
    <View style={{ maxWidth: 360 }}>
      <Card padding="sm">
        <SampleContent />
      </Card>
    </View>
  ),
};

export const LargePadding: Story = {
  render: () => (
    <View style={{ maxWidth: 360 }}>
      <Card padding="lg">
        <SampleContent />
      </Card>
    </View>
  ),
};

export const CustomBackground: Story = {
  render: () => (
    <View style={{ maxWidth: 360 }}>
      <Card bg="primary">
        <Text size="md" weight="semibold" color="white">
          Card com cor de fundo
        </Text>
      </Card>
    </View>
  ),
};
