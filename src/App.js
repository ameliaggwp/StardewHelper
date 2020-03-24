import React from "react";
import "./App.css";
import Villagers from "./Villagers";
import ImageCard from "./ImageCard";
import Profile from "./Profiles";

class App extends React.Component {
  state = { selectedVillager: null };

  handleclick = villager => {
    this.setState({ selectedVillager: villager });
  };

  unselectVillager = () => {
    this.setState({ selectedVillager: null });
  };

  render() {
    return (
      <div className="App">
        <h2 className="ui header">
          <i className="handshake outline icon"></i>
          <div className="content">Stardew Helper</div>
        </h2>
        <Profile
          villager={this.state.selectedVillager}
          reset={this.unselectVillager}
        />
        <div className="ui six doubling cards">
          {Villagers.map(villager => (
            <ImageCard
              name={villager.name}
              key={villager.id}
              image={villager.image}
              /*   onClick={villager => {
                console.log(villager);
                this.setState({ selectedVillager: villager });
              }} */
              whenClicked={() => this.handleclick(villager)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
