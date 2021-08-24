import React, { FC } from 'react';
import Counter from './Counter';
import TextField from './TextField';

// props
// hooks
// render props

const App: FC = () => {
  return (
    <div>
      <TextField text='hello' person={{firstName: '', lastName: ''}} />
      <Counter>
        {({count, setCount}) => {
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        }}
      </Counter>
    </div>
  );
}

export default App;
