import flags from './model/flags.js';

const bandeiras = document.querySelector('#flags')

function InserirBandeira(flag){
    bandeiras.innerHTML += `
        <div class='flag col-2 my-2 text-center'>
            <img src='${flag.image}' alt='${flag.name}'>
            <p>${flag.name}</p>
        </div>
    `
}

flags.forEach(InserirBandeira)