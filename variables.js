
'use strict';

export const buyIn = 20; 

export const startingSeconds = 15 * 60;

export const smallBlinds = [ 100, 200, 300, 400, 500, 800, 1000, 1500, 2000, 3000, 5000];

export function payouts( pot ) {
    return [ pot * 0.5, pot * 0.3, pot * 0.2 ];
}
