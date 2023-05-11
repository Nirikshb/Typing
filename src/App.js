import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <h1>Card Component Example</h1>
      <Card
        image={require('./save.jpg')}
        title="Card Title 1"
        escription="This is the description for Card 1"
      />
      <Card
        image="image-url.jpg"
        title="Card Title 2"
        description="This is the description for Card 2"
      />
      <Card
        image="logo.svg"
        title="Card Title 3"
        description="This is the description for Card 3"
      />
    </div>
  );
};

export default App;
