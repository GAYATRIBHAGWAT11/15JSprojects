//  the DOMCOntentLoaded event fires when initial HTML
// document has been completely loaded and 
// PaymentRequestUpdateEvent, without waiting for atylesheets,
//  images and subframes to finish loading


let btn=document.querySelector('.switch-btn')
const video=document.querySelector('slide')

btn.addEventListener('click',function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause();
    }else{
        btn.classList.remove('slide');
        video.play()
    }
})
// preloader

const preloader=document.querySelector('.preloader')
window.addEventListener('load',function(){
    preloader.classList.add('hide-preloader')
})