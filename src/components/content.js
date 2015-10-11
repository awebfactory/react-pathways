import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div className="jumbotron awf-header">
                {this.props.children}
            </div>
        );
    }
}

export default Content;
