import React, { Component } from "react";
import Background from "./../shared/Background/Background";
import Chart1 from "./../shared/Chart1";
import Chart2 from "./../shared/Chart2";
import AddPurchase from "./../shared/AddPurchase";
import DisplayPurchases from "./../shared/DisplayPurchases";
import Loading from "./../shared/Loading/Loading";
import Nav from "./../shared/Nav";
import "./Budget.css";
import { connect } from "react-redux";
import { requestUserData } from "./../../redux/userReducer";

class Budget extends Component {
	componentDidMount() {
		this.props.requestUserData();
	}

	render() {
		const { loading } = this.props.budget;
		const { firstName, lastName } = this.props.user;
		return (
			<Background>
				{loading ? <Loading /> : null}
				<div className="budget-container">
					<Nav firstName={firstName} lastName={lastName} />
					<div className="content-container">
						<div className="purchases-container">
							<AddPurchase />
							<DisplayPurchases />
						</div>
						<div className="chart-container">
							<Chart1 />
							<Chart2 />
						</div>
					</div>
				</div>
			</Background>
		);
	}
}

function mapStateToProps(state) {
	return {
		budget: state.budget,
		user: state.user
	};
}

export default connect(mapStateToProps, { requestUserData })(Budget);
