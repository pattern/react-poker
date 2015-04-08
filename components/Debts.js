
'use strict';

import React from 'react';

let debts = [];

class Debt extends React.Component {
    constructor( props ) {
        this.state = { paid: false };

        this.togglePaid = this.togglePaid.bind( this );
    }

    togglePaid() {
        this.setState( { paid: !this.state.paid } );
    }

    render() {
        let classString = '';
        if ( this.state.paid ) {
            classString += 'paid';
        }
        return <li className={ classString } onClick={ this.togglePaid } key={ this.props.key }>{ this.props.debt }</li>;
    }
}

class Debts extends React.Component {
    constructor( props ) {
        this.state = { debts: debts };
        this.handleSubmit = this.handleSubmit.bind( this );
    }
    
    handleSubmit( event ) {
        event.preventDefault();
        let debt = React.findDOMNode( this.refs['debt-input'] ).value.trim();
        this.state.debts.push( debt );
        this.setState( { debts: this.state.debts } );
        React.findDOMNode( this.refs['debt-input'] ).value = '';
        return;
    }

    listDebts() {
        let debtsList = [];
        if ( !debts.length ) {
            return <li className="no-debts">(No debts!)</li>;
        }
        debts.map( ( debt, index ) => {
            debtsList.push( <Debt key={ index } debt={ debt  } /> );
        } );
        return debtsList;
    }

    render() {
        return (
            <div className="debts">
                <h2>Debts:</h2>
                <ol>
                    { this.listDebts() }
                </ol>
                <form onSubmit={ this.handleSubmit }>
                    <input ref='debt-input' type="text" placeholder="(enter new debt)" />
                </form>
                <div className="settle">Settle debts with cash or Venmo.</div>
            </div>
        );
    }
}

export default Debts;
