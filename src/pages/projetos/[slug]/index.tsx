import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { LoadScreen, Thumb } from '../../../components';
import { day } from '../../../constants';
import { getPrismicClient } from '../../../services/prismic';
import { Container } from '../../../styles/ProjectDynamicStyles';
import { ProjectUID } from '../../../types/Home.types';

export default function Projeto({ project }: ProjectUID) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadScreen />;
  }

  return (
    <Container>
      <Head>
        <title>{project.title} | Portifólio Samuel Ramos</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumb} />
        <meta property="og:image:secure_url" content={project.thumb} />
        <meta property="instagram:image" content={project.thumb} />
        <meta property="instagram:image:src" content={project.thumb} />
        <meta property="og:description" content={project.description} />
      </Head>
      <Thumb title={project.title} type={project.type} imgURL={project.thumb} />
      <main>
        <p>{project.description}</p>
        <button type="button">
          <a href={project.link}>Ver projeto repositório</a>
        </button>
      </main>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const projects = await prismic.query([
    Prismic.predicates.at('document.type', 'projects')
  ]);

  const paths = projects.results.map(data => ({
    params: {
      slug: data.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projects', String(slug), {});

  const project = {
    projeto: response.uid,
    title: response.data.title,
    type: response.data.type,
    link: response.data.project_link.url,
    thumb: response.data.thumb.url,
    description: response.data.description
  };

  return {
    props: { project },
    revalidate: day
  };
};
