const qBtns = document.querySelectorAll('.q-1');
const textContainer = document.querySelector('.text-img');
let countNO = 0;


qBtns.forEach(btn=> {
    btn.addEventListener('click', ()=> {
        if (btn.innerText === "NO!") {
            countNO++;
            if (countNO < 6) {
                const tArray = [ "Э........", "эмммммммм", "Арчик обидется", "Окей ладно", "Нажми да уже"]
                let textImgHTML = `<div class="text-item v${countNO}">${tArray[countNO - 1]}</div>`;
                textContainer.insertAdjacentHTML('beforeend',textImgHTML)
            }
        }
    })
})
