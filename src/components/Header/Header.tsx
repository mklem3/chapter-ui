import * as React from 'react';
import { Link } from 'react-router-dom';

import HeaderOption from '../../data/ui/header-option';
import './styles.css';

interface HeaderProps {
  title: string;
  options: HeaderOption[];
}

class Header extends React.Component<HeaderProps> {
  public static defaultProps = {
    options: []
  };

  public render() {
    const { title, options } = this.props;
    return (
      <div className={'header'}>
        <img
          className="header-icon"
          src="https://www.comparethemarket.com.au/wp-content/themes/ctm/images/ctm-primary-logo-icon.svg"
        />
        <Link to={'/'}>
          <span className="header-title">{title}</span>
        </Link>
        {options.map(option => (
          <Link to={'/' + option.route} key={option.route}>
            <div className={`header-option ${window.location.href.includes(option.route) ? 'header-option-selected' : ''}`}>{option.title}</div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Header;
