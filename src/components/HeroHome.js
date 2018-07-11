import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
//import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { injectGlobal } from 'styled-components';

//Import components
import SearchResults from './SearchResults';


injectGlobal`
.hero-wrapper {
	background: white;
	border-bottom: 1px solid #D8D8D8;

	.city-block img {
		max-width: 148px;
	}

	.city-block figcaption {
		font-weight: 500;
	}
}

.jumbotron {
	background-color: transparent;
	
	h1 {
			font-size: 54px;
			font-weight: bold;
	}
}

.btn-hero-search {
	padding: 10px;
	border-radius: 4px !important;
}

.hero-input-group {
	//padding: 10px;
	border: 1px solid #C1C7CD;
	border-radius: 5px;
}

input.form-control {
	border: none;
}

.input-group-text {
	border: none;
	background-color: transparent;
}

`;


class HeroHome extends Component {

	constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
	}

	_onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }
	
	render() {
		return (

			<section className="hero-wrapper">
				<Container>
					<Jumbotron>
						<Row>
							<Col lg="8">
								<h1 class="display-4">Location de salle de réunion, séminaire, formation ou conférence sur Bird Office</h1>
								<p class="lead">Bird Office est le service permettant aux entreprises de réserver simplement le lieu idéal pour leurs réunions, séminaires, conférences ou formations.</p>
							</Col>
						</Row>
						<Row className="hero-input-group results-input">
						<Col xs="12">
						<div className="input-group my-3">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">
									<i><FontAwesomeIcon icon={faSearch} /></i>
								</span>
							</div>
							<input type="text" className="form-control" placeholder="Essayer une ville, une adresse, un quartier, …" aria-label="Recipient's username"
								aria-describedby="basic-addon2" />
							<div className="input-group-append">
								<Button color="primary" className="btn btn-hero-search" onClick={this._onButtonClick}>Trouver une salle</Button>
							</div>
						</div>
						{this.state.showComponent ?
										<SearchResults /> :
										null
									}
						</Col>
						</Row>
					</Jumbotron>
				</Container>
			</section>

		);
	}
}

export default HeroHome;