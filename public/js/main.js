const deleteBtn = document.querySelectorAll('.del')
const planned = document.querySelectorAll('button.plan_to_read')
const reading = document.querySelectorAll('button.currently_reading')
const finished = document.querySelectorAll('button.finished')
const abandoned = document.querySelectorAll('button.abandoned')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteBook)
})

Array.from(planned).forEach((el)=>{
    el.addEventListener('click', markPlanned)
})

Array.from(reading).forEach((el)=>{
    el.addEventListener('click', markReading)
})

Array.from(finished).forEach((el)=>{
    el.addEventListener('click', markFinished)
})

Array.from(abandoned).forEach((el)=>{
    el.addEventListener('click', markAbandoned)
})

async function deleteBook(){
    const bookId = this.parentNode.dataset.id
    try{
        const response = await fetch('books/deleteBook', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'bookIdFromJSFile': bookId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markPlanned(){
    const bookId = this.parentNode.dataset.id
    try{
        const response = await fetch('books/changeStatus', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'bookIdFromJSFile': bookId,
                'status': 'plan_to_read'
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markReading(){
    const bookId = this.parentNode.dataset.id
    try{
        const response = await fetch('books/changeStatus', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'bookIdFromJSFile': bookId,
                'status': 'currently_reading'
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markFinished(){
    const bookId = this.parentNode.dataset.id
    try{
        const response = await fetch('books/changeStatus', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'bookIdFromJSFile': bookId,
                'status': 'finished'
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markAbandoned(){
    const bookId = this.parentNode.dataset.id
    try{
        const response = await fetch('books/changeStatus', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'bookIdFromJSFile': bookId,
                'status': 'abandoned'
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
