import React from 'react';
//import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import styled from 'styled-components';
//import {injectGlobal} from 'styled-components';


const CountriesBlock = styled.div`
  border-bottom: 1px solid #C1C7CD;
  padding-bottom: 0.5em;
  
  img {
    border: 1px solid #C1C7CD;
    border-radius: 50%;
  }

  span {
    margin-left: 1em;
    padding-bottom: 1em;
    font-weight: 500;
  }
}

`;



const CountriesWrapper = props => (
  <CountriesBlock>
		<img className="img-responsive" src={props.image} alt={props.alt}/>
		<span>{props.title}</span>
  </CountriesBlock>

)
export default CountriesWrapper