const PREFIX = '[@flightgate/ui]';
const noop = () => {};

export const Logger = {
  // biome-ignore lint/suspicious/noConsole: Only authorized point to call console.*
  log: __DEV__ ? (...args: unknown[]) => console.log(PREFIX, ...args) : noop,
  // biome-ignore lint/suspicious/noConsole: Only authorized point to call console.*
  warn: __DEV__ ? (...args: unknown[]) => console.warn(PREFIX, ...args) : noop,
  // biome-ignore lint/suspicious/noConsole: Only authorized point to call console.*
  error: (...args: unknown[]) => console.error(PREFIX, ...args),
  // biome-ignore lint/suspicious/noConsole: Only authorized point to call console.*
  info: __DEV__ ? (...args: unknown[]) => console.info(PREFIX, ...args) : noop,
};
