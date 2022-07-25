import{generarToken}from "./generarToken.js"
import{generarURI} from './generadorURI.js'
import{consumirAPI} from './servicio.js'

//detectar el clic en el boton del formulario
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    console.log ("-----SUBMIT-----")
    evento.preventDefault()
    
    //let frutaSeleccionada=document.getElementById("imagin dragon").value
    let URI=generarURI("4SsVbpTthjScTS7U2hmr1X")

    let TOKEN="Bearer BQC7AAVlSdw6Mi2IOSA-lWwfnPE6ta98NbsnZN1naoMtPUuhYjzJNRPtB870lYpejYjcFh4a9hMksDaO2iTkRCAin0DFRnzMq7QGKvtke6eM0fOUuzhnf56g2PeF7c0IviPP16BEfaZOh-50EHGvhLEFsKGDdZsJhTC21VKQ8rymTSOHVerqBB56ZnBmNQS47pI"

    console.log(TOKEN)
    
    async function activarAPI(){
        let datosConsultadosAPI= await consumirAPI(URI,TOKEN)
        console.log(datosConsultadosAPI)
    }

    activarAPI()
    
    


})