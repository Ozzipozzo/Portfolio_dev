import { createGlobalStyle } from 'styled-components';
import HindRegular from '../assets/fonts/Hind-Regular.ttf';
import HindSemiBold from '../assets/fonts/Hind-SemiBold.ttf';
import HindBold from '../assets/fonts/Hind-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Hind';
    src: url(${HindRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Hind';
    src: url(${HindSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Hind';
    src: url(${HindBold});
    font-style: normal;
  }
  html{
    font-family: 'Hind';
    color: var(--gray-1);
  }
  *{
    font-family: 'Hind';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Hind'
  }
`;

export default Typography;
