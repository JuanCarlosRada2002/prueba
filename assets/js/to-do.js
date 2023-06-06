
//evitar que se recargue la pagina

window.addEventListener('load', ()=>{
    //refencias al elmento del DOM
    //conexion entre js y html
    const formCrear = document.getElementById('form-crear')
    const listaPendientes = document.getElementById('lista-Pendientes')
    const inputCrear = document.getElementById('crear')
    const inputBuscar = document.getElementById('buscar')

    // procedimientos post click o ingreso de pendientes
    formCrear.addEventListener('submit', (e)=>{
        //prevent default es para evitar que la pagina se recargue
        e.preventDefault()
        // creamor una funcion que capture lo que ingresen a los inputs
        capturarValor()
        //despues de capturar el valor resetea lo escrito
        formCrear.reset()
        //para que aparezca en escribir algo nuevo el focus es esto | la linea de escribir
        inputCrear.focus()
    })
    const capturarValor = ()=>{
        //el trimp es para eliminar los espacios en blanco
        const tareaNombre = inputCrear.value.trim();
        //usando operadores ternarios para que 
        //no ingresen algo vacio
        (tareaNombre.length) ? mostrarTareaHtml(tareaNombre) : alert('Debe Ingresar el nombre de la tarea')
    }
    const mostrarTareaHtml = (tarea)=>{
        
        const liHtml = `<li><strong>${tarea}</strong>
                            <i class="fa-solid fa-trash-can borrar"></i>
                        </li>`
        listaPendientes.innerHTML += liHtml
        
    }
    // procedimiento para la busqueda
    //usando un evento pra el teclado
    inputBuscar.addEventListener('keyup', ()=>{
        // es to es para ingresar e ir capturando cada caracter
        //o letra ingresada
        const caracter = inputBuscar.value.trim()
        //creamos una funcion
        busqueda(caracter)
    })
    // creamos la funcion de busqueda ya que anteriormente no exisitia
    const busqueda = (cadena)=>{
        let arreglo = Array.from(listaPendientes.children)
        // el metodo filter crea u nuevo array
        // que cumplas ciertas condiciones que damos
        arreglo
            .filter(texto => !texto.textContent.toLowerCase().includes(cadena))
        //vamos a poner otro metodo sobre ese arreglo 
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.add('textFiltrado')
            })
            // ahora lo hacemos a la inversa para que el arreglo
            //nos devuelva los valores ya agregados
        arreglo
            .filter(texto => texto.textContent.toLowerCase().includes(cadena))
        //vamos a poner otro metodo sobre ese arreglo 
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.remove('textFiltrado')
            })
    }
    //procedimiento para borra un item
    // o pendientes agregados
       /* PROCEDIMIENTO PARA BORRAR */ 
    // Configuramos el evento click para borrar
    listaPendientes.addEventListener('click', (e) => {     
        if (e.target.classList.contains('borrar')) {
            e.target.parentElement.remove()
        }
        // console.log(e.target.parentElement)
        inputBuscar.value = ''
    })
    //soltar una alerta para que diga
    //debe hacer esta tarea


    //cuando no queda ninguna tarea mostrar un mensaje

})