let btnPublicarServicio = document.getElementById("btnpublicarServicio")
let btnPublicarProducto = document.getElementById("btnpublicarProducto")

let contenedorFormularioPublicacion = document.getElementById("contenedor-formulario-registro-publicacion")

btnPublicarProducto.onclick=() => {
    mostrarFormularioPublicarProducto()
    
}

btnPublicarServicio.onclick=()=> {
    mostrarFormularioPublicarServicio()

}


function mostrarFormularioPublicarProducto(){
    contenedorFormularioPublicacion.innerHTML = ``
    let formulario = document.createElement("div")
    formulario.className = "form-register-producto"
    formulario.innerHTML=` <div class="form-register">
            <h4>Formulario Publicar Producto</h4>
             <select name="" id= "rubro-publicacion" class="controls" >
                <option value="null">Seleccionar rubro de la publicacion</option>
                <option>rubro1</option>

                <option>Rubro2 </option>
                
                <option>Rubro3 </option>
                
            </select> 
            <input class="controls" type="text" name="nombre-oferta" id="nombres-oferta" placeholder="Nombre del servicio">
           

            <input class="controls" type="num" name="puntajeNecesarioServicio" id="puntajeNecesarioServicio" placeholder="Cant. Puntos necesesarios">

            <input type="file" class="controls" placeholder="Ingrese una imagen">
        

            <input class="botons" type="submit" value="Publicar">
        </div>`
        contenedorFormularioPublicacion.appendChild(formulario)
}

function mostrarFormularioPublicarServicio(){
    contenedorFormularioPublicacion.innerHTML = ``
    let formulario = document.createElement("div")
    formulario.className = "form-register-servicio"
    formulario.innerHTML=` <div class="form-register">
            <h4>Formulario Publicar Servicio</h4>

            <select name="" id= "rubro-publicacion" class="controls" >
                <option value="null">Seleccionar rubro de la publicacion</option>
                <option>rubro1</option>

                <option>Rubro2 </option>
                
                <option>Rubro3 </option>
                
            </select> 
            <input class="controls" type="text" name="nombre-oferta" id="nombres-oferta" placeholder="Nombre del servicio">
           

            <input class="controls" type="num" name="puntajeNecesarioServicio" id="puntajeNecesarioServicio" placeholder="Cant. Puntos necesesarios">

            <input type="file" class="controls" placeholder="Ingrese una imagen">
        

            <input class="botons" type="submit" value="Publicar">
          
        </div>`
        contenedorFormularioPublicacion.appendChild(formulario)
}