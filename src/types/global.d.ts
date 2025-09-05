declare global {
  interface Window {
    grecaptcha: {
      render: (container: string | HTMLElement, parameters: any) => number;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
      execute: (widgetId?: number) => void;
      ready: (callback: () => void) => void;
    };
  }
}

export {};