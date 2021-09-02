import React from 'react';
import styled from 'styled-components';
import COLORS from '@blog/commons/constants/colors';
import SIZES from '@blog/commons/constants/sizes';
import Image from 'next/image';
import _Link from 'next/link';

import cx from 'classnames';

const Container = styled.div`
  background-color: ${COLORS.navbarColor};
  border-bottom: 2px solid ${COLORS.subtleBorder};
  height: 80px;
`;
const SubContainer = styled.div`
  width: ${SIZES.containerWidth}px;
`;

const PageName = styled.p`
  font-family: 'DM Mono';
  font-size: 1.5rem;
  padding: 0.5rem 0;
  font-weight: 700;
`;

const Link = styled.p`
  padding: 1rem 1.25rem;
  font-size: 1.2rem;
  background: ${COLORS.lightBackground};
  font-family: 'DM Mono';
  letter-spacing: -0.05rem;
  color: hsla(0, 0%, 100%, 0.8);
  margin-right: 0.75rem;
  transition: 0.2s;

  &::last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${COLORS.navbarColor};
    background-color: ${COLORS.yellowOrange};
  }
`;

const NavBar = () => {
  const rowVertical = cx('flex', 'items-center');

  return (
    <Container className="w-full fixed top-0 left-0 z-10 flex justify-center">
      <SubContainer className={`${rowVertical} justify-between`}>
        <_Link href="/">
          <div className={rowVertical}>
            <Image
              className="cursor-pointer"
              width={40}
              height={40}
              src="/images/jupiter.svg"
              alt="Logo de la web"
            />
            <PageName className="ml-3 text-white cursor-pointer">
              Jupiter
            </PageName>
          </div>
        </_Link>

        <ul className={rowVertical}>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Guias</Link>
          </li>
          <li>
            <Link>Proyectos</Link>
          </li>
          <li>
            <Link>Acerca de mí</Link>
          </li>
        </ul>
      </SubContainer>
    </Container>
  );
};

export default NavBar;
