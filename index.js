const menuBar = document.getElementById('menu-bar');
const resources = document.getElementById('resources');
const buttons = document.getElementById('buttons')
const menu = ()=>{
    menuBar.classList.toggle('hidden')
    console.log('done')
    menuBar.classList.toggle('h-96')
}

const others = ()=>{
    // menuBar.classList.toggle('-z-10')
    console.log('you clicked me ')
    resources.classList.toggle('hidden');
    
    // buttons.classList.toggle('hidden');
}
