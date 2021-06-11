import React from 'react';
import { HeroStyle } from '../assets/style/HeroCss';
import HeroImg from '../assets/images/epit_profil.png';
import Button from './Button';
import PText from './PText';
import SocialMedia from '../assets/images/social-media-arrow.svg';
import ScrollDown from '../assets/images/scroll-down-arrow.svg';

export default function HeroSection() {
  return (
    <HeroStyle>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Bienvenue sur mon Portfolio, je suis</span>
            <span className="hero__name">Abdallah GHANMI</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              Développeur Fullstack en formation chez Epitech, je vous propose
              de faire plus ample connaissance au travers de mes expériences et
              projets !
            </PText>
            <Button btnLink="/projets" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMedia} alt="social arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://github.com/Ozzipozzo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abdallahghanmi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDown} alt="" />
          </div>
        </div>
      </div>
    </HeroStyle>
  );
}
