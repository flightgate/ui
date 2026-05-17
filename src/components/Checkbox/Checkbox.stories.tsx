import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Checkbox } from './Checkbox';

const meta: Meta = {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
};

export default meta;

interface FormValues {
  terms: boolean;
  newsletter: boolean;
}

export const Unchecked: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { terms: false } });
    return (
      <View style={{ padding: 8 }}>
        <Checkbox name="terms" control={control} label="Aceito os termos de uso" />
      </View>
    );
  },
};

export const Checked: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { terms: true } });
    return (
      <View style={{ padding: 8 }}>
        <Checkbox name="terms" control={control} label="Aceito os termos de uso" />
      </View>
    );
  },
};

export const Disabled: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { terms: false } });
    return (
      <View style={{ padding: 8 }}>
        <Checkbox name="terms" control={control} label="Opção desabilitada" disabled />
      </View>
    );
  },
};

export const MultipleCheckboxes: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({
      defaultValues: { terms: true, newsletter: false },
    });
    return (
      <View style={{ gap: 12, padding: 8 }}>
        <Checkbox name="terms" control={control} label="Aceito os termos de uso" />
        <Checkbox name="newsletter" control={control} label="Receber novidades por e-mail" />
      </View>
    );
  },
};
