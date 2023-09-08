import { Component } from "react";

class MonsterCard extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
export default MonsterCard;
