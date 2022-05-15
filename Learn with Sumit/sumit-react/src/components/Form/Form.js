import React from 'react';

class Form extends React.Component {
    state = {
        title: 'Javascript',
    };

    handleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="Enter title"
                    />
                </form>
            </div>
        );
    }
}

export default Form;
