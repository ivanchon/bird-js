import React from 'react';
//import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import styled from 'styled-components';
//import {injectGlobal} from 'styled-components';


const UsageBlock = styled.div`
  //background: pink;
  border: 1px solid #C1C7CD;
  border-radius: 5px;

  figure {
    margin: 0;
  }
  figcaption {
    display: inline;
    padding-left: 0.5em;
    font-weight: bold;
  }

  
`;

const UsageWrapper = props => (
  <UsageBlock>
    <figure>
			<img className="img-responsive" src={props.image} alt={props.alt}/>
			<figcaption>{props.title}</figcaption>
		</figure>
  </UsageBlock>

)
export default UsageWrapper