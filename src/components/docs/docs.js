import React from 'react';

class Docs extends React.Component {
    render() {
      console.log(this.props.docs);
        return (
            <div className="jumbotron awf-header">
                <h1>react-starter Docs</h1>
            </div>
        );
    }
}

export default Docs;
