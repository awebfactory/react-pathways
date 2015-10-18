import React from 'react';
import DocsList from './docs-list';
import DocsIndex from './docs-index';

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
                        <DocsIndex/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Docs;
