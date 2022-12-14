import React from 'react';
import loadingSrc from '../images/loading-response.gif';

class Loading extends React.Component {
  render() {
    return (
      <section className="loading">
        <img src={ loadingSrc } alt="loading" />
      </section>
    );
  }
}

export default Loading;
