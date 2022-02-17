import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string,
      gray: {
        900: string,
      },
    }
  }
}
