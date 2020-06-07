/**
 * @module  BoardPageContainer
 * @author  Jonathan and Katty Polyak
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders 3 Category components
*/

import React, { Component } from "react";
import Header from '../components/Header.jsx'
import Category from "../components/Category.jsx";

// const mapStateToProps = state => {
//   // provide pertinent state here
  
// }

// const mapDispatchToProps = dispatch => {
//   // create functions that will dispatch action creators
// }

class BoardPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        title: 'Git Drillo Board'
      },
      toDo: ['fizz', 'buzz'],
      inProgress: [],
      pending: [],
      done: [],
    }
    dummyClick = this.dummyClick.bind(this);
  }

  dummyClick() {
    console.log('bruh....')
  }

  render() {
    return(
      <div className = 'BoardPageContainer'>
        <Header 
          header = { this.state.header }
          dummyClick = { dummyClick }
          array = { }
        />
        <Category
          categoryName = 'To Do'
          dummyClick = { this.dummyClick }
          array = { this.state.toDo }
        />
        <Category
          categoryName = 'In Progress'
          dummyClick = { this.dummyClick }
          array = { this.state.toDo }
        />
        <Category
          categoryName = 'Done'
          dummyClick = { this.dummyClick }
          array = { this.state.done }
        />
        <Category
          categoryName = 'Pending'
          dummyClick = { this.dummyClick }
          array = { this.state.pending }
        />
      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(BoardPageContainer);

export default BoardPageContainer