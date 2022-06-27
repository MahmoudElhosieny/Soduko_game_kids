let start = document.getElementById('start');
start.focus();
start.style.backgroundColor = 'green';
start.style.color = 'white';

function ArrowMovment(sibling) {
    if (sibling != null) {
      //start.focus();
      start.style.backgroundColor = '';
      start.style.color = '';
      sibling.focus();
      sibling.style.backgroundColor = 'green';
      sibling.style.color = 'white';
      start = sibling;
    }
};// function
  
document.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowUp') {
      // up arrow
        let idx = start.cellIndex;
        //console.log(idx)
        let nextrow = start.parentElement.previousElementSibling;
        //console.log(nextrow)
        if (nextrow != null) {
            //console.log(idx)
          let sibling = nextrow.cells[idx];
          //console.log(sibling)
        ArrowMovment(sibling);
      }
    } else if (e.key == 'ArrowDown') {
      // down arrow
      let idx = start.cellIndex;
      let nextrow = start.parentElement.nextElementSibling;
      if (nextrow != null) {
        let sibling = nextrow.cells[idx];
        ArrowMovment(sibling);
      }
    } else if (e.key == 'ArrowLeft') {
      // left arrow
      var sibling = start.previousElementSibling;
      ArrowMovment(sibling);
    } else if (e.key == 'ArrowRight') {
      // right arrow
      var sibling = start.nextElementSibling;
      ArrowMovment(sibling);
    }


});// arrow keys