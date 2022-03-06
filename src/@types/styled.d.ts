import 'styled-components';
import tailwindTheme from 'tailwind.config';

type ThemeType = typeof tailwindTheme.theme.extend;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
