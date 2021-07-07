import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Button from '../../styles/GlobalComponents/Button';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit}) => 
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{ title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent></TitleContent>
            <br />
            <TagList>
              {tags.map((tag, i) =>
                <Tag key={i}>{ tag}</Tag>
              )}
            </TagList>
          </div>
          <UtilityList>
            <Button onClick={() => window.location = source}>Source</Button>
          </UtilityList>
        </BlogCard>
      )}
    </GridContainer>
  </Section>
);

export default Projects;