import React from 'react';

class Docs extends React.Component {
    render() {
        return (
            <div className="jumbotron awf-header">
                <h1>react-starter Docs</h1>
                <ul>
                    {this
                        .props
                        .docs
                        .map(doc => (
                            <li key={doc.id}>{doc.title}</li>
                        ))}
                </ul>
            </div>
        );
    }
}

export default Docs;
