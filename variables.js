
'use strict';

export const buyIn = 20;
export const startingSeconds = 15 * 60;
export const smallBlinds = [ 100, 200, 300, 400, 500, 800, 1000, 1500, 2000, 3000, 5000];
export function payouts( pot ) {
    if ( pot <= 80 ) {
        return [ pot, 0, 0 ];
    } else if ( pot <= 140 ) {
        return [ pot - 30, 30, 0 ];
    } else if ( pot <= 180 ) {
        return [ pot - 60, 40, 20 ];
    } else {
        return [ pot - 80, 60, 20 ];
    }
};
