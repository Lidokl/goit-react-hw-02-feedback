import { Component } from 'react';
import styled from 'components/Feedback.module.css';


export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };
      handleClick = () => {
        console.log()
        // this.setState(prevState => {
        //   return { [key]: prevState[key] + 1,
        //   };
        // })
      }



render()  {
  return (
   <div className={styled.App}>
     <h1>Please leave feedback</h1>
    {Object.keys(this.state).map(key =>(
      <div className={styled.Bhg}>
        <button className={styled.button} onClick={() => this.handleClick()} key={key}> {key} </button>
        </div>
    ))}
    <h2>Statistics</h2>
    
 </div>
  );
;
}
}