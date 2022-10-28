import React from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/Main';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main
        textBoxData={props.appState.homePage.textBoxData}
        NewsData={props.appState.newsPage.NewsData}
      />
    </div>
  );
}
export default App;
