import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { getPeople } from './Services/testApi';

const loadPeople = async () => {
    const peopleRes =  await getPeople();
    if(peopleRes instanceof Error){
        console.log(peopleRes);
      }
      else if (peopleRes.Response === "True") {
            console.log(peopleRes);
        //   setState(state => ({ ...state, movies: moviesRes.Search}));
        //   setState(state => ({ ...state, errorMessage: ''}));
      } else {
          //setState(state => ({ ...state, errorMessage: moviesRes.Error}));
          console.log(peopleRes);
    }
}

function App() {
    return (
        <div className="App">
            <Button onClick={loadPeople}>API Dialog Error</Button>
            <Button>API Toast Error</Button>
            <Button>API Landing Page Error</Button>
            <Button>User Dialog Error</Button>
            <Button>User Toast Error</Button>
        </div>
    );
}

export default App;