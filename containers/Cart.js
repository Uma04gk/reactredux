import React, {Component, PropTypes } from 'react';

class cart extends Component {
    static propTypes = {
      cart: PropTypes.string,
    }


render() {
  const all = {
    width: '100%'
  };
  return (

<div>
{this.props.cart}
<div style= {all}>

<button type="submit">Add to cart</button>
</div>
</div>
  );
}
}

export default cart;
