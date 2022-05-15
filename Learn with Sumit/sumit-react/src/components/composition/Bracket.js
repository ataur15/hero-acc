import React from 'react';

export default class Bracket extends React.Component {
    addBracket = (text) => `[ ${text} ]`;

    render() {
        return <div>{this.props.children(this.addBracket)}</div>;
    }
}
