export default function Text({ addEmoji, addBracket }) {
    let text = 'Javascript programming language';

    if (addEmoji) {
        text = addEmoji(text, '💙');
    }

    if (addBracket) {
        text = addBracket(text);
    }

    return <div>{text}</div>;
}
