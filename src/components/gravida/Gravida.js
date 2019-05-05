import React from 'react';

import { gravidaData } from '../../dummyData';
import { GravidaStyle } from './GravidaStyle';

const Gravida = () => (
  <GravidaStyle>
    {gravidaData.map(({ id, title, info }) => (
      <div className="gravida-card" key={id}>
        <div>
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
        <div className={`gravida-btn-${id}`}>
          <button type="button">Learn More</button>
        </div>
      </div>
    ))}
  </GravidaStyle>
);

export default Gravida;
