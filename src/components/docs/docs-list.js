import React from 'react';

class DocsList extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <h3>Click on a doc to view</h3>
                </div>
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

export default DocsList;
