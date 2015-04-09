

import React from 'react';

class Blind extends React.Component {
    render() {
        let classString = '';
        if ( this.props.active ) {
            classString += 'active';
        }
        return <li key={ this.props.key } className={ classString }>{ this.props.blind } / { this.props.blind * 2 }</li>
    }
}

class Blinds extends React.Component {
    constructor( props ) {
        this.state = { activeIndex: 0 };
        this.raiseBlinds = this.raiseBlinds.bind( this );
        this.lowerBlinds = this.lowerBlinds.bind( this );
    }

    raiseBlinds() {
        if ( this.state.activeIndex + 1 > this.props.smallBlinds.length - 1 ) { return; }
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
                    <Blind blind={ this.props.smallBlinds[ this.state.activeIndex ] } key={ this.state.activeIndex + '-large' } />
                </ul>
                <ul className="blinds-list">
                    { this.props.smallBlinds.map( ( blind, index ) => {
                        return <Blind blind={ blind } key={ index } active={ index === this.state.activeIndex } />
                    } ) }
                </ul>
                <button onClick={ this.raiseBlinds }>Raise</button>
                <button onClick={ this.lowerBlinds }>Lower</button>
            </div>
        );
    }
}

export default Blinds;
