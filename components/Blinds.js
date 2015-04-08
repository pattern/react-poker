

import React from 'react';

let smallBlinds = [ 100, 200, 300, 500, 800, 1000, 1500, 2000, 3000, 5000];

class Blind extends React.Component {
    render() {
        let classString = '';
        if ( this.props.active ) {
            classString += 'active';
        }
        return <li key={ this.props.key } className={ classString }>{ smallBlinds[ this.props.index ] } / { smallBlinds[ this.props.index ] * 2 }</li>
    }
}

class Blinds extends React.Component {
    constructor( props ) {
        this.state = { activeIndex: 0 };

        this.raiseBlinds = this.raiseBlinds.bind( this );
        this.lowerBlinds = this.lowerBlinds.bind( this );
    }

    raiseBlinds() {
        if ( this.state.activeIndex + 1 > smallBlinds.length - 1 ) { return; }
        this.setState( { activeIndex: this.state.activeIndex + 1 } );
    }

    lowerBlinds() {
        if ( this.state.activeIndex === 0 ) { return; }
        this.setState( { activeIndex: this.state.activeIndex - 1 } );
    }

    render() {
        return (
            <div className="blinds">
                <h2>Blinds:</h2>
                <ul className="current-blinds">
                    <li>Current Blind:</li>
                    <Blind index={ this.state.activeIndex } />
                </ul>
                <ul className="blinds-list">
                    { smallBlinds.map( ( blind, index ) => {
                        return <Blind index={ index } key={ index } active={ index === this.state.activeIndex } />
                    } ) }
                </ul>
                <button onClick={ this.raiseBlinds }>Raise</button>
                <button onClick={ this.lowerBlinds }>Lower</button>
            </div>
        );
    }
}

export default Blinds;
