/* Background Color Changer Script */

function colorChange() {
    let letters = "0123456789ABCDEF";
    let hashColor = "#";

    for (let i = 0; i < 6; i++) {
        hashColor += letters[(Math.floor(Math.random() * 16))];
        document.querySelector('body').style.background = hashColor;
        document.querySelector('.hexCode').innerHTML = hashColor;
    }
}

function imgBack() {
    document.querySelector('body').style.background = "url('./rose.jfif')";
    document.querySelector('body').style.backgroundRepeat = "repeat-x";
    document.querySelector('body').style.justifyContent = "center";
    document.querySelector('body').style.backgroundSize = "100%";
    document.querySelector('body').style.display = "flex";
}