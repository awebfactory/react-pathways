import React from 'react';

class Home extends React.Component {
  render(){
    return (
        <div className = "container rp-page">
            <div className="page-header">
                <h1>Welcome to ReactPathways</h1>
            </div>
    	    <p>Guidance to help you find your path to ReactJS step by step</p>
            <p>An app which also serves as an up-to-date non-trivial React, React Router and Redux example.</p>
        </div>
 	);
  }
}

export default Home;