import React from 'react';
//import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import styled from 'styled-components';
//import {injectGlobal} from 'styled-components';


const CityBlock = styled.div`
  //background: pink;

  figure {
    margin: 0;
  }
  figcaption {
    margin-top: 0.5em;
    //padding-left: 0.5em;
    font-weight: bold;
  }

  
`;

const CityWrapper = props => (
  <CityBlock>
    <figure>
			<img className="img-fluid" src={props.image} alt={props.alt}/>
			<figcaption>{props.title}</figcaption>
		</figure>
  </CityBlock>

)
export default CityWrapper