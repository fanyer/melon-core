/**
 * @file validity
 * @author leon(ludafa@outlook.com)
 */

export default class Validity {

    constructor() {
        this.states = [];
    }

    addState(state) {
        this.states.push(state);
    }

    isValid() {
        for (let i = 0, states = this.states, len = states.length; i < len; ++i) {
            if (!states[i].isValid) {
                return false;
            }
        }
        return true;
    }

    getMessage() {

        for (let states = this.states, i = 0, len = states.length; i < len; ++i) {
            if (!states[i].isValid) {
                return states[i].message;
            }
        }

        return '';

    }


}
