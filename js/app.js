// Animate on Scroll
AOS.init();

// Typed JS
let typed = new Typed("#typed", {
    strings: [
        "Mahasiswa",
        "FTI 2019",
        "Web Developer soon"
    ],
    typeSpeed: 40,
    startDelay: 90,
    loop: true
});

window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        console.log("You're now at bottom of the page.")
    }
}

// const getUser = (id) => {
//     const nama = id === 1 ? 'Muhammad Saddam' : 'Pradana';
//     return { id, nama };
// }

// const userSatu = getUser(1);
// console.log(userSatu);

// const userDua = getUser(2);
// console.log(userDua);

// const getUser = (id, cb) => {
//     const time = id === 1 ? 3000 : 2000;
//     setTimeout(() => {
//         const nama = id === 1 ? 'Saddam' : 'Pradana';
//         cb({ id, nama });
//     }, time);
// }

// const userSatu = getUser(1, (hasil) => {
//     console.log(hasil);
// })

// const userDua = getUser(2, (hasil) => {
//     console.log(hasil);
// })

// const hello = 'Hello Neoline';
// console.log(hello);
