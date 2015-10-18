import React from 'react';
import DocsList from './docs-list';
import CurrentDoc from './current-doc';

class Docs extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron awf-header">
                    <h1>react-starter Docs</h1>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <DocsList docs={this.props.docs}/>
                    </div>
                    <div className="col-sm-6">
                        <CurrentDoc id = {this.props.location.pathname} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Docs;
