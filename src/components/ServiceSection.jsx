import React from 'react';
import { GoDatabase } from 'react-icons/go';
import { DiReact } from 'react-icons/di';
import { SiNodeDotJs } from 'react-icons/si';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

export const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    margin-top: 5rem;
    text-align: center;
    justify-content: center;
    width: 95%;
  }

  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle
          heading="Ma stack actuelle"
          subheading="Quelles sont mes compétences ?"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<DiReact />}
            title="Front-End"
            desc="HTML, CSS, SASS, JS, 
            React, React-Native, Twig"
          />
          <ServicesSectionItem
            icon={<SiNodeDotJs />}
            title="Back-end"
            desc="Php, NodeJS, Express"
          />
          <ServicesSectionItem
            icon={<GoDatabase />}
            title="Database et Framework"
            desc="Mysql, MongoDB, Symfony, Laravel"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
