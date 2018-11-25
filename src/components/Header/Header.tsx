import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import HeaderOption from '../../data/ui/header-option';
import './styles.css';

interface HeaderProps extends RouteComponentProps<any> {
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
        <NavLink to={'/'} className="header-title">{title}</NavLink>
        {options.map(option => (
            <NavLink to={'/' + option.route} key={option.route} 
            activeClassName='header-option-selected'
            className={'header-option'}>{option.title}</NavLink>
        ))}
      </div>
    );
  }
}

export default withRouter<HeaderProps>(Header);
