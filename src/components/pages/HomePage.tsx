import './HomePage.scss';

import * as React from 'react';
import * as classnames from 'classnames';

import Button from '../ui/Button';
import HomeDescription from '../HomeDescription';
import Logo from '../Logo/Logo';

interface State {
  showLogin: boolean;
  showRegister: boolean;
}

export default class HomePage extends React.Component<undefined, State> {
  state: State = {
    showLogin: false,
    showRegister: false,
  };

  handleTypingComplete = () => {
    setTimeout(() => {
      this.setState({ showLogin: true });

      setTimeout(() => {
        this.setState({ showRegister: true });
      }, 200)
    }, 200);
  }

  render() {
    const buttonsCssClass = classnames('Homepage-buttons', {
      'Homepage-buttons--show-login': this.state.showLogin,
      'Homepage-buttons--show-register': this.state.showRegister
    });

    return (
      <div className="HomePage">
        <div className="HomePage-logo">
          <Logo />
          <HomeDescription onComplete={this.handleTypingComplete} />
        </div>
        <div className={buttonsCssClass}>
          <span className="HomePage-buttons-login">
            <Button primary>Login</Button>
          </span>
          <span className="HomePage-buttons-register">
            <Button outline>Register</Button>
          </span>
        </div>
      </div>
    );
  }
}
