const qbtns2 = document.querySelectorAll('.q-btn2');


qbtns2.forEach(btn=> {
    btn.addEventListener('click', (event)=> {
        if (event.target.innerText === "NO") {
            document.querySelectorAll('.q-btn2')[1].innerText = "YES"
            document.querySelectorAll('.q-btn2')[0].innerText = "NO"
            if (btn.innerText === "NO" && document.querySelectorAll('.q-btn2')[1].innerText === "YES" ) {
                document.querySelectorAll('.q-btn2')[0].innerText = "YES"
                document.querySelectorAll('.q-btn2')[1].innerText = "NO"
            }
        }
        else if (btn.innerText === "YES") {
            btn.setAttribute('href', "third.page.html")
        }
    })
})

