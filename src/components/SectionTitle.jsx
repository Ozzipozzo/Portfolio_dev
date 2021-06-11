import React from 'react';
import { SectionTitleStyle } from '../assets/style/SectionTitleCss';

export default function SectionTitle({
  subheading = 'This is subheading',
  heading = 'This is heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}
