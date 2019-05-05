import React from 'react';
import { AppStyle } from './AppStyle';

import StateFinder from './components/state-finder/StateFinder';
import Gravida from './components/gravida/Gravida';
import ProductCards from './components/products-card/ProductCards';

const App = () => (
  <AppStyle>
    <div className="banner" />
    <div className="wrapper">
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
        {/* -------> Products Section Card <------- */}
        <ProductCards />
      </section>
    </div>
  </AppStyle>
);

export default App;
