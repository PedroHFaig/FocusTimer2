import { control } from './elements.js'
import { ambMusic } from './elements.js'
import * as actions from './actions.js'

export function registerambMusic() {
    ambMusic.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action] ()
    })
}

export function registerControls() {
    control.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action] ()
    })
}