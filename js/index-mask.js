window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function(){
        document.querySelector('#mask').classList.toggle('is-active')
    })
})