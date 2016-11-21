import React from "react";

export default class Contact extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			name: this.props.name,
			company: this.props.company,
			email: this.props.email,
			phone: this.props.phone
		}
	}

	render() {
		const styles = this.getStyles();

		return (
			<ul style={ styles.contactWrapper }>
				<li style={ styles.name }>{  this.state.name  }</li>
				<li>Company: {  this.state.company  }</li>
				<li>Email: {  this.state.email  }</li>
				<li>: Phone #: {  this.state.phone  }</li>
			</ul>
		);
	}

	getStyles() {
		return {
			contactWrapper: {
				margin: 10
			}
			, name: {
				fontWeight: "bold"
			}
		}
	}
}
