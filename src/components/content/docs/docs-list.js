import React from 'react';
import { Link } from 'react-router'

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
                            <li key={doc.id}>
                                <Link to={`/docs/${doc.id}`}>{doc.title}</Link>
                            </li>
                        ))}
                </ul>
            </div>
        );
    }
}

export default DocsList;