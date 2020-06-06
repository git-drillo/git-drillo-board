/**
 * @module  BoardPageContainer
 * @author  Jonathan and Katty Polyak
 * @date Sat, Jun 6, 2020
 * @description presentation component that renders 3 Category components
*/

import React, { Component } from "react";
import Header from '../components/Header'

const mapStateToProps = state => {
  // provide pertinent state here
}

const mapDispatchToProps = dispatch => {
  // create functions that will dispatch action creators
}

class BoardPageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="BoardPageContainer">
        <Header />

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardPageContainer);