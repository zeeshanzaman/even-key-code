const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
     <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>event.key</small>
</div>

<div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
</div>

<div class="key">
    ${event.code}
    <small>event.code</small>
</div>`
})


// ? is qual to than
// we start here with addEventListener to keydown and event trigger after that we use insert inner HTML and dynamically use ${event.code}