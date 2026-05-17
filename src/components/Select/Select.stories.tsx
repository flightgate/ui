import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Select } from './Select';

const meta: Meta = {
  title: 'Components/Select',
  tags: ['autodocs'],
};

export default meta;

const stateOptions = [
  { label: 'São Paulo', value: 'SP' },
  { label: 'Rio de Janeiro', value: 'RJ' },
  { label: 'Minas Gerais', value: 'MG' },
  { label: 'Bahia', value: 'BA' },
  { label: 'Paraná', value: 'PR' },
];

interface FormValues {
  state: string;
  city: string;
}

export const Default: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { state: '' } });
    return (
      <View style={{ width: 320 }}>
        <Select
          name="state"
          control={control}
          options={stateOptions}
          label="Estado"
          placeholder="Selecione o estado"
        />
      </View>
    );
  },
};

export const WithDefaultValue: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { state: 'SP' } });
    return (
      <View style={{ width: 320 }}>
        <Select
          name="state"
          control={control}
          options={stateOptions}
          label="Estado"
          placeholder="Selecione o estado"
        />
      </View>
    );
  },
};

export const WithValidation: StoryObj = {
  render: () => {
    const { control, setError } = useForm<FormValues>({ defaultValues: { state: '' } });
    useEffect(() => {
      setError('state', { message: 'Selecione um estado' });
    }, [setError]);
    return (
      <View style={{ width: 320 }}>
        <Select
          name="state"
          control={control}
          options={stateOptions}
          label="Estado"
          placeholder="Selecione o estado"
        />
      </View>
    );
  },
};
