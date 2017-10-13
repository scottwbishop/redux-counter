import React, { Component } from "react";
import { connect } from "react-redux";
import { decrement, increment, redo, undo } from "./ducks/counter";

import "./App.css";

export class App extends Component {
	render() {
				const {
					currentValue,
					decrement,
					futureValues,
					increment,
					previousValues,
					redo,
					undo,
				} = this.props;
		return (
			<div className="app">
				<section className="counter">
					<h1 className="counter__current-value">{ currentValue }</h1>
					<div className="counter__button-wrapper">
						<button
							className="counter__button"
							onClick={ () => increment(1) }
						>
							+1
						</button>
						<button
							className="counter__button"
							onClick={ () => increment(5) }
						>
							+5
						</button>
						<button
							className="counter__button"
							onClick={ () => decrement(1) }
						>
							-1
						</button>
						<button
							className="counter__button"
							onClick={ () => decrement(5) }
						>
							-5
						</button>
						<br />
						<button
							className="counter__button undo"
							disabled={ this.props.previousValues.length === 0 }
							onClick={ () => this.props.undo() }
						>
							Undo
						</button>
						<button
							className="counter__button"
							disabled={ this.props.futureValues.length === 0 }
							onClick={ () => this.props.redo() }
						>
							Redo
						</button>
					</div>
				</section>
				<section className="state">
					<pre>
						{ JSON.stringify( this.props, null, 2 ) }
					</pre>
				</section>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

const mapDispatchToProps = { increment, decrement, undo, redo };

const decorator = connect(mapStateToProps, mapDispatchToProps);
export default decorator(App);
