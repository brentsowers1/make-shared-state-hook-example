import React from 'react';
import { useCounter, useLoggedInUser } from './sharedState';

const CounterIncrementer = () => {
  // This looks like useState, but it's shared. So whenever any other component
  // calls setCounter, the counter value here will update. And calling
  // setCounter here will update any other component using it.
  const [counter, setCounter] = useCounter();
  return (
    <div>
      <div>
        Counter value in incrementer component:&nbsp;
        <span data-testid="incrementerCounter">{counter}</span>
      </div>
      <div>
        <input
          data-testid="incrementer"
          type="submit"
          value="Increment Counter"
          onClick={() => setCounter(old => old + 1)}
         />
      </div>
    </div>
  );
};

const CounterDisplayOne = () => {
  const [counter] = useCounter();
  return (
    <div>
      Value in first counter display component:&nbsp;
      <span data-testid="counter1">{counter}</span>
    </div>
  );
};

const CounterDisplayTwo = () => {
  const [counter] = useCounter();
  return (
    <div>
      Value in second counter display component:&nbsp;
      <span data-testid="counter2">{counter}</span>
    </div>
  );
};

const LoggedInUserSetter = () => {
  const setUser = useLoggedInUser()[1];
  return (
    <div>
      Set logged in user name -&nbsp;
      <input
        data-testid="username-input"
        type="text"
        onChange={event => setUser(event.target.value)}
      />
    </div>
  );
};

const LoggedInUserDisplay = () => {
  const [user] = useLoggedInUser();
  return (
    <div>
      Logged in user value in display component:&nbsp;
      <span data-testid="user1">{user}</span>
    </div>
  );
};

const MakeSharedStateHookExample = () => {
  return (
    <div>
      <CounterDisplayOne />
      <CounterDisplayTwo />
      <CounterIncrementer />
      <div>&nbsp;</div>
      <LoggedInUserDisplay />
      <LoggedInUserSetter />
    </div>
  );
};

export default MakeSharedStateHookExample;
