import React from 'react';
import { DiMysql, DiReact, DiDjango, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with numerous frontend and backend technologies to develop full stack applications. Today's flavor is Typescript & C#/.NET.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Years of experience with<br />
            React.js, Next.js, and other JS libraries.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="4rem" />
        <ListContainer>
          <ListTitle>Server-Side</ListTitle>
          <ListParagraph>
            Cloud computing, Azure services, <br />
            Node.js (Typescript) & .NET.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMysql size="4rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Database experience with <br />
            MSSQL, MongoDB and PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
