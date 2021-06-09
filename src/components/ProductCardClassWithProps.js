import	React, { Component } from	'react';

import	image from '../components/assets/perro.png'

class ProducCardClassWithProps extends Component {
	render() {
		console.log(this.props)
		return (
			<div className="product-card">
		<div className="product-tumb">
			<img src={this.props.img}alt=""/>
		</div>
		<div className="product-details">
		<h4>MasGood Premiun</h4> 			
		<p>{this.props.peso}</p>
		<div className="product-bottom-details">
			<div className="product-price">{this.props.precio}</div>
		</div>
		</div>
		</div>

			
			)
	}
}

export default ProducCardClassWithProps;