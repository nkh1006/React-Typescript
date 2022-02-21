import React, { ReactElement, ReactNode } from 'react';
import './App.css';

// Conventional props
function Heading({ title }: { title: string; }) {
  return <h1>{title}</h1>;
}

function HeadingWithContent({ children }: { children: ReactNode }): ReactElement {
  return <h1>{children}</h1>;
}

// defaultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
};

function Container({ heading, children }: { heading: ReactNode, children: ReactNode }): ReactElement {
  return <h1>{children}</h1>;
}

function App() {
  return (
    <div>
      <Heading title="Hello"></Heading>
      <HeadingWithContent>
        <strong>hi!</strong>
      </HeadingWithContent>
      <Container>
        Foo
      </Container>
    </div>
  );
}

export default App;