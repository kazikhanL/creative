export default function() {
    let scrollButton = document.querySelector(".promo__scroll-link");

    scrollButton.addEventListener("click", event => {
        event.preventDefault();

        const firstBlock = document.querySelector(".promo");
        const firstBlockHeight = firstBlock.offsetHeight;

        let currPostion = window.pageYOffset;
        const STEP = 25;

        const timeID = setInterval(() => {
            currPostion += STEP;
            window.scroll(0, currPostion);

            if (currPostion >= firstBlockHeight) {
                clearInterval(timeID);
            }
        }, 15)
    });
}
