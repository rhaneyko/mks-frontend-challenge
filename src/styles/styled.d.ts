import 'styled-components'

declare module 'styled-components' {
export interface DefaultTheme {
    title: string;
    colors: {
        primary: string;
        secondary: string;
        background: string;
        headerBackground: string;
        cardBackground: string;
        text: string;
        buttonBackground: string;
        borderButton: string;
    }
  }
}
