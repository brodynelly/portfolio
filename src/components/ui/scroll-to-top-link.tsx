import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ScrollToTopLinkProps extends LinkProps {
  children: React.ReactNode;
}

/**
 * A Link component that scrolls to the top of the page when clicked
 */
export const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ 
  children, 
  to, 
  ...props 
}) => {
  const handleClick = () => {
    // Use setTimeout to ensure the scroll happens after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};
