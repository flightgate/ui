import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../src/providers/ThemeProvider';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider primary="#6366F1" secondary="#818CF8">
        <div style={{ padding: 24, fontFamily: 'Montserrat, sans-serif' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color|bg|Color)$/i,
      },
    },
    backgrounds: {
      default: 'surface',
      values: [
        { name: 'surface', value: '#F4F6FC' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#28292B' },
      ],
    },
  },
};

export default preview;
