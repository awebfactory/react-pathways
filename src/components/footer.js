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
            <a href="https://twitter.com/ReactPathways" target="_blank"><img name="Twitter" src="images/icons/svg/twitter-logo-button.svg" width="32" height="32"/></a>
            <a href="https://www.facebook.com/ReactPathways-1607302469593834/" target="_blank"><img name="Twitter" src="images/icons/svg/facebook-logo-button.svg" width="32" height="32" /></a>
          </p>
        </div>
        </div>
      </footer>
 	);
  }
}

export default Footer;