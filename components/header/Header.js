import React from 'react';
import './header.scss';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToView = this.scrollToView.bind(this);
  }

  scrollToView(e) {
    e.preventDefault();

    let id = e.target.getAttribute('href').split('#')[1];
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <header>
        <div className="header__logo-container">
          <div className="header__logo">
            <span>UC</span>
          </div>
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <a className="navigation-list__link" href="#courses" onClick={this.scrollToView}>Courses</a>
            </li>
            <li className="navigation-list__item">
              <a className="navigation-list__link" href="#problems" onClick={this.scrollToView}>Problems</a>
            </li>
            <li className="navigation-list__item">
              <a className="navigation-list__link" href="#forum" onClick={this.scrollToView}>Forum</a>
            </li>
          </ul>
        </div>
        <div className="header__search-container">
          <input className="search__input" type="textfield" placeholder="Enter search item..."/>
          <button className="search__submit" type="submit">Go</button>
        </div>
      </header>
    )
  }
}
