import {Api} from './Api.js'
import {Ui} from './Ui.js'

const dateInput = document.getElementById('fecha');
const form = document.getElementById('form')
const year = document.getElementById('year')

const container = document.getElementById('container')
const api = new Api()
const ui = new Ui()

document.addEventListener('DOMContentLoaded', async()=>{
   const data = await api.Query()
   ui.Template(data,container)
      
})
 const año =  new Date().getFullYear()
 year.innerText = año
form.addEventListener('submit', (e)=>{
    console.log(dateInput.value)
    form.reset()
    e.preventDefault()
})