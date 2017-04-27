import React from "react";

class Reviews extends React.Component {
  constructor(props) {
    super();
    this.state = {
      visible: false
    };
  }
  render() {
    if (this.state.visible) {
      
    }

    return (
      <p className="pull-right">
        {this.state.products.reviews}
        <a href="#" onClick={
          (e) => {
            e.preventDefault();
            console.log(this.state);
          }
        }>reviews</a>



        <input value={this.state.occupation} onChange={
          (e) => {
            this.setState(
              {
                occupation: e.target.value
              }
            );
          }
        } />


      </p>

    )
  }
}

export default Reviews;
