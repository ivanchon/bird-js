import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';



//import logo from './img/logo@2x.svg';

//CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Component Imports
import TopNav from './components/Nav';
import HeroHome from './components/HeroHome';
import UsageBlock from './components/UsageBlock';
import CountriesBlock from './components/CountriesBlock';
import CityBlock from './components/CityBlock';
import CityBlockAll from './components/CityBlockAll';

//Image Imports
import france from './img/france.svg';
import usageImg from './img/usage.png';
import cityOpera from './img/opera.png';
import cityBastille from './img/bastille.png';
import cityBercy from './img/bercy.png';
import cityChamps from './img/champs.png';
import cityGare from './img/garelyon.png';



class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <HeroHome />
        <Container className="mt-5">
          <Row className="mb-3">
            <Col>
              <h3>Sed finibus nisl nec imperdiet porta</h3>
              <p>Nunc in leo ac diam congue rutrum. Suspendisse vel justo euismod, tincidunt sapien ac, convallis tellus. Nam sed ante bibendum, placerat est eget, finibus massa. Aliquam vitae lobortis nulla. Quisque sit amet tortor ut orci facilisis scelerisque vitae et diam.</p>
            </Col>
          </Row>
          <Row>
            <Col xs="6" md="3" className="mb-3">
              <UsageBlock
                image={usageImg}
                title="Usage"
                alt="Usage"
              />
            </Col>
            <Col xs="6" md="3" className="mb-3">
              <UsageBlock
                image={usageImg}
                title="Usage"
                alt="Usage"
              />
            </Col>
            <Col xs="6" md="3" className="mb-3">
              <UsageBlock
                image={usageImg}
                title="Usage"
                alt="Usage"
              />
            </Col>
            <Col xs="6" md="3" className="mb-3">
              <UsageBlock
                image={usageImg}
                title="Usage"
                alt="Usage"
              />
            </Col>
            <Col xs="6" md="3" className="mb-3">
              <UsageBlock
                image={usageImg}
                title="Usage"
                alt="Usage"
              />
            </Col>
            <Col xs="6" md="3" className="mb-3">
              <UsageBlock
                image={usageImg}
                title="Usage"
                alt="Usage"
              />
            </Col>
            <Col xs="6" md="3" className="mb-3">
              <UsageBlock
                image={usageImg}
                title="Usage"
                alt="Usage"
              />
            </Col>
            <Col xs="6" md="3" className="mb-3">
              <UsageBlock
                image={usageImg}
                title="Usage"
                alt="Usage"
              />
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row className="mb-3">
            <Col>
              <h3>Sed finibus nisl nec imperdiet porta</h3>
              <p>Nunc in leo ac diam congue rutrum. Suspendisse vel justo euismod, tincidunt sapien ac, convallis tellus. Nam sed ante bibendum, placerat est eget, finibus massa. Aliquam vitae lobortis nulla. Quisque sit amet tortor ut orci facilisis scelerisque vitae et diam.</p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="col-6 col-md-3 mb-3">
              <CountriesBlock
                image={france}
                title="France"
                alt="France"
              />
            </Col>
            <Col className="col-6 col-md-3 mb-3">
              <CountriesBlock
                image={france}
                title="France"
                alt="France"
              />
            </Col>
            <Col className="col-6 col-md-3 mb-3">
              <CountriesBlock
                image={france}
                title="France"
                alt="France"
              />
            </Col>
            <Col className="col-6 col-md-3 mb-3">
              <CountriesBlock
                image={france}
                title="France"
                alt="France"
              />
            </Col>
            <Col className="col-6 col-md-3 mb-3">
              <CountriesBlock
                image={france}
                title="France"
                alt="France"
              />
            </Col>
            <Col className="col-6 col-md-3 mb-3">
              <CountriesBlock
                image={france}
                title="France"
                alt="France"
              />
            </Col>
            <Col className="col-6 col-md-3 mb-3">
              <CountriesBlock
                image={france}
                title="France"
                alt="France"
              />
            </Col>
            <Col className="col-6 col-md-3 mb-3">
              <CountriesBlock
                image={france}
                title="France"
                alt="France"
              />
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row className="mb-3">
            <Col>
              <h3>Sed finibus nisl nec imperdiet porta</h3>
              <p>Nunc in leo ac diam congue rutrum. Suspendisse vel justo euismod, tincidunt sapien ac, convallis tellus. Nam sed ante bibendum, placerat est eget, finibus massa. Aliquam vitae lobortis nulla. Quisque sit amet tortor ut orci facilisis scelerisque vitae et diam.</p>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs="6" md="4" xl="2" className="mb-3">
              <CityBlock 
                image={cityOpera}
                title="Opéra Saint-Lazare"
                alt="Opéra Saint-Lazare"
              />
            </Col>
            <Col xs="6" md="4" xl="2" className="mb-3">
              <CityBlock 
                image={cityBastille}
                title="Bastille"
                alt="Bastille"
              />
            </Col>
            <Col xs="6" md="4" xl="2" className="mb-3">
              <CityBlock 
                image={cityBercy}
                title="Bercy"
                alt="Bercy"
              />
            </Col>
            <Col xs="6" md="4" xl="2" className="mb-3">
              <CityBlock 
                image={cityChamps}
                title="Champs-Elysées"
                alt="Champs-Elysées"
              />
            </Col>
            <Col xs="6" md="4" xl="2" className="mb-3">
              <CityBlock 
                image={cityGare}
                title="Gare de Lyon"
                alt="Gare de Lyon"
              />
            </Col>
            <Col xs="6" md="4" xl="2" className="mb-3">
              <CityBlockAll />
            </Col>
          </Row>
        </Container>


      </div>
    );
  }
}

export default App;
