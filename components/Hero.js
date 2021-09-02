import React from 'react';
import styled from 'styled-components';
import COLORS from '@blog/commons/constants/colors';
import SIZES from '@blog/commons/constants/sizes';
import { FaGithub } from 'react-icons/fa';
import _Image from 'next/image';

const Container = styled.section`
  background-color: ${COLORS.lightBackground};
  width: 100%;
`;

const SubContainer = styled.div`
  width: ${SIZES.containerWidth}px;
`;
const Hello = styled.p`
  font-size: 2.75rem;
  letter-spacing: -0.1rem;
  font-family: 'DM Mono';
  margin-bottom: 32px;
  font-weight: 700;
`;
const InfoContainer = styled.p`
  width: 504px;
`;
const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
`;

const GithubButton = styled.div`
  color: white;
  padding: 0.75rem 1rem;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 14px;
  }
  p {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.3;
    font-family: 'DM Mono';
  }
  border: 3px solid ${COLORS.borderColor};
  box-shadow: 5px 5px ${COLORS.borderColor};
  width: fit-content;
  cursor: pointer;

  &:hover {
    border-color: ${COLORS.linkColor};
    box-shadow: 5px 5px ${COLORS.linkColorDarker};
  }
`;

const Image = styled(_Image)`
  border-radius: ${350 / 2}px;
  object-fit: cover;
  border: 3px solid ${COLORS.borderColor};
`;

const Hero = () => {
  return (
    <Container className="flex py-12 px-0 justify-center mb-10">
      <SubContainer className="flex justify-between">
        <InfoContainer>
          <Hello className="mb-8 text-white">Im Jupiter.</Hello>
          <Description className="mb-8">
            I&apos;m a software engineer and writer. This website is my digital
            garden — a compendium of the things I&apos;ve learned and created
            over the years.
          </Description>

          <GithubButton className="flex items-center">
            <FaGithub />
            <p className="text-white">10,000 followers</p>
          </GithubButton>
        </InfoContainer>
        <Image
          width={350}
          height={350}
          src="/images/avatar.jpg"
          alt="Foto de jupiter"
        />
      </SubContainer>
    </Container>
  );
};

export default Hero;
