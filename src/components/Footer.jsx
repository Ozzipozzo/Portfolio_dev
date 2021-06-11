import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__tilte {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1__title">
          <h1>Abdallah GHANMI</h1>
          <PText>
            Développeur en formation, en île-de-France, n'hésitez pas à me
            contacter
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact info"
            Links={[
              {
                title: '0665656565',
                path: '+33',
              },
              {
                title: 'abdallah.ghanmi@epitech.eu',
                path: 'mailto:abdallah.ghanmi@epitech.eu',
              },
              {
                title: 'Essonnes',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Reseaux sociaux"
            Links={[
              {
                title: 'Github',
                path: 'https://github.com/Ozzipozzo',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/abdallahghanmi/',
              },
            ]}
          />
        </div>
      </div>
    </FooterStyles>
  );
}
