
'use strict';

import React from 'react';

let ordinalAbbrev = ( ordinal ) => {
    if ( ordinal === 1 ) {
        return 'st';
    } else if ( ordinal === 2 ) {
        return 'nd';
    } else if ( ordinal === 3 ) {
        return 'rd';
    } else {
        return 'th';
    }
}

class Pot extends React.Component {
    constructor() {
        this.state = { pot: 0 };
    }

    registerBuyIn( modifier ) {
        if ( this.state.pot + modifier * this.props.buyIn < 0 ) {
            return;
        }
        this.setState( { pot: this.state.pot + modifier * this.props.buyIn } );
    }

    render() {
        return (
            <div className="pot">
                <h2>Pot:</h2>
                <div className="payouts">
                    { this.props.payouts( this.state.pot ).map( ( payout, index ) => {
                        return (
                            <div className="payout" key={ index }>
                                <div>{ index + 1 }{ ordinalAbbrev( index + 1) }:</div>
                                <div>${ payout }</div>
                                <div className="clear-both"></div>
                            </div>
                        );
                    } ) }
                </div>
                <div className="payout">
                    <div>Pot:</div>
                    <div>${ this.state.pot }</div>
                    <div className="clear-both"></div>
                </div>
                <div className="buttons">
                    <button onClick={ this.registerBuyIn.bind( this, 1 ) }>+ Buy In</button>
                    <button onClick={ this.registerBuyIn.bind( this, -1 ) }>-</button>
                </div>
            </div>
        );
    }
}

export default Pot;
