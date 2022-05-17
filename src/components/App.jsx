import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './Buttons';
import { Section } from './Section';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = this.state.good / this.countTotalFeedback();

    if (!percentage) {
      return false;
    }
    return Math.round(percentage * 100);
  };



  handleClick = event => {
    for (const key in this.state) {
      if (key === event.target.textContent) {
        this.setState({ [event.target.textContent]: this.state[key] + 1 });
      }
    }
  };

  render() {
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleClick}
            />
          }
        ></Section>

        <Section
          title="Statistics"
          children={
            <Statistics
              stats={this.state}
              // good={this.state.good}
              // neutral={this.state.neutral}
              // bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          }
        ></Section>
      </>
    );
  }
}










  // const FeedbackOptions = ({ options}) => {
  // const objKey = Object.keys(this.state);
  //       const options={objKey} ;
//   return (
//    <div className={styled.App}>
//      <h1>Please leave feedback</h1>
  
//     {options.map(option  =>(
//        <div className={styled.Bhg}>
//         <button className={styled.button}
//          type="button"
//          name={option}
//          onClick={this.handleClick}
//           key={shortid.generate()}> {option} </button>
//          </div>
//     ))}
//     <h2>Statistics
//     {/* <Statistics 
//   total = {total } positivePercentage  = {positivePercentage}   arrays={objArr}/> */}
//  </h2>
    
//  </div>
//   
