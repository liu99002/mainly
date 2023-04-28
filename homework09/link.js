let main = document.querySelector('#main')
let page = {
    '#login': `
    aboutus/
    aboutus/
    aboutus/
    aboutus/
    `
}
window.onhashchange = function(){
    let hash = window.location.hash
    main.innerHTML = page[hash]
}