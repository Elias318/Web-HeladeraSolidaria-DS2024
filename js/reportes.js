let btnReporteFallaTecnica = document.getElementById("btnRegistroFallaTecnica") 
let btnReporteAlerta = document.getElementById("btnRegistroAlerta") 


let contenedorFormularioRegistroFallas = document.getElementById("contenedor-formulario-registro-fallas")



btnReporteFallaTecnica.onclick= () => {
    mostrarFormularioFallaTecnica()
    
}

btnReporteAlerta.onclick= () => {
    mostrarFormularioAlerta() 
    
}




function mostrarFormularioFallaTecnica (){
    contenedorFormularioRegistroFallas.innerHTML = ``
    let formulario_reporte = document.createElement("div")
    formulario_reporte.className = "form-register-falla-tecnica"
    formulario_reporte.innerHTML=
    ` <div class="form-register">
                <h4>Formulario reporte de falla tecnica</h4>
                <input class="controls" type="text" name="nombre-heldera-reporte" id="nombre-heldera-reporte" placeholder="Ingrese Nombre de la heladera" required>             
                <label for="">Fecha reporte y hora del reporte</label>
                <input class="controls" type="datetime-local" name="hora-reporte" id="hora-reporte" placeholder="Ingrese hora del reporte" required>
                
                <input class="controls" type="number" name="tarjeta-asoc-vulnerable" id="tarjeta-asoc-vulnerable" placeholder="Numero de tarjeta asociada" required>
                <input class="controls" type="number" name="menores-a-cargo" id="menores-a-cargo" placeholder="Ingrese cantidad de menores a cargo" required>
                
         
                <input class="botons" type="submit" value="Registrar">
               
            </div>`
            contenedorFormularioRegistroFallas.appendChild(formulario_reporte)
}


function mostrarFormularioAlerta(){
    contenedorFormularioRegistroFallas.innerHTML = ``
    let formulario = document.createElement("div")
    formulario.className = "form-register-falla-tecnica"
    formulario.innerHTML=
    `<div class="form-register">
                <h4>Formulario reporte de falla tecnica23232</h4>
                <input class="controls" type="text" name="nombre-heldera-reporte" id="nombre-heldera-reporte" placeholder="Ingrese Nombre de la heladera" required>             
                <label for="">Fecha reporte y hora del reporte</label>
                <input class="controls" type="datetime-local" name="hora-reporte" id="hora-reporte" placeholder="Ingrese hora del reporte" required>
                
                <input class="controls" type="number" name="tarjeta-asoc-vulnerable" id="tarjeta-asoc-vulnerable" placeholder="Numero de tarjeta asociada" required>
                <input class="controls" type="number" name="menores-a-cargo" id="menores-a-cargo" placeholder="Ingrese cantidad de menores a cargo" required>
                
         
                <input class="botons" type="submit" value="Registrar">
               
            </div>`
            contenedorFormularioRegistroFallas.appendChild(formulario)
}