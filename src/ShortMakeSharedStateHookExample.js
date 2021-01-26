import React from 'react';
import { useCounter, useLoggedInUser } from './sharedState';

const CounterIncrementer = () => {
  // This looks like useState, but it's shared. So whenever any other component
  // calls setCounter, the counter value here will update. And calling
  // setCounter here will update any other component using it.
  const [counter, setCounter] = useCounter();
  return (
    <div>
      <div>Counter value in incrementer component: {counter}</div>
      <div>
        <input type="submit" value="Increment Counter" onClick={() => setCounter(old => old + 1)} />
      </div>
    </div>
  );
};

const CounterDisplay = () => {
  const [counter] = useCounter();
  return <div>Value in counter display component: {counter}</div>;
};

const LoggedInUserSetter = () => {
  const setUser = useLoggedInUser()[1];
  return (
    <div>
      Set logged in user name -&nbsp;
      <input type="text" onChange={event => setUser(event.target.value)} />
    </div>
  );
};

const LoggedInUserDisplay = () => {
  const [user] = useLoggedInUser();
  return <div>Logged in user value in display component: {user}</div>;
};

const MakeSharedStateHookExample = () => {
  return (
    <div>
      <CounterDisplay />
      <CounterIncrementer />
      <LoggedInUserDisplay />
      <LoggedInUserSetter />
    </div>
  );
};

export default MakeSharedStateHookExample;
