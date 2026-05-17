import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Switch } from './Switch';

const meta: Meta = {
  title: 'Components/Switch',
  tags: ['autodocs'],
};

export default meta;

interface FormValues {
  notifications: boolean;
  darkMode: boolean;
  autoSave: boolean;
}

export const Off: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { notifications: false } });
    return (
      <View style={{ padding: 8 }}>
        <Switch name="notifications" control={control} label="Notificações" />
      </View>
    );
  },
};

export const On: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { notifications: true } });
    return (
      <View style={{ padding: 8 }}>
        <Switch name="notifications" control={control} label="Notificações" />
      </View>
    );
  },
};

export const Disabled: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({ defaultValues: { darkMode: false } });
    return (
      <View style={{ padding: 8 }}>
        <Switch name="darkMode" control={control} label="Modo escuro (indisponível)" disabled />
      </View>
    );
  },
};

export const MultipleSwitches: StoryObj = {
  render: () => {
    const { control } = useForm<FormValues>({
      defaultValues: { notifications: true, darkMode: false, autoSave: true },
    });
    return (
      <View style={{ gap: 16, padding: 8 }}>
        <Switch name="notifications" control={control} label="Receber notificações" />
        <Switch name="darkMode" control={control} label="Modo escuro" />
        <Switch name="autoSave" control={control} label="Salvar automaticamente" />
      </View>
    );
  },
};
