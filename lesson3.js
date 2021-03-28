// Событие
// Есть обработчик
// Вызывается обработчик
// Создается объект со сведениями о событии (e, ev, event)
// Объект передается параметром в обработчик

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

// 1
// sm.onclick = () => alert("yo!") // outdated
// sm.onclick = null

// const alertFunc = () => alert("yo!")
// sm.addEventListener("click", alertFunc, true) // modern
// sm.removeEventListener("click", alertFunc)

// 2
function onClickHandler(event) {
    // console.log(event.target.id)
    // event.stopPropagation()
    console.log(event.currentTarget.id)
}
sm.onclick = onClickHandler
// md.onclick = onClickHandler
// bg.onclick = onClickHandler

// e.target - элемент, который сгенерировал событие (первый получил клик)
// e.currentTarget - элемент, который вызвал обработчик в процессе всплытия события


// 3
bg.onclick = (event) => {
    if(event.target.id === "big"){
        event.currentTarget.parentElement.style.backgroundColor = "red"
    }
}
// md.onclick = (event) => event.stopPropagation()


