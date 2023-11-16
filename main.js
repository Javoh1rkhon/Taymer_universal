let plus = document.querySelector('.plus')
let plus1 = document.querySelector('.plus1')
let plus2 = document.querySelector('.plus2')

let hour = document.querySelector('.one')
let minut = document.querySelector('.three')
let second = document.querySelector('.five')

let minus = document.querySelector('.minus')
let minus1 = document.querySelector('.minus1')
let minus2 = document.querySelector('.minus2')

let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let clear = document.querySelector('.clear')

let two = document.querySelector('.two')
let four = document.querySelector('.four')

let h = 0
let m = 0
let s = 0
let interval;

function getZero(num) {
    if (num <= 9) {
        return `0${num}`
    } else {
        return num
    }
}

plus.addEventListener('click', () => {
    h++
    hour.innerHTML = getZero(h)
})

plus1.addEventListener('click', () => {
    m++ 
    if (m <= 59) {
        minut.innerHTML = getZero(m)
    } else {
        m = 0
        minut.innerHTML = getZero(m)
    }
})
plus2.addEventListener('click', () => {
    s++ 
    if (s <= 59) {
        second.innerHTML = getZero(s)
    } else {
        s = 0
        second.innerHTML = getZero(s)
    }
})


minus.addEventListener('click', () => {
    h--
    hour.innerHTML = getZero(h)

    if (h < 0) {
        h = 0 
        hour.innerHTML = getZero(h)
    }
})
minus1.addEventListener('click', () => {
    m--
    minut.innerHTML = getZero(m)

    if (m < 0) {
        m = 0 
        minut.innerHTML = getZero(m)
    }
})
minus2.addEventListener('click', () => {
    s--
    second.innerHTML = getZero(s)

    if (s < 0) {
        s = 0 
        second.innerHTML = getZero(s)
    }
})

start.addEventListener('click', () => {

    two.classList.add('.active')
four.classList.add('.active')

    interval = setInterval(() => {
        s--
        second.innerHTML = getZero(s)
        
        if (s < 0) {
            m--
            s = 59
            second.innerHTML = getZero(s)
            minut.innerHTML = getZero(m)
        } else if (m < 0) {
            h--
            m = 59
            s = 59
            hour.innerHTML = getZero(h)
            second.innerHTML = getZero(s)
            minut.innerHTML = getZero(m)
        } else if ( h === 0 && m === 0 && s === 0) {
            clearInterval(interval)
            console.log('stop');
        }
    }, 10)
})

stop.addEventListener('click', () => {
    clearInterval(interval)
})

clear.addEventListener('click', () => {
    clearInterval(interval)
    h = 0,
    m = 0,
    s = 0 

    hour.innerHTML = '00'
minut.innerHTML = '00'
second.innerHTML = '00'
})