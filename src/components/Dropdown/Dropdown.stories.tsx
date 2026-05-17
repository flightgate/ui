import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View } from 'react-native';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;

const countryOptions = [
  { label: 'Brasil', value: 'br' },
  { label: 'Portugal', value: 'pt' },
  { label: 'Argentina', value: 'ar' },
  { label: 'Chile', value: 'cl' },
  { label: 'Colômbia', value: 'co' },
];

export const Default: StoryObj = {
  render: () => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <View style={{ width: 320 }}>
        <Dropdown
          options={countryOptions}
          value={value}
          placeholder="Selecione um país"
          onChange={setValue}
        />
      </View>
    );
  },
};

export const WithValue: StoryObj = {
  render: () => {
    const [value, setValue] = useState<string>('br');
    return (
      <View style={{ width: 320 }}>
        <Dropdown
          options={countryOptions}
          value={value}
          placeholder="Selecione um país"
          onChange={setValue}
        />
      </View>
    );
  },
};

export const Disabled: StoryObj = {
  render: () => (
    <View style={{ width: 320 }}>
      <Dropdown options={countryOptions} value="br" disabled onChange={() => {}} />
    </View>
  ),
};
