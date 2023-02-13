import { FC } from 'react';
import { Props } from './SectionTitle.types';

import { Container } from './styles';

export const SectionTitle: FC<Props> = ({ title, description }) => (
  <Container>
    <h1>#{title}</h1>
    {description && <h2>{description}</h2>}
  </Container>
);