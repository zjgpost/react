import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        const s = this.state;
        const { time } = s.date.toLocaleDateString();
        return (
            <div>
                <h1>Hello,world!</h1>
                <h2>
                    现在是
                    {time}
                </h2>
            </div>
        );
    }
}

export default Clock;
