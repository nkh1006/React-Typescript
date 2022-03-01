import React, { FC, ReactElement, ReactNode, useState } from 'react';
import './App.css';

/*
const HeadingFC: FC<{ title: string }> = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}
*/

// Conventional props
function Heading({ title }: { title: string }): ReactElement | null {
  return (
    <h1>{title}</h1>
  )
}

function HeadingWithContent({ children }: { children: ReactNode }): ReactElement | null {
  return (
    <h1>{children}</h1>
  )  
}

// defaultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
}
function Container({ heading, children }: { heading: ReactNode, children: ReactNode } & typeof defaultContainerProps): ReactElement | null {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  )
}
Container.defaultProps = defaultContainerProps;

// Functional Props
function TextWithNumber({
  children
}: {
  children: (num: string) => ReactNode
}) {
  const [state, setState] = useState<number | null>();
}

function App() {
  return (
    <div>
      <Heading title="Hello there"></Heading>
      <HeadingWithContent>
        <strong>Hi !</strong>
      </HeadingWithContent>
      {/* <TextWithNumber>{(num: number) => <div>Today's number num</div>}</TextWithNumber> */}
    </div>
  );
}

export default App;
