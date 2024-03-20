
const btnNumbers = document.querySelectorAll(".number");
const main = document.querySelector(".answer");

var firstValue = 0;
var countClicks = 0;
var holderValue = [];
var leftValue = 0;
var rightValue = 0;
var totalValue = 0;

const numberClick = (value) => {

    
    leftValue = leftValue +""+ value

    console.log(leftValue);

    const content = `
    <article class="backpack" id="everyday">
        ${parseInt(leftValue)}
    </article>
`;

main.innerHTML = content;
    
}

    // btnNumbers[1].addEventListener("click", () => {
    //     console.log(btnNumbers[1].textContent);
    //   }, false);

