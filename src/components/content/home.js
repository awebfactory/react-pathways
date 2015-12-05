import React from 'react';

class Home extends React.Component {
  render(){
    return (
        <div className="jumbotron awf-header">
            <h1>Welcome to react-starter</h1>
    	    <p>A minimalist latest version react, react-router, redux and jwt/bcrypt auth skeleton starter with node/express server and REST API server. An exploration for personal use (ES6, browserify, watchify, browsersync, sass, npm instead of gulp...)</p>
        </div>
 	);
  }
}

export default Home;