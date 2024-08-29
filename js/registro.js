let btnPersonaFisica = document.getElementById("btnPersonaFisica")
let btnPersonaVulnerable = document.getElementById("btnPersonaVulnerable")
let btnJuridica = document.getElementById("btnPersonaJuridica")

let contenedorFormularioRegistro = document.getElementById("contenedor-formulario-registro")

btnPersonaFisica.onclick= () => {
    mostrarFormularioFisica() 
    
}


btnPersonaVulnerable.onclick= () => {
    mostrarFormularioVulnerable() 
    
}


btnPersonaJuridica.onclick= () => {
    mostrarFormularioJuridica() 
    
}

function showInp(){
    var getSelectValue = document.getElementById("medio-contacto").value;
    
    switch (getSelectValue) {
        case "ws": 
            document.getElementById("ws-input").style.display = "inline-block";
            document.getElementById("ws-input").setAttribute("required", "required");
            document.getElementById("email-input").style.display = "none";
            document.getElementById("phone-input").style.display = "none";
            break;
        
        case "email":
            document.getElementById("email-input").style.display = "inline-block";
            document.getElementById("email-input").setAttribute("required", "required");
            document.getElementById("ws-input").style.display = "none";
            document.getElementById("phone-input").style.display = "none";
            break;
        
        case "tel":
            document.getElementById("phone-input").style.display = "inline-block";
            document.getElementById("phone-input").setAttribute("required", "required");
            document.getElementById("ws-input").style.display = "none";
            document.getElementById("email-input").style.display = "none";
            break;

        case "null":
            document.getElementById("ws-input").style.display = "none";
            document.getElementById("phone-input").style.display = "none";
            document.getElementById("email-input").style.display = "none";
        break;
    }
  }


function mostrarFormularioFisica (){
    contenedorFormularioRegistro.innerHTML = ` `
    let formulario = document.createElement("div")
    formulario.className = "form-register-fisica"
    formulario.innerHTML=` <div class="form-register">
            <h4>Formulario Registro Persona Fisica</h4>
            <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre">
           

            <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido">

            <select name="" id= "medio-contacto" class="controls" onchange="showInp()" >
                <option value="null">Seleccione medio de contacto</option>
                <option value="ws">WhatsApp</option>

                <option value="email">Correo electrónico</option>
                
                <option value="tel">Teléfono</option>
                
            </select> 

            <input id="ws-input" class="controls" type="tel" pattern="[1]{2}-[0-9]{4}-[0-9]{4}" placeholder="11-2345-6789" style="display: none" />
            <input id="email-input" class="controls" type="email"  placeholder="Ingrese su correo" style="display: none"/>
            <input id="phone-input" class="controls" type="tel"  pattern="[1]{2}-[0-9]{4}-[0-9]{4}" placeholder="Ingrese su Numero de teléfono" style="display: none"/>

            
            <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña">

           


            <input class="botons" type="submit" value="Registrar">
            <p><a href="./iniciar-sesion.html">¿Ya tengo Cuenta? Iniciar sesion</a></p>
        </div>`
        contenedorFormularioRegistro.appendChild(formulario)
}

function validatePhoneNumber(input) {
    const phonePattern = /^[1]{2}-[0-9]{4}-[0-9]{4}$/;
    if (!phonePattern.test(input.value)) {
        alert('Por favor, ingrese un número de teléfono válido.');
        input.focus();
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('ws-input');
  
    input.addEventListener('input', function (e) {
      let value = e.target.value;
  
      // Remove all non-digit characters
      value = value.replace(/\D/g, '');
  
      // Apply the formatting
      if (value.length <= 10) {
        // Format: +54 9 11 2345 6789
        value = value.replace(/(\d{1})(\d{0,2})(\d{0,4})(\d{0,4})/, '+54 9 $2 $3 $4');
      }
  
      e.target.value = value;
    });
});











function mostrarFormularioJuridica (){
    contenedorFormularioRegistro.innerHTML = ` `
    let formulario = document.createElement("div")
    formulario.className = "form-register-juridica"
    formulario.innerHTML=` <div class="form-register">
            <h4>Formulario Registro Persona juridica</h4>
            <select name="razon-social" class="controls" >

                <option value="null">Indique su razon social</option>

                <option value="soc-anonima">Sociedad anonima</option>
                
                <option value="soc-cap-ind">Sociedad de capital e industria</option>
                
                <option value="soc-colectiva">Sociedad colectiva</option>
                

            </select> 

            <select name="tipo-org" class="controls" >

                <option value="null">Indique su tipo de organizacion</option>

                <option value="tipo-gubernamental">Gubernamental</option>
                
                <option value="tipo-ong">ONG</option>
                
                <option value="tipo-empresa">Empresa</option>
                
                <option value="tipo-institucion">Institucion</option>


            </select> 

            <select name="" id= "medio-contacto" class="controls" onchange="showInp()" >
                <option value="null">Seleccione medio de contacto</option>
                <option value="ws">WhatsApp</option>

                <option value="email">Correo electrónico</option>
                
                <option value="tel">Teléfono</option>
                
            </select> 

            <input id="ws-input" class="controls" type="tel" pattern="[1]{2}-[0-9]{4}-[0-9]{4}" placeholder="11-2345-6789" style="display: none" />
            <input id="email-input" class="controls" type="email"  placeholder="Ingrese su correo" style="display: none"/>
            <input id="phone-input" class="controls" type="tel"  pattern="[1]{2}-[0-9]{4}-[0-9]{4}" placeholder="Ingrese su Numero de teléfono" style="display: none"/>


            <input class="controls" type="text" name="rubro" id="rubro" placeholder="Ingrese Rubro">
            <div class="contenedor-direccion"> 
                <input class="controls" type="text" name="direccion" id="direccion" placeholder="Ingrese calle">
                <input class="controls" type="number" name="altura" id="altura" pattern="[0-9]{4}" placeholder="Ingrese altura">
            </div>
            
        
            <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña">
            <input class="botons" type="submit" value="Registrar">
            <p><a href="./iniciar-sesion.html">¿Tenes cuenta? Iniciar sesion</a></p>
        </div>`
        contenedorFormularioRegistro.appendChild(formulario)
}
