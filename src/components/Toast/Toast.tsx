import ToastMessage, { type ToastShowParams } from 'react-native-toast-message';

export interface ToastProviderProps {
  topOffset?: number;
}

export function ToastProvider({ topOffset = 60 }: ToastProviderProps) {
  return <ToastMessage topOffset={topOffset} />;
}

function show(params: ToastShowParams) {
  ToastMessage.show(params);
}

function hide() {
  ToastMessage.hide();
}

export const toast = {
  success(message: string, title?: string) {
    show({ type: 'success', text1: title ?? 'Success', text2: message });
  },
  error(message: string, title?: string) {
    show({ type: 'error', text1: title ?? 'Error', text2: message });
  },
  info(message: string, title?: string) {
    show({ type: 'info', text1: title ?? 'Info', text2: message });
  },
  show,
  hide,
};
