import state from './state.js'
import * as sounds from './sounds.js'
import * as el from './elements.js'
import * as timer from './timer.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updateDisplay ()
}

export function plusTime(event) {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    minutes += 5

    if(minutes > 91) {
        return
    }

    timer.updateDisplay(minutes, seconds)
}

export function minusTime() {    
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    
    minutes -= 5
    
    if(minutes < 0) {
        return
    }

    timer.updateDisplay(minutes, seconds)
}

export function toggleForest() {
    state.isMute = el.phTree.classList.toggle('music-on')
    
    if(state.isMute) {
      sounds.floresta.play()
        return
    }

    sounds.floresta.pause()
}

export function toggleRain() {
    state.isMute = el.phRain.classList.toggle('music-on')

    if(state.isMute) {
        sounds.chuva.play()
        return
    }

    sounds.chuva.pause()
}

export function toggleStore() {
    state.isMute = el.phStore.classList.toggle('music-on')

    if(state.isMute) {
        sounds.cafeteria.play()
        return
    }

    sounds.cafeteria.pause()
}

export function toggleFire() {
    state.isMute = el.phFlame.classList.toggle('music-on')

    if(state.isMute) {
        sounds.lareira.play()
        return
    }

    sounds.lareira.pause()
}