document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField(){
    const node = document.querySelector(".schedule-item").cloneNode(true)
    const fields = node.querySelectorAll('input')
    fields.forEach(function (field) {
        field.value = ""
    })
    document.querySelector("#schedule-items").appendChild(node)
}