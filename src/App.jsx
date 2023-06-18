import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import MyComponent from './MyComponent .jsx'

const App = () => {
  return (
    <div>
      <BackgroundVideo />
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>This is the content of my website.</p>
        <MyComponent/>

        {/* Additional content */}
      </div>
    </div>
  );
};

export default App;
