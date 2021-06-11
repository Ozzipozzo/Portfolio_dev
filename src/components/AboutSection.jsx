import React from 'react';
import Button from './Button';
import PText from './PText';
import SectionTitle from './SectionTitle';
import SurfImg from '../assets/images/surf.jpg';
import { AboutSectionStyle } from '../assets/style/AboutSectionCss';

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Légère présentation en"
            heading="Quelques détails"
          />
          <PText>
            Après plusieurs années dans le commerce, quelques expériences à
            l'étranger, homme de l'ombre en backOffice ou encore au devant de la
            scène dans le secteur Supply Chain, j'ai à coeur aujourd'hui
            d'éxercer un métier plein d'avenir et en forte croissance. Je suis
            Développeur Fullstack (presque).
          </PText>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="A propos" outline />
          </div>
        </div>
        <div className="aboutSection_right">
          <img className="imgSurf" src={SurfImg} alt="surf" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
