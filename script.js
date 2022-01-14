const title = document.querySelector("#title"),
    author = document.querySelector("#author"),
    year = document.querySelector("#year"),
    btn = document.querySelector(".btn"),
    bookList = document.querySelector("#book-list")

btn.addEventListener("click", function(event) {
    event.preventDefault()

    if (title.value == "" && author.value == "" && year.value == "")
        alert("Please input your information")
    else {
        const tr = document.createElement("tr")

        const th = document.createElement("td")
        th.innerText = title.value
        tr.appendChild(th)
        title.value = ""

        const th1 = document.createElement("td")
        th1.innerText = author.value
        tr.appendChild(th1)
        author.value = ""

        const th2 = document.createElement("td")
        th2.innerText = year.value
        tr.appendChild(th2)
        year.value = ""

        bookList.appendChild(tr)
    }

})
