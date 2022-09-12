function rolarDados() {
    return Math.ceil((Math.random() * 6))
}

function soma() {
    let dados = []
    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 1; i <= 1000; i++) {
        const result = rolarDados() + rolarDados();
        dados.push(result)
        count[result]++
    }

    return count
}

console.log(soma())

function barra(count) {
    let section = document.querySelector("section")
    for (let i = 2; i < count.length; i++) {
        let div = document.createElement("div")
        let num = document.createElement("p")


        div.style.width = `${count[i]}px`
        div.style.height = `30px`
        div.style.background = `saddlebrown`
        div.style.color = `white`
        div.style.borderRadius = `5px`
        div.style.padding = `2px`
        div.style.margin = `10px`
        div.innerText = `${count[i]}`
        num.innerText = `${i}`
        section.appendChild(div)
    }
}

console.log(barra(soma()))