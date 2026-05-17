import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Radio } from './Radio';

const meta: Meta = {
  title: 'Components/Radio',
  tags: ['autodocs'],
};

export default meta;

const planOptions = [
  { label: 'Básico — gratuito', value: 'basic' },
  { label: 'Pro — R$ 29/mês', value: 'pro' },
  { label: 'Enterprise — sob consulta', value: 'enterprise' },
];

interface FormValues {
  plan: string;
}

export const Default: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { plan: '' } });
    return (
      <View style={{ padding: 8 }}>
        <Radio name="plan" control={control} options={planOptions} />
      </View>
    );
  },
};

export const WithDefault: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { plan: 'pro' } });
    return (
      <View style={{ padding: 8 }}>
        <Radio name="plan" control={control} options={planOptions} />
      </View>
    );
  },
};

export const Disabled: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { plan: 'basic' } });
    return (
      <View style={{ padding: 8 }}>
        <Radio name="plan" control={control} options={planOptions} disabled />
      </View>
    );
  },
};
