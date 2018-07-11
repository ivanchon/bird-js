import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CityBlockAll = styled.div`
  color: white;
  background-color: #0070E0;
  padding: 1em;
  font-weight: 500;
  position: relative;	
  height: 100%;
  width: 100%;	
  border-bottom: 2em solid white;

  @media (min-width: 1200px) {
    height: 220px;
    width: 160px;
    border-bottom: 0em;
  }


  i {
    position: absolute;
    bottom: 1em;
    right: 1em;
  }
`;

const CityWrapper = () => (
  <CityBlockAll>
					<p>Voir tous les quartiers à Paris</p>
          <i><FontAwesomeIcon icon={faArrowRight} /></i>
  </CityBlockAll>

)
export default CityWrapper