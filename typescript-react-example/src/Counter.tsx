import React, { Dispatch, SetStateAction, FC } from 'react';
import { useState } from 'react';

interface Props {
  children: (data: {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
  }) => JSX.Element | null;
}

const Counter: FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {children({count, setCount})}
    </div>
  )
};

export default Counter;