function new_square () {
    let currentelement = document.createElement('div')
    currentelement.classList.add('square')
    return currentelement
}

const btn = document.getElementById('start')

const grid = document.getElementById('grid')

btn.addEventListener('click', function () {
    for (let i = 0; i < 100; i++) {
        let currentsquare = new_square()

        currentsquare.addEventListener('click', function () {
            this.classList.toggle('clicked')
        })

        currentsquare.innertext = i + 1
    }

})





