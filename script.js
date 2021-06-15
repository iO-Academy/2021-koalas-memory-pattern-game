function select() {
    let random = []
    let colours = ['red', 'green', 'blue', 'yellow'];
    for (let i = 0; i < 4; i++) {
        random.push(colours[Math.floor(Math.random() * colours.length)]);
    }
    console.log(random)
    return random
}

let random = select()


document.querySelector('.start-button').addEventListener('click',e => {
    random.forEach(colour => {
        document.querySelector('#' + colour).classList.add('yellow')
    })
})




// let colours = [];
// colours.push(document.querySelector('#red'))
// colours.push(document.querySelector('#green'))
// colours.push(document.querySelector('#blue'))
// colours.push(document.querySelector('#yellow'))
//
// function select(colours) {
//     let random = []
//     for (let i = 0; i < 4; i++) {
//         random.push(colours[Math.floor(Math.random() * colours.length)]);
//     }
//     console.log(random)
//     return random
// }
// select(colours)
// // document.querySelector('.start-button').addEventListener('click',e => {
// //     console.log('clicked')
// // })
// // setTimeout(select(), 2000)
// //
// random = select()
// random.forEach(colour => {
//     colour.classList.add()
// })