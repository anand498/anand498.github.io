import { useRouter } from 'next/router';
import React from 'react';
import Grid from './Grid';
import Container from './Container';
import styled from 'styled-components';
import Menu from '@icons/Menu';
import Close from '@icons/Close';

const states: { [key: string]: React.CSSProperties } = {
  '/': {
    left: '3px',
    width: '58px',
  },
  '/about': {
    left: '63px',
    width: '60px',
  },
  '/blog': {
    left: '127px',
    width: '50px',
  },
  '/projects': {
    left: '185px',
    width: '72px',
  },
};

const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  border-bottom: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  font-weight: 500;
  transition: opacity 0.3s ease 0s;

  &:hover {
    opacity: 0.5;
  }
`;

const MenuContainer = styled(Container)`
  cursor: pointer;
`;

export interface NavProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Links = (): JSX.Element => (
  <>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/about">About</NavLink>
    <NavLink href="/blog">Blogs</NavLink>
    <NavLink href="/projects">Projects</NavLink>
  </>
);

const Nav = ({ isOpen, onOpen, onClose }: NavProps): JSX.Element => {
  const router = useRouter();
  let navStyle = states['/'];

  if (router.asPath !== '/') {
    for (const path of Object.keys(states).slice(1)) {
      if (router.asPath.startsWith(path)) {
        navStyle = states[path];
        break;
      }
    }
  }

  return (
    <Grid
      as="nav"
      px={['2rem', '2rem', '2rem', '0']}
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr 1fr']}
      alignContent="center"
      justifyContent={['center', 'center', 'space-between']}
      margin="3rem 0"
    >
      <Container display={['none', 'none', 'flex']}>
        <NavLink href="/">Anand Pandey</NavLink>
      </Container>
      <MenuContainer display={['flex', 'none', 'none']}>
        {isOpen ? (
          <Close
            size="2rem"
            style={{ margin: '-0.3rem' }}
            onClick={(evt) => evt.type === 'click' && onClose()}
          />
        ) : (
          <Menu
            size="1.6rem"
            onClick={(evt) => evt.type === 'click' && onOpen()}
          />
        )}
      </MenuContainer>
      {isOpen && (
        <Grid gridTemplateColumns="1fr" style={{ fontSize: '2rem' }} py="3rem">
          <Links />
        </Grid>
      )}
      <Container alignContent="center" display={['none', 'flex', 'flex']}>
        <Grid
          width='fit-content'
          gridGap="1rem"
          alignItems="center"
          justifyItems="center"
          gridTemplateColumns="repeat(5, auto)"
          style={{
            borderRadius: '25px',
            background: 'rgba(0, 0, 0, 0.04)',
            padding: '10px',
            position: 'relative',
          }}
        >
          <div
            style={{
              background: 'white',
              position: 'absolute',
              borderRadius: '25px',
              height: '75%',
              left: '6px',
              width: '6px',
              ...navStyle,
            }}
          />
          <Links />
        </Grid>
      </Container>
    </Grid>
  );
};

export default Nav;
