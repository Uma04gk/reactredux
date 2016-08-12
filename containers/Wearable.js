import React, { Component, PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';

class Wearable extends Component {
  static propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    size: PropTypes.array,
    cart: PropTypes.string,

  }
  componentWillMount() {
    console.log('will mount2');
  }

  render() {
    return (
   <div><br></br><br></br>
  <p>{this.props.title}<br></br>
   <img src={this.props.image} width="20%" height="20%"/>
  <Button bsStyle="warning">Add to cart</Button>

  <br></br>
  {this.props.price}
</p>
</div>
  );
  }
}

export default Wearable;
