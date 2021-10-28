let img = document.querySelector('.img');
let whiteboxs = document.querySelectorAll('.whitebox');

for (boxes of whiteboxs) {
    boxes.addEventListener('dragover', (e) => {
        // console.log('dragover');
        e.preventDefault();


    })
    boxes.addEventListener('dragenter', (e) => {

        e.target.style.border = '4px solid black';
    })
    boxes.addEventListener('drag', (e) => {

        e.target.style.border = 'none';
    })

    boxes.addEventListener('drop', (e) => {
        // console.log('drop event');
        e.target.style.border = 'none';
        if (e.target.className = 'whitebox') {
            e.target.classList.remove('img')
            e.target.appendChild(img).className = 'img';
            // e.target.style.border = `none`;
        }

    })
}

