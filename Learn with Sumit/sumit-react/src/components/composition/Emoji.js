import React from 'react';

export default class Emoji extends React.Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        return <div>{this.props.children(this.addEmoji)}</div>;
    }
}
