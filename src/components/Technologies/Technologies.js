import React from 'react';
import { DiMysql, DiReact, DiDjango, DiNodejs } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with numerous frontend and backend technologies to develop full stack applications.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Next.js, jQuery
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="4rem" />
        <ListContainer>
          <ListTitle>Server-Side</ListTitle>
          <ListParagraph>
            Experience with <br />
            Django, Node.js & PHP
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMysql size="4rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL, MSSQL & MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
