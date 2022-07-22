const cursor = document.getElementById('cursor');
const faceCube = document.querySelectorAll('.face-cube');
const cubo = document.getElementById('cubo');
const divGde = document.querySelector('.nombre');


// faceCube.forEach(face => {
//     face.addEventListener('mouseover', (e) => {
//         if(e.target.id == 'one-cube') {
//             cubo.classList.add('one-cube');
//             cubo.classList.remove('cubo-animation')
//         } else if(e.target.id == 'two-cube'){
//             cubo.classList.add('two-cube');
//             cubo.classList.remove('cubo-animation')
//         } else if(e.target.id == 'three-cube'){
//             cubo.classList.add('three-cube');
//             cubo.classList.remove('cubo-animation')
//         } else if(e.target.id == 'four-cube') {
//             cubo.classList.add('four-cube');
//             cubo.classList.remove('cubo-animation')
//         } else if(e.target.id == 'five-cube') {
//             cubo.classList.add('five-cube');
//             cubo.classList.remove('cubo-animation')
//         } else if(e.target.id == 'six-cube') {
//             cubo.classList.add('six-cube');
//             cubo.classList.remove('cubo-animation')
//         }
//     })
// })
//
//
let angleX;
let angleY;

// window.addEventListener('onclick', (e) => {
//
// })

window.addEventListener('mousemove', (e) => {
    angleX = e.pageX;
    angleY = e.pageY;
    angleX = angleX + 'deg';
    angleY = angleY + 'deg';
    cubo.style.transform = `rotateY(${angleY})`
    cubo.style.transform = `rotateX(${angleX})`
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
    // setInterval(() => {
    //     displace();
    //
    // }, 1000);


    // angle = Math.atan2(e.pageX, e.pageY) * 180 / Math.PI;

})

// function frames() {
//     const animacion = cubo.animate([
//         {transform: `rotateX(${angleX})`},
//         {transform: `rotateY(${angleY})`}
//
//     ], {
//         easing: 'linear',
//         iterations: 1,
//         duration: 10000,
//     });
//
//     return animacion.finished;
// }
//
// function displace() {
//     frames()
//         .then((res) => {
//             console.log(res)
//         })
// }


//
// window.addEventListener('mouseover', (e) => {
//     if(e.target.classList != 'face-cube') {
//         cubo.classList.remove('one-cube');
//         cubo.classList.remove('two-cube');
//         cubo.classList.remove('three-cube');
//         cubo.classList.remove('four-cube');
//         cubo.classList.remove('five-cube');
//         cubo.classList.remove('six-cube');
//         cubo.classList.add('cubo-animation')
//     }
// })