import React from 'react';
import { Title, Text, Container, Grid } from '@components';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPosts, Post } from '@posts';
interface AboutProps {
  experiences: Post[];
}



const About = ({ experiences }: AboutProps): JSX.Element => (
  <Container>
    <Head>
      <title>About</title>
    </Head>
    <Container alignContent="center" alignItems="center">
      <Title fontSize={['2rem', '3rem']} as="h3">
        Software Engineer
      </Title>
      <Title fontSize={['2rem', '3rem']} as="h3">
         Aspiring Product Manager
      </Title>
      <Container maxWidth={['100%', '720px']} marginY="2rem">
        <Text>
        Working as a Software Engineer and a Product lead with ample 
experience in designing and developing web applications, Microservices 
based architectures. Involved in agile practices in building scalable web apps 
in a diverse tech stack.I also work as a Product Lead and manage a team 8-10 for Scrums and 
 steering feature development, technical solutions for their effective implementation through 
 the agile methodologies. &nbsp;
        </Text>
      </Container>
    </Container>
    <Container
      alignContent="center"
      alignItems="center"
      textAlign="center"
      width="100%"
      paddingBottom="4rem"
      gridGap="3rem"
    >
      <Title fontSize="40px" as="h2">
        Work Experience
      </Title>
      <Container width="100%">
        {experiences.map(({ data }, i) => (
            <Grid
              key={i}
              gridTemplateColumns="1fr 4fr"
              justifyItems="flex-start"
              gridGap="1rem"
              paddingY="2rem"
              borderBottom="1px solid rgba(0,0,0,0.1)"
            >
              <Container width="100%">
                <img style={ {marginLeft:'60px', width: '100px'}} src={data.image} ></img>
              </Container>
              <Grid width="100%" gridTemplateColumns="4fr 1fr">
                <Container
                  width="100%"
                  alignItems="flex-start"
                  textAlign="start"
                >
                  <Grid
                    width="100%"
                    gridTemplateColumns="repeat(2, auto)"
                    justifyItems="flex-start"
                    justifyContent="flex-start"
                    gridGap="1rem"
                  >
                    <Title fontSize="1.5rem" margin={0} as="h3">
                      {data.title}
                    </Title>
                    <Text fontSize="smaller" margin={0}>
                      {data.date}
                    </Text>
                  </Grid>
                  <Text fontSize="1rem" textAlign='justify' width='100%'>{data.description}</Text>
                  <Text m="0" fontSize="smaller">
          {data.stack.join(', ')}</Text>
                </Container>
              </Grid>
            </Grid>
        ))}
      </Container>
    </Container>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  const experiences = await getPosts('experiences');
  // experiences.sort((a, b) =>
  //   b.data.date.toString().localeCompare(a.data.date.toString()),
  // );

  return {
    props: {
      experiences,
    },
  };
};

export default About;
