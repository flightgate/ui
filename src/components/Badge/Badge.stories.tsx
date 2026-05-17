import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'info', 'neutral'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Success: Story = {
  args: { label: 'Ativo', variant: 'success' },
};

export const Danger: Story = {
  args: { label: 'Bloqueado', variant: 'danger' },
};

export const Warning: Story = {
  args: { label: 'Pendente', variant: 'warning' },
};

export const Info: Story = {
  args: { label: 'Em análise', variant: 'info' },
};

export const Neutral: Story = {
  args: { label: 'Rascunho', variant: 'neutral' },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
      <Badge label="Ativo" variant="success" />
      <Badge label="Bloqueado" variant="danger" />
      <Badge label="Pendente" variant="warning" />
      <Badge label="Em análise" variant="info" />
      <Badge label="Rascunho" variant="neutral" />
    </View>
  ),
};
