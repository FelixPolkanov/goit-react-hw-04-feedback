// import { Component } from 'react';
import { GeneralWrapper } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

import { useState } from 'react'


export function App () {

const[good, setGood] = useState(0);
const[neutral, setNeutral] = useState(0);
const[bad, setBad] = useState(0);

const handleIncrement = button => {
    switch (button) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

 
      return (
      <GeneralWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleIncrement}
          />
        </Section>

        <Section title="Statistics:">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There are no feedbacks! " />
          )}
        </Section>
      </GeneralWrapper>
    );
  }



//  на классах


//   import { Component } from 'react';
// import { GeneralWrapper } from './App.styled';
// import { Section } from './Section/Section';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// import { Notification } from './Notification/Notification';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = button => {
//     this.setState(prevState => ({
//       [button]: prevState[button] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     return Math.round((good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const buttonsName = Object.keys(this.state);
//     return (
//       <GeneralWrapper>
//         <Section title="Please leave feedback">



//           <FeedbackOptions
//             options={buttonsName}
//             onLeaveFeedback={this.handleIncrement}
//           />



//         </Section>

//         <Section title="Statistics:">
//           {good || neutral || bad ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There are no feedbacks! " />
//           )}
//         </Section>
//       </GeneralWrapper>
//     );
//   }
// }
