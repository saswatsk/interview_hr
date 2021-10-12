let btn = document.getElementById("btn");
btn.addEventListener("click", random);


function random() {
    
    let min=1;
    let max=23;
    let x=Math.random() * (max - min) + min;


    let y = Math.floor(x);
    console.log(y);
    let st = "";
    switch (y) {
        case 1:
            st = "Introduce yourself";
            break;
        case 2:
            st = "Why u choose it from non-cs background";
            break;
        case 3:
            st = "What is your strength";
            break;
        case 4:
            st = "What is your weakness";
            break;
        case 5:
            st = "Why should we hire you";
            break;
        case 6:
            st = "Why should you want to work for us";
            break;
        case 7:
            st = "Where do you see yourself 5 years from now";
            break;
        case 8:
            st = "What is your greatest achievement";
            break;
        case 9:
            st = "What is your objective in life";
            break;
        case 10:
            st = "Explain how you would be an asset to this organisation";
            break;
        case 11:
            st = "How would you rate youself";
            break;
        case 12:
            st = "What is your biggest achievement";
            break;
        case 13:
            st = "How do you deal with critisism";
            break;
        case 14:
            st = "How do you handle disagreement with your manager";
            break;
        case 15:
            st = "How do you handled if the priorities of the project is changed";
            break;
        case 16:
            st = "What does motivate you";
            break;
        case 17:
            st = "What is your dream company";
            break;
        case 18:
            st = "Are you ok with relocating";
            break;
        case 19:
            st = "What do you prefer money or work";
            break;
        case 20:
            st = "Define success";
            break;
        case 21:
            st = "Will you lie for the company";
            break;
        case 22:
            st = "How do you work under pressure";
            break;
        case 23:
            st = "Hard work vs smart work";
            break;
        case 324:
            st = "";
            break;
        case 25:
            st = "";
            break;


        default:
            st="heloo world";
            break;
    }

    document.getElementById("qus").innerHTML=st;
}