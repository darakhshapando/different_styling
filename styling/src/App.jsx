import React from 'react';
import './styles/background.css';
import './styles/colors.css';
import './styles/borders.css';
import './styles/margins.css';
import './styles/padding.css';
import './styles/dimensions.css';
import './styles/box-model.css';
// import './styles/outline.css';
import './styles/fonts.css';
import './styles/links.css';
import './styles/forms.css';

function App() {
  return (
    <div className="background-gradient text-primary width-full box-model-example">
      <header className="App-header">
        <h1 className="font-large text-white">Hello, World!</h1>
        <p className="margin-large padding-medium text-secondary">
          Welcome to my styled React app. Explore various CSS properties applied here.
        </p>
        
        <section className="form-group">
          <label className="form-label" htmlFor="example-input">Example Input:</label>
          <input
            type="text"
            id="example-input"
            className="form-input"
            placeholder="Enter some text"
          />
        </section>

        <section className="form-group">
          <button type="submit" className="form-submit">Submit</button>
        </section>

        <a href="#" className="link-style">Learn More</a>
        <a href="#" className="link-button">Button Link</a>
        
        <div className="box-model-padding border-rounded margin-auto">
          <p>This is an example of a box model with padding and border.</p>
        </div>
        
        <div className="outline-example border-dashed padding-small">
          <p>This div has an outline and dashed border.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
