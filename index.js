
let isModalOpen = false;
let contrastToggle = false;

//best practice
const scaleFactor = 1/20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for(let i = 0; i < shapes.length;++i){
        const isOdd = i % 2 !==0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`
    }
    
}
function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " light-theme";
    }
    else{
        document.body.classList.remove("light-theme");
    }
    
}
async function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

    await emailjs.sendForm('service_15e99nt', 'template_8qg0w3f', event.target, 'H8pfVjcPqGs4LTcH_').then(()=> {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(()=> {
        loading.classList.remove("modal__overlay--visible");
        alert("The email service is temporarily unavailable. Please contact me directly on stasiasviridenko@gmail.com")
    })
}

function toggleModal(){
    //toggle modal
    if(isModalOpen){
        isModalOpen =false
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";

}