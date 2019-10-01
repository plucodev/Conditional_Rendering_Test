import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				{/* INSIDE THE CONTEXT CONSUMER YOU CAN CHECK THE STORE, IN OUR EXAMPLE WE ARE CHECKING THE VARIABLE test */}
				{/* https://reactjs.org/docs/conditional-rendering.html#element-variables */}
				<Context.Consumer>
					{({ store, actions }) => {
						//  HERE YOU START YOUR CONDITIONAL RENDERING - IS A NORMAL IF STATEMENT
						//  YOU CAN RETURN WHATEVER YOU WANT

						{
							if (store.test === "test") {
								return (
									<div>
										<Link to="/">
											<span className="navbar-brand mb-0 h1">Testeeee</span>
										</Link>
									</div>
								);
							} else {
								return (
									<div>
										<Link to="/">
											<button
												onClick={() => actions.resetTest()}
												className="btn btn-success mb-0 h1">
												Changedrrr
											</button>
										</Link>
									</div>
								);
							}
						}
					}}
				</Context.Consumer>
				{/* HERE I AM DOING THE SAME BUT THIS TIME I USE THE TERNARY OPERATOR WAY */}
				{/* https://reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator */}
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								{store.ternary === "ternary" ? (
									<Link to="/">
										<span className="navbar-brand mb-0 h1">Ternary Method</span>
									</Link>
								) : (
									<Link to="/">
										<span onClick={() => actions.resetTernary()} className="navbar-brand mb-0 h1">
											Changed{" "}
										</span>
									</Link>
								)}
							</div>
						);
					}}
				</Context.Consumer>
				<div>
					<Link to="/">
						<span className="navbar-brand mb-0 h1">Bubu</span>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</nav>
		);
	}
}
