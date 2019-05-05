import React from 'react';
import { AppStyle } from './AppStyle';

import StateFinder from './components/state-finder/StateFinder';
import Gravida from './components/gravida/Gravida';

const App = () => (
  <AppStyle>
    <div className="banner" />
    <div className="container">
      {/* -------> header <------- */}
      <header>
        <div className="header-content">
          <h1>In Gravida Libero</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim neque, molestie ut
            placerat id, tincidunt in sem. Pellentesque sodales lobortis eros nec pulvinar. In ac
            ultrices ipsum, ultricies semper nisi. Morbi ac hendrerit nulla. Sed nec ex commodo,
            tincidunt felis ac, iaculis ipsum.
          </p>
          <p>Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt felis ac, iaculis ipsum</p>
        </div>

        <div className="header-finder">
          <StateFinder />
        </div>
      </header>

      {/* -------> Gravida Main Content Section <------- */}
      <section className="gravida box">
        <h2>In gravida</h2>
        <Gravida />
      </section>

      {/* -------> Product Section <------- */}
      <section className="product box">
        <h2>Products</h2>
        Fitler by
        <select>
          <option>All</option>
          <option>Less Than $500</option>
          <option>From $500 to $1000</option>
          <option>From $1000 to $2000</option>
          <option>$2000 or more</option>
        </select>
        <ul>
          <li>
            Product Title 1
            <br />
            Starting at $500
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            <button type="button">Learn More</button>
          </li>
          <li>
            Product Title 2
            <br />
            Starting at 1900
            <br />
            Donec ornare magna sit amet erat molestie sollicitudin ac vitae lectus.
            <br />
            <button type="button">Learn More</button>
          </li>
          <li>
            Product Title 3
            <br />
            Starting at 1900
            <br />
            Cras non metus sed odio tristique imperdiet.
            <br />
            <button type="button">Learn More</button>
          </li>
          <li>
            Product Title 3
            <br />
            Starting at 1900
            <br />
            Pellentesque mattis tellus ut molestie dapibus.
            <br />
            <button type="button">Learn More</button>
          </li>
        </ul>
      </section>
    </div>
  </AppStyle>
);

export default App;
