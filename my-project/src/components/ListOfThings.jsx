import React, { Component } from "react";
import ListItemes from "./ListItemes";

export class ListOfThings extends Component {
    state={
        things :[]
    }



  render() {
  
    return (
      <div>
        <ListItemes list={this.state.things} />
      </div>
    );
  }
}

export default ListOfThings;
