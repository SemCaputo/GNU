// const enhance = () => {
//     document.querySelectorAll(".word").forEach((word) => {
//         const letters = word.innerText.split("");
//         word.innerHTML = null;
//         letters.forEach((letter) => {
//             word.innerHTML += `<span class="letter">${letter}</span>`;
//         });
//     });
// };
// enhance();

const cells = document.querySelectorAll('.cell');

const turn = cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        playSong(index);
        console.log(index)
    });
});

function playSong(index) {

}
