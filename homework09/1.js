let main = document.querySelector('#main')
let page = {
    '#aboutme': `
    aboutus/
    aboutus/
    aboutus/
    aboutus/
    `,
    '#ex1': `
    ex1/
    ex1/
    ex1/
    ex1/
    `,
    '#ex2': `
    ex2/
    ex2/
    ex2/
    ex2/
    `,
    '#ex3': `
    ex3/
    ex3/
    ex3/
    ex3/
    `
}
window.onhashchange = function(){
    let hash = window.location.hash
    main.innerHTML = page[hash]
}