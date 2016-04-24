import React from 'react';
import Header from './header';
import Home from './content/home';
import Footer from './footer';


class App extends React.Component {
  render(){
    return (
    	<div className="container">
    	    <Header />
    	    {this.props.children}
    	    <Footer />
    	</div>
 	);
  }
}

export default App;
