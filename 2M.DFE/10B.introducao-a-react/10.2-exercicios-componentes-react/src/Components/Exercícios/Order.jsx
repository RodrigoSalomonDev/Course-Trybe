// arquivo Order.js
import React from 'react';

class Order extends React.Component {
  render() {
    // console.log(this.props.order);
    const { user, product, price } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {price.value} {price.currency} </p>
      </div>
    );
  }
}

export default Order;