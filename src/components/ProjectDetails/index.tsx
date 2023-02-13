import { FC } from 'react';
import Link from 'next/link';
import { Props } from './ProjectDetails.types';
import { Container } from './styles';

export const ProjectDetails: FC<Props> = ({ title, imgURL, slug, type }) => (
  <Container imgURL={imgURL}>
    <Link href={`/projetos/${slug}`}>
      <a>
        <div className="overlay" />
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </a>
    </Link>
  </Container>
);