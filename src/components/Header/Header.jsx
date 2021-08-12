import React from 'react';

import './Header.scss';

const Header = ({ children }) => {
  return <div className="Searchbar">{children}</div>;
};

export default Header;
