const date1 = new Date('July 14, 2023');
const date2 = new Date('May 28, 2023');
const date3 = new Date('Apr 12, 2023');

const oneDay = 1000 * 60 * 60 * 24;

const getDays = (date) => Math.round((Date.now() - date.getTime())/oneDay);

console.log(getDays(date1));

document.getElementById("timer1").innerHTML = getDays(date1);
document.getElementById("timer2").innerHTML = getDays(date2);
document.getElementById("timer3").innerHTML = getDays(date3);

const jsConfetti = new JSConfetti()
document.getElementsByTagName('button')[0].addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['💖', '💗', '🌈', '✨', '💫', '🌸'],
        emojiSize: 30
     })
     document.getElementsByClassName("hide")[0].style.display = "block";
});

document.getElementsByTagName('button')[1].addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['🌈', '✨', '💫'],
        emojiSize: 30
     })
     document.getElementsByClassName("hide2")[0].style.display = "block";
});

document.getElementsByTagName('button')[2].addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['⏰', '⏳'],
        emojiSize: 30
     })
     document.getElementsByClassName("hide3")[0].style.display = "block";
});
