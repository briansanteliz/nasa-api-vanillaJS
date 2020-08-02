import {Api} from './Api.js'
import {Ui} from './Ui.js'
const container = document.getElementById('container')
const api = new Api()
const ui = new Ui()

document.addEventListener('DOMContentLoaded', async()=>{
   const data = await api.Query()
   ui.Template(data,container)
      
})
const dateInput = document.getElementById('fecha');
const form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
    console.log(dateInput.value)
    form.reset()
    e.preventDefault()
})