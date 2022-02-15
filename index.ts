let arrEm:string[] = ["⚔","💰","🐞","⚡"];

async function play()
{
    (document.getElementById("result") as HTMLTextAreaElement).style.display = "none";
    for (let time = 200; time < 1000; time+=50) {
        await timer(time);
        console.log(time);
        changeEmoji();
    }

    checkWin();
}

function timer(time:number)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("success"), time);
    });
}

function changeEmoji()
{
    (document.getElementById("slot-c-1") as HTMLTextAreaElement).innerText = (document.getElementById("slot-t-1") as HTMLTextAreaElement).innerText;
    (document.getElementById("slot-c-2") as HTMLTextAreaElement).innerText = (document.getElementById("slot-t-2") as HTMLTextAreaElement).innerText;
    (document.getElementById("slot-c-3") as HTMLTextAreaElement).innerText = (document.getElementById("slot-t-3") as HTMLTextAreaElement).innerText;

    (document.getElementById("slot-b-1") as HTMLTextAreaElement).innerText = (document.getElementById("slot-c-1") as HTMLTextAreaElement).innerText;
    (document.getElementById("slot-b-2") as HTMLTextAreaElement).innerText = (document.getElementById("slot-c-2") as HTMLTextAreaElement).innerText;
    (document.getElementById("slot-b-3") as HTMLTextAreaElement).innerText = (document.getElementById("slot-c-3") as HTMLTextAreaElement).innerText;

    (document.getElementById("slot-t-1") as HTMLTextAreaElement).innerText = arrEm[Math.floor(Math.random()*4)];
    (document.getElementById("slot-t-2") as HTMLTextAreaElement).innerText = arrEm[Math.floor(Math.random()*4)];
    (document.getElementById("slot-t-3") as HTMLTextAreaElement).innerText = arrEm[Math.floor(Math.random()*4)];

}

function checkWin()
{
    if((document.getElementById("slot-c-1") as HTMLTextAreaElement).innerText == (document.getElementById("slot-c-2") as HTMLTextAreaElement).innerText && (document.getElementById("slot-c-2") as HTMLTextAreaElement).innerText == (document.getElementById("slot-c-3") as HTMLTextAreaElement).innerText)
    {
        (document.getElementById("result") as HTMLTextAreaElement).style.display = "block";
        (document.getElementById("result") as HTMLTextAreaElement).innerText = "JACKPOT!";
    }
    else if((document.getElementById("slot-c-1") as HTMLTextAreaElement).innerText == (document.getElementById("slot-c-2") as HTMLTextAreaElement).innerText)
    {
        (document.getElementById("result") as HTMLTextAreaElement).style.display = "block";
        (document.getElementById("result") as HTMLTextAreaElement).innerText = "WIN!";
    }
    else if((document.getElementById("slot-c-2") as HTMLTextAreaElement).innerText == (document.getElementById("slot-c-3") as HTMLTextAreaElement).innerText)
    {
        (document.getElementById("result") as HTMLTextAreaElement).style.display = "block";
        (document.getElementById("result") as HTMLTextAreaElement).innerText = "WIN!";
    }
    else if((document.getElementById("slot-c-1") as HTMLTextAreaElement).innerText == (document.getElementById("slot-c-3") as HTMLTextAreaElement).innerText)
    {
        (document.getElementById("result") as HTMLTextAreaElement).style.display = "block";
        (document.getElementById("result") as HTMLTextAreaElement).innerText = "WIN!";
    }
    else
    {
        (document.getElementById("result") as HTMLTextAreaElement).style.display = "block";
        (document.getElementById("result") as HTMLTextAreaElement).innerText = "GAME OVER!";
    }
}