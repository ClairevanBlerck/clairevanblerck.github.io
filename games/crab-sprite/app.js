document.addEventListener('DOMContentLoaded', () => {

    const walkUp = document.querySelector('.walk-up');
    const walkRight = document.querySelector('.walk-right');
    const walkDown = document.querySelector('.walk-down');
    const walkLeft = document.querySelector('.walk-left');
  

    document.addEventListener('keydown', animateCrab => {
        const keyName = event.key;


        //assign functions on keyCodes
        function animateCrab() {
            if (keyName === 'ArrowUp') {
                walkUp();
            } else if (keyName === 'ArrowRight') {
                walkRight();
            } else if (keyName === 'ArrowDown') {
                walkDown();
            } else if (keyName === 'ArrowLeft') {
                walkLeft();
            }
        }

    })

    console.log(event.key)

     
    function walkUp() {
        

    }

}) 