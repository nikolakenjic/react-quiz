import React from 'react';
import {
  Error,
  FinishedScreen,
  Footer,
  Header,
  Loader,
  Main,
  NextQuestion,
  Progress,
  Question,
  StartScreen,
  Timer,
} from './components';
import { useQuiz } from './context/QuizContext';

const App = () => {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextQuestion />
            </Footer>
          </>
        )}
        {status === 'finished' && <FinishedScreen />}
      </Main>
    </div>
  );
};

export default App;
