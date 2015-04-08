
'use strict';

import React from 'react';

class Clock extends React.Component {
    constructor() {
        this.state = ( { now: new Date() } );

        this.updateClock = this.updateClock.bind( this );
        setInterval( this.updateClock, 1000 );
    }

    // componentDidRender() {
    //     this.updateClock();
    //     setTimeout( this.updateClock, 1000 );
    // }

    updateClock() {
        this.setState( { now: new Date() } );
    }

    render() {
        let now = this.state.now;
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        return <div className="clock">{ hours > 12 ? hours - 12 : hours }:{ minutes < 10 ? '0' + minutes : minutes } PM</div>
    }
}

// Seconds:  :{ seconds < 10 ? '0' + seconds : seconds }

export default Clock;
