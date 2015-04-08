
'use strict';

export const buyIn = 20;
export const startingSeconds = 15 * 60;
export function payouts( pot ) {
    if ( pot <= 80 ) {
        return [ pot, 0, 0 ];
    } else if ( pot <= 140 ) {
        return [ pot - 30, 30, 0 ];
    } else {
        return [ pot - 60, 40, 20 ];
    }
};
