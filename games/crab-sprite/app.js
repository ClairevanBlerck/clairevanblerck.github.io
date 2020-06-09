document.addEventListener('DOMContentLoaded', () => {

    const walkUp = document.querySelector('.walk-up');
    const walkRight = document.querySelector('.walk-right');
    const walkDown = document.querySelector('.walk-down');
    const walkLeft = document.querySelector('.walk-left');
  
  
    //assign functions on keyCodes
    function controlWalk() {
        if (keys[38]) {
            classlist.add('walk-up');
            classlist.remove('walk-right');
            classlist.remove('walk-down');
            classlist.remove('walk-left');
        } else if (keys[39]) {
            classlist.add('walk-right');
            classlist.remove('walk-down');
            classlist.remove('walk-left');
            classlist.remove('walk-up');
        } else if (keys[40]) {
            classlist.add('walk-down');
            classlist.remove('walk-left');
            classlist.remove('walk-up');
            classlist.remove('walk-right');
        } else if (keys[37]) {
            classlist.add('walk-left');
            classlist.remove('walk-up');
            classlist.remove('walk-right');
            classlist.remove('walk-down');
        }
    }

}) 