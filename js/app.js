import Api from './api.js'
const container = document.getElementById('container')
const api = new Api()

window.addEventListener('load', async()=>{
   const data = await api.Query()
       let html = `
       <img src="${data.url}" alt="${data.title}">
       
       `;
       container.innerHTML = html;
})