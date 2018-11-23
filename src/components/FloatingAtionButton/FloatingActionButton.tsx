import * as React from 'react';

import HeaderOption from '../../data/ui/header-option';
import './styles.css';

interface FloatingActionButtonProps {
  options: HeaderOption[];
  onClick: () => void;
}

class FloatingActionButton extends React.Component<FloatingActionButtonProps> {
  public static defaultProps = {
    options: [],
    onClick: null
  };

  public render() {
    const  { onClick } = this.props;

    return (
      <div className={'fab'} onClick={onClick}>
      +
      </div>
    );
  }
}

export default FloatingActionButton;
