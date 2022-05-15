import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props); // call super class constructor
        this.state = {
            date: new Date(),
        };
    }

    // Component mount hower por ei method ta call hoy
    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    // Component unmount hower thik agee ei method ta call hoy
    componentWillUnmount() {
        // For performance purpose
        clearInterval(this.clockTimer);
    }

    render() {
        return (
            <h3>
                <span>{this.state.date.toLocaleTimeString(this.props.locale)}</span>
            </h3>
        );
    }
}

export default Clock;
