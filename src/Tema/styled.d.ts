import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
      
        colors: {
          cardsTable: string,
          azulPrimary: string,
          azulBack: string,
          azulShadow: string,
          amareloSecundary: string,
          verdeText: string,
          vermelho: string,
          cinzaText: string,
        },
      };
}