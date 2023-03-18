//PUT Request ** Darth Vader invades!*************************/

const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Darth Vader',
            quote: 'I find you lack of faith disturbing.'
        })
    })
    
})