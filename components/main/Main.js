import React from 'react';
import './main.scss';

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.scrollToView = this.scrollToView.bind(this);
  }

  scrollToView(e) {
    e.preventDefault();

    let id = e.target.getAttribute('href').split('#')[1];
    let element = document.getElementById(id);
    element.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    return (
      <main>
        <section className="masthead">
          <div className="masthead__overlay">
            <h1>UI Coder</h1>
            <h3>Master the skills to ace your next front-end technical interview</h3>
            <a className="button--more" href="#courses" onClick={this.scrollToView}>Start Learning ></a>
          </div>
        </section>
        <section id="courses" className="courses">
          <h2>Courses</h2>
          <ul className="card-list">
            <li className="card-list__item">
              <h3>HTML5</h3>
              <div className="card-list__card">
                <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="HTML5 Symbol" />
                <p>Learn how HTML provides the structure and markup for every single webpage</p>
              </div>
            </li>
            <li className="card-list__item">
              <h3>CSS3</h3>
              <div className="card-list__card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXj_PIFNdj649LEisiqZvrevQPGPuyGimrbyv5Q6omRE_9DtQ" alt="CSS3 Symbol" />
                <p>Master CSS3 and learn how to bring your UI designs and styles to life</p>
              </div>
            </li>
            <li className="card-list__item">
              <h3>JavaScript</h3>
              <div className="card-list__card">
                <img src="https://cdnhtml5hive.azureedge.net/wp-content/uploads/2014/06/js_800x800-619x619.jpg?x25428" alt="JS Symbol" />
                <p>Learn how to use JavaScript to provide interactivity to your web application</p>
              </div>
            </li>
          </ul>
          <button className="button--more">More Courses ></button>
        </section>
        <section id="problems" className="courses">
          <h2>Practice Problems</h2>
          <ul className="card-list">
            <li className="card-list__item">
              <div className="card-list__card">
                <img src="http://via.placeholder.com/320x200" alt="placeholder" />
                <h3>Data Structures</h3>
                <p>Practice your hashmaps, lists, and trees</p>
              </div>
            </li>
            <li className="card-list__item">
              <div className="card-list__card">
                <img src="http://via.placeholder.com/320x200" alt="placeholder" />
                <h3>Algorithms</h3>
                <p>Practice how to write efficient algorithms</p>
              </div>
            </li>
            <li className="card-list__item">
              <div className="card-list__card">
                <img src="http://via.placeholder.com/320x200" alt="placeholder" />
                <h3>System Design</h3>
                <p>Learn how to optimize each component of the entire software application</p>
              </div>
            </li>
          </ul>
          <button className="button--more">More Problems ></button>
        </section>
        <section id="forum" className="courses">
          <h2 className="title" >Featured Solution of the Week</h2>
          <div className="featured-question__container">
            <div className="featured-question">
              <h3>Problem:</h3>
              <p className="featured-question__text">Animate a rotating triangle using only CSS</p>
              <h3>Acceptance Criteria:</h3>
              <p>1. Only use CSS</p>
              <p>2. Must render in browser</p>
            </div>
            <iframe className="fiddle" width="600px" height="400px" src="//jsfiddle.net/4dur6u28/16/embedded/html,css,result/?bodyColor=fff&menuColor=2255aa&fontColor=fff&accentColor=fe7635" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>
          </div>
          <button className="button--more">More Solutions ></button>
        </section>
      </main>
    )
  }
}
