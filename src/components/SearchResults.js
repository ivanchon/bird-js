import React from 'react';
import { Row, Col } from 'reactstrap';
import CityBlock from './CityBlock';

//Image Imports
import cityOpera from '../img/opera.png';
import cityBastille from '../img/bastille.png';
import cityBercy from '../img/bercy.png';
import cityChamps from '../img/champs.png';
import cityGare from '../img/garelyon.png';
import cityEiffel from '../img/eiffel.png';

const SearchResults = () => (

  <div>
    <hr class="mb-3" />
    <Row>

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
        <CityBlock
          image={cityEiffel}
          title="Eiffel-Trocadero"
          alt="Eiffel-Trocadero"
        />
      </Col>
    </Row>
  </div>
)
export default SearchResults


