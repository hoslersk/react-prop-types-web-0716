// const app = "I don't do much.";

class Order extends React.Component {
  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    );
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular',
}

Order.propTypes = { // do not confuse 'propTypes' w/ 'PropTypes' below:
  cone: React.PropTypes.bool, // bool, func, string, array, object, etc.
  size: React.PropTypes.string,
  // scoops: React.PropTypes.array.isRequired
  scoops: React.PropTypes.arrayOf(React.PropTypes.string).isRequired, // further restricts
  // orderInfo: React.PropTypes.object.isRequired
  orderInfo: React.PropTypes.shape({ // '.shape' allows to restrict object by attributes
    customerName: React.PropTypes.string.isRequired,
    orderedAt: React.PropTypes.number.isRequired
  }).isRequired
};
