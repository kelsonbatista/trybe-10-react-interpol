import './App.css';
import './css/main.css';
import React from 'react';
import Title from './components/Title';
import PersonCard from './components/PersonCard';
import data from './data';

class App extends React.Component {
  render() {
    const base = data._embedded.notices;
    return (
      <div className="App">
        <header>
          <Title title='Interpol Wanted' />
        </header>
        <main>
          <section>
            {base.map((person) => {
              return <PersonCard card={person} key={person.entity_id} />
            })}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
