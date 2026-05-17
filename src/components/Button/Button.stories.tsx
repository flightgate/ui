import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    bg: { control: 'text' },
    color: { control: 'text' },
    borderColor: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Confirmar', bg: 'primary', size: 'md', onPress: () => {} },
};

export const Danger: Story = {
  args: { children: 'Excluir', bg: 'danger', size: 'md', onPress: () => {} },
};

export const Outline: Story = {
  args: {
    children: 'Cancelar',
    bg: 'transparent',
    borderColor: 'borderPrimary',
    size: 'md',
    onPress: () => {},
  },
};

export const Ghost: Story = {
  args: { children: 'Saiba mais', bg: 'transparent', size: 'md', onPress: () => {} },
};

export const Subtle: Story = {
  args: {
    children: 'Secundário',
    bg: 'bgSecondary',
    color: 'primary',
    size: 'md',
    onPress: () => {},
  },
};

export const Loading: Story = {
  args: { children: 'Salvando…', bg: 'primary', size: 'md', loading: true, onPress: () => {} },
};

export const Disabled: Story = {
  args: { children: 'Indisponível', bg: 'primary', size: 'md', disabled: true, onPress: () => {} },
};

export const AllExamples: Story = {
  render: () => (
    <View style={{ gap: 12, maxWidth: 320 }}>
      <Button bg="primary" onPress={() => {}}>
        Primary
      </Button>
      <Button bg="danger" onPress={() => {}}>
        Danger
      </Button>
      <Button bg="bgSecondary" color="primary" onPress={() => {}}>
        Subtle
      </Button>
      <Button bg="none" borderColor="borderPrimary" onPress={() => {}}>
        Outline
      </Button>
      <Button bg="none" onPress={() => {}}>
        Ghost
      </Button>
    </View>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: 12, maxWidth: 320 }}>
      <Button size="sm" onPress={() => {}}>
        Small
      </Button>
      <Button size="md" onPress={() => {}}>
        Medium
      </Button>
      <Button size="lg" onPress={() => {}}>
        Large
      </Button>
    </View>
  ),
};
