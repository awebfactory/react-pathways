import React from 'react';

class Docs extends React.Component {
    render() {
      let x = this.props.docs;
      console.log(x);
      let y = this.props.route.path;
      console.log(y);
        return (
            <div className="jumbotron awf-header">
                <h1>react-starter Docs</h1>
            </div>
        );
    }
}

export default Docs;
