const select = document.getElementById('zoodiac');
const body = document.body;

const generate_color = ()=>{
    let value = select.value;
    switch(value){
        case "aries":
             body.style.backgroundColor = "#fc0303";
            break;
        case "tarus":
            body.style.backgroundColor = "#03fc6f";
            break;
        case "gemini":
             body.style.backgroundColor = "skyblue";
            break;
        case "cancer":
             body.style.backgroundColor = "tomato";
            break;
        case "leo":
             body.style.backgroundColor = "brown";
            break;
        case "virgo":
             body.style.backgroundColor = "violet";
            break;
        case "libra":
             body.style.backgroundColor = "yellow";
            break;
        case "scorpio":
             body.style.backgroundColor = "blue";
            break;
        case "sagittarius":
             body.style.backgroundColor = "#994ead";
            break;
        case "aquarius":
             body.style.backgroundColor = "#579eeb";
            break;
        case "capricon":
             body.style.backgroundColor = "#eb8d57";
            break;
        case "pisces":
             body.style.backgroundColor = "#fc88d8";
            break;
        default:
             body.style.backgroundColor = "#f5dcdc";
            break;
    }
}