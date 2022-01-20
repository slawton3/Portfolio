import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this portfolio is to consolidate some of my personal accomplishments and projects in one place.
      </SectionText>
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/1dsUtFDdAG5jC13ctg6jqmi9Zj-EHvhNWbf2VPzjJ7Tg/edit?usp=sharing'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;