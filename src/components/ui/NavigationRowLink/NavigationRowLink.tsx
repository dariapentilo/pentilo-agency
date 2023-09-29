import React from 'react';
import { useScrollVisibility } from '@/utils/useScrollVisibility';

interface NavigationRowLinkProps {
  title: string;
  href: string;
}

export const NavigationRowLink: React.FC<NavigationRowLinkProps> = ({
  title,
  href,
}) => {
  const isVisible = useScrollVisibility(title);

  const handleClick = () => {
    const sectionElement = document.querySelector(href);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li
      onClick={handleClick}
      className={`text-white text-s_xs text-center font-normal font-inter cursor-pointer hover:text-purple-500 focus:text-purple-500 transition ${
        isVisible ? 'active' : ''
      }`}
    >
      {title}
    </li>
  );
};
