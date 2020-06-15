import React, { Component } from 'react';
import './App.css';

import Header from '../components/Header/Header';
import CardList from '../components/CardList/CardList';
import Form from '../components/Form/Form';

/*const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];*/

class App extends Component {

  state = {
    // profiles: testData,
    profiles: []
  }

  addNewProfile = (profileData) => {
    const found = this.state.profiles.find(el => el.key === profileData.key);

    console.log(found);
    if(found === undefined) {
      this.setState(prevState => ({
        profiles: [...prevState.profiles, profileData]
      }));
    } else {
      alert('already add!');
    }
  };
  
  render() {
    return (
      <div className="App">
        <Header title="The GitHub Card APP" />
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  };
}

export default App;
