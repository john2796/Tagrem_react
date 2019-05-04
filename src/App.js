import React from 'react';
import './App.css';
import StateFinder from './components/state-finder/StateFinder';

const App = () => (
  <div className="App">
    <div className="container">
      <h1>In Gravida Libero</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim neque, molestie ut
        placerat id, tincidunt in sem. Pellentesque sodales lobortis eros nec pulvinar. In ac
        ultrices ipsum, ultricies semper nisi. Morbi ac hendrerit nulla. Sed nec ex commodo,
        tincidunt felis ac, iaculis ipsum.
      </p>
      <p>Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt felis ac, iaculis ipsum</p>
      <h3>State Finder</h3>
      <p>Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt felis ac, iaculis ipsum</p>
      <StateFinder />
      <button type="submit">Submit</button>
      <h2>In Gravida</h2>
      <h2>In gravida</h2>
      <h3>Cras ac mauris</h3>
      <p>nteger dictum hendrerit pharetra. Cras fermentum posuere egestas.</p>
      <button type="button">Learn More</button>
      <h3>Curabitur elementum</h3>
      <p>
        Cras vel imperdiet mauris. Pellentesque libero mauris, interdum a felis et, condimentum
        mattis erat.
      </p>
      <button type="button">Learn More</button>
      <h3>Awards and Recognitions</h3>
      <p>
        Aliquam eget ligula mauris. Etiam viverra non turpis eu auctor. Nullam pretium est libero,
        et condimentum massa egestas id.
      </p>
      <button type="button">Learn More</button>
      <h3>Morbi placerat </h3>
      <p>Nam feugiat ultrices ligula eget faucibus. Mauris convallis ipsum est.</p>
      <button type="button">Learn More</button>
      <h3>Suspendisse eu</h3>
      <p>Duis pretium elementum dui, id feugiat neque facilisis vel.</p>
      <button type="button">Learn More</button>
      <h3> Integer faucibus</h3>
      <p>
        Vivamus at rutrum est, eu pellentesque lacus. Curabitur imperdiet tortor sit amet enim
        ullamcorper, a aliquet odio rutrum.
      </p>
      <button type="button">Learn More</button>
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
    </div>
  </div>
);

export default App;
