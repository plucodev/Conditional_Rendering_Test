import React from "react";
import { Link } from "react-router-dom";
import { Test } from "./test.js";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Demo extends React.Component {
	render() {
		return (
			<div className="container">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							{
								if (store.test === "ciao")
									return (
										<div>
											<Test />
										</div>
									);
							}
						}}
					</Context.Consumer>
				</ul>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
