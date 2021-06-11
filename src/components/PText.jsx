import React from 'react';
import { PStyle } from '../assets/style/PTextCss';

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
