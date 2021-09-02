import React from 'react';
import cx from 'classnames';
import Image from 'next/image';
import styled from 'styled-components';

const LINKS = [
  'Blog',
  'Guides',
  'Newsletter',
  'RSS',
  'Donate',
  'Patreon',
  'OnlyFans',
];

const Logo = styled.img`
  cursor: pointer;
  margin-right: 20px;
  width: 40px;
  height: 40px;
`;

const Footer = () => {
  const logoClasses = cx('cursor-pointer mr-10');
  return (
    <div className="w-full flex items-center flex-col py-10 ">
      <div className="flex ">
        {React.Children.toArray(
          LINKS.map((link) => (
            <p className="text-xl hover:bg-yellow-500 hover:text-white py-4 px-7 cursor-pointer">
              {link}
            </p>
          ))
        )}
      </div>
      <div className="flex mt-6">
        <Logo alt="Vercel" src="/images/Vercel.png" />
        <Logo alt="Nextjs" src="/images/Nextjs.png" />
        <Logo alt="Tailwindcss" src="/images/Tailwindcss.svg" />
      </div>
    </div>
  );
};

export default Footer;
