export class Ui{
    Template(data, contenedor){
        if(data.msg){
            const alerta = document.createElement('div')
            alerta.className = 'alert alert-danger'
            alerta.innerText = `${data.msg}`
            const alertContainer = document.getElementById('alert').appendChild(alerta)
           setTimeout(()=>{
            alertContainer.remove()
           },2000)
            return
        }       
        
        let html = `
            <div class="shadow-lg  mb-4 bg-white rounded card mb-3 ">
                    
                    <img src="${data.url}" class="img-fluid card-img-top" alt="${data.title}" >
                   
                       <div class="card-body" style="background:#212121; color:#dadada;">
                       <h2 class="card-title my-3 ">
                       ${data.title}
                  </h2>
                           <p class="card-text">${data.explanation}</p>
                       
                           <div class="card-text text-right p-1 d-flex justify-content-between">
                           <small class="p-1" style="color:#bfbfbf !important">Fecha: ${data.date}</small> 
                          <small class="p-1" style="color:#bfbfbf !important">Autor: ${data.copyright ? data.copyright.substring(0,13): 'NASA'}.</small> 
                      </div>
                           </div>
                       
                </div>
        `;
        contenedor.innerHTML = html;
    }
   }
