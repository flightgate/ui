import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Input } from './Input';

const meta: Meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
};

export default meta;

interface FormValues {
  email: string;
  password: string;
  name: string;
}

export const Default: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { email: '' } });
    return (
      <View style={{ width: 320 }}>
        <Input name="email" control={control} label="E-mail" placeholder="seu@email.com" />
      </View>
    );
  },
};

export const Password: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { password: '' } });
    return (
      <View style={{ width: 320 }}>
        <Input
          name="password"
          control={control}
          label="Senha"
          placeholder="••••••••"
          secureTextEntry
        />
      </View>
    );
  },
};

export const WithError: StoryObj = {
  render: () => {
    const { control, setError } = useForm<FormValues>({ defaultValues: { email: '' } });
    useEffect(() => {
      setError('email', { message: 'E-mail inválido' });
    }, [setError]);
    return (
      <View style={{ width: 320 }}>
        <Input name="email" control={control} label="E-mail" placeholder="seu@email.com" />
      </View>
    );
  },
};

export const WithValue: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({
      defaultValues: { name: 'João da Silva' },
    });
    return (
      <View style={{ width: 320 }}>
        <Input name="name" control={control} label="Nome completo" placeholder="Seu nome" />
      </View>
    );
  },
};
