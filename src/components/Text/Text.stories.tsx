import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: 'Texto de exemplo', size: 'md', weight: 'regular' },
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Text size="xxl">xxl — Título principal</Text>
      <Text size="xl">xl — Título secundário</Text>
      <Text size="lg">lg — Subtítulo</Text>
      <Text size="md">md — Corpo padrão</Text>
      <Text size="sm">sm — Legenda</Text>
      <Text size="xs">xs — Informação auxiliar</Text>
    </View>
  ),
};

export const AllWeights: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Text weight="regular">Regular — texto corrido</Text>
      <Text weight="medium">Medium — destaque leve</Text>
      <Text weight="bold">Bold — rótulos</Text>
      <Text weight="bold">Bold — títulos</Text>
    </View>
  ),
};

export const Colors: Story = {
  render: () => (
    <View style={{ gap: 8 }}>
      <Text color="textPrimary">textPrimary</Text>
      <Text color="textSecondary">textSecondary</Text>
      <Text color="textTertiary">textTertiary</Text>
      <Text color="primary">primary</Text>
      <Text color="success">success</Text>
      <Text color="danger">danger</Text>
      <Text color="warning">warning</Text>
    </View>
  ),
};
