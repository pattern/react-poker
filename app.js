
'use strict';

import React from 'react';
import Timer from './components/Timer.js';
import Blinds from './components/Blinds.js';
import Pot from './components/Pot.js';
import Debts from './components/Debts.js';
import Clock from './components/Clock.js';

import { startingSeconds, payouts, buyIn, smallBlinds } from './variables.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="orange-bg">
                    <div className="container header">
                        <div className="col1">
                            <Clock />
                        </div>
                        <div className="col2">
                            <h2 className="poker-title">Poker Simulator</h2>
                        </div>
                        <div className="col3">
                            &nbsp;
                        </div>
                        <div className="clear-both"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="col1">
                        <Blinds smallBlinds={ smallBlinds } />
                    </div>
                    <div className="col2">
                        <Timer startingTime={ startingSeconds } />
                    </div>
                    <div className="col3">
                        <Pot payouts={ payouts } buyIn={ buyIn } />
                        <Debts />
                    </div>
                    <div className="clear-both"></div>
                </div>
            </div>
        );
    }
}

React.render( <App/>, document.getElementById( 'app' ) );
