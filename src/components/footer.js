import React from 'react';

class Footer extends React.Component {
  render(){
    return (
      <footer>
        <div className="row">
        <div className="container-fluid">
          <hr />
          <p className="pull-left">
            Content <a href="http://en.wikipedia.org/wiki/Copyleft"><img border="0" title="Copyleft" alt="Copyleft" src="images/16px-Copyleft.png" /></a>
            Victor Kane and <a href="http://awebfactory.com" _target="_blank"><img title="AWebFactory.com" src="images/awf-favicon.ico" width="32" height="32" /></a>
          </p>
          <p className="pull-right">
            <a href="https://twitter.com/ReactPathways" target="_blank"> Twitter <span className="glyphicon glyphicon-twitter-t" aria-hidden="true"></span></a>
            <a href="https://www.facebook.com/ReactPathways-1607302469593834/" target="_blank">Facebook <span className="glyphicon glyphicon-facebook" aria-hidden="true"></span></a>
          </p>
        </div>
        </div>
      </footer>
 	);
  }
}

export default Footer;