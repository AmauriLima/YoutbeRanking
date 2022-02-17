import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string,
      danger: string,
      gray: {
        300: string,
        800: string,
        850: string,
        900: string,
      },
      primary: {
        500: string,
      },
      secondary: {
        500: string,
      }
    }
  }
}
