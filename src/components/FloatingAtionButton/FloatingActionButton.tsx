import * as React from 'react';

import HeaderOption from '../../data/ui/header-option';
import './styles.css';

interface FloatingActionButtonProps {
  options: HeaderOption[];
}

class FloatingActionButton extends React.Component<FloatingActionButtonProps> {
  public static defaultProps = {
    options: []
  };

  public render() {
    return (
      <div className={'fab'}>
      +
      </div>
    );
  }
}

export default FloatingActionButton;
