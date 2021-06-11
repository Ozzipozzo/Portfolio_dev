import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyle } from '../assets/style/ButtonCss';

export default function Button({
  btnLink = '/projets',
  btnText = 'Voir mes projets',
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
