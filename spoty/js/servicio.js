
export async function consumirAPI(URI,TOKEN){
    const parametros={
        method:"GET",
        headers:{Authorization:TOKEN}
    }
    let respuesta=await fetch(URI,parametros)
    let respuestaFINAL=respuesta.json()
    return(respuestaFINAL)
}

/*const uri="https://api.spotify.com/v1/artists/48bqPGhLPTuS8gKg3UTtf9/top-tracks?market=us"

const token="Bearer BQD8cgIULiPStLWfXBLYQZc3Tne5mvIUUTgmCIn7RWGazY03a_7sBtO0LDDJscmWzDFAolWnqMkTHt8unKzKwjaPX7Vv3XWbd3UBPOgKs8dX0HsMU-m095escKkQanoX6B8l0M-6i6RB35ECgCqSoVo9_opCHUYCa1w"


const parametros_peticion={
method:"GET",
headers:{Authorization:token}
}



function pint_canciones(canciones){
    console.log(canciones);
}
/*fetch(uri,parametros_peticion)
.then(function(respueta){
    return(respueta.json())
})
.then(function(respuesta){
    pint_canciones(respuesta.tracks)
})
.catch(function(respueta){
    console.log("upss..."+respueta)
})
*/
