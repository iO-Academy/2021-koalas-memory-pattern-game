function select() {
    let random = []
    let colours = ['red', 'green', 'blue', 'yellow'];
    for (let i = 0; i < 4; i++) {
        random.push(colours[Math.floor(Math.random() * colours.length)]);
    }
    console.log(random)
    return random
}

select()


document.querySelector('.start-button').addEventListener('click',e => {
    console.log('clicked')
})


random.forEach(colour => {
    document.querySelector('#colour').
})
