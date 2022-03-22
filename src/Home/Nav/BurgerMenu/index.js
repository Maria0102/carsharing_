import React from 'react';

import './styles.scss';

export default class BurgerMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {

      return (
        <div className="burgerMenu">

            <div className={( this.state.isToggleOn === true ) ? "menu_icon active" : "menu_icon"} onClick={this.handleClick}>
                <span></span>
            </div>

            { ( this.state.isToggleOn === true ) &&
            <nav className="menu_body">
              <div className="menu_list">
                <ul className="menu_links">
                    <li><a href="/" className="menu_link">ПАРКОВКА</a></li>
                    <li><a href="/" className="menu_link">СТРАХОВКА</a></li>
                    <li><a href="/" className="menu_link">БЕНЗИН</a></li>
                    <li><a href="/" className="menu_link">ОБСЛУЖИВАНИЕ</a></li>
                </ul>
                <div className="post_social">
                  <span className="fa-stack">
                    <i className="fa fa-circle-2 fa-stack-2x"></i>
                    <i className="fa fa-telegram fa-stack-1x" aria-hidden="true"></i>
                  </span>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-facebook fa-stack-1x" aria-hidden="true"></i>
                  </span>
                  <span className="fa-stack">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-instagram fa-stack-1x" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </nav>
            }

        </div>
      );
    }
}
