let mostrar=document.getElementById("Resultado")
let list=[]
let final=0
var estado = false;

const num = (num) => {
    if (num === '.') {
        if (estado == true) {
            return
        } else {
            estado = true;
            mostrar.textContent = mostrar.textContent + num
            validacion()
        }
    } else {
        mostrar.textContent = mostrar.textContent + num
        validacion()
    }
}


const operation=(ope)=>{
    mostrar.textContent = mostrar.textContent + ope
    validacion()
    
}

const validacion=(sig)=>{
    let resul=mostrar.textContent
    let Cantidad=resul.length
    let status=0
    let status2=0
    let status3=0
    let Primero=resul.charAt(0)
    let Penultimo=resul.charAt(Cantidad-2)
    let Ultimo=resul.charAt(Cantidad-1)

    //Validamos si es una operacion
    status=switchV(Ultimo)
    status2=switchV(Penultimo)
    status3=switchV(Primero)


    if(sig!='='){ //Validamos que tenga un signo ingresado
        if((mostrar.textContent.indexOf("+")!=-1) || (mostrar.textContent.indexOf("-")!=-1) || (mostrar.textContent.indexOf("*")!=-1)  || (mostrar.textContent.indexOf("/")!=-1)){
            console.log('Paso '+mostrar.textContent.indexOf("+"));
            final=1
        }   
    }

    if((status==1 && status2==1) || (sig=='=' && status==1) || (status3==1)){
        mostrar.textContent=resul.slice(0, -1)
        final=0
    }
   
}

const switchV=(val)=>{
    let status=0
    switch(val){
        case "+":
            status=1
            break;

        case "-":
            status=1
            break;

        case "*":
            status=1
            break;

        case "/":
            status=1
        break;
        case ".":
            status=1
        break;
    }

    return status
}

const resultado=()=>{
    validacion('=')

    if(final==1){
        let v=mostrar.textContent
        mostrar.textContent=eval(v)
        list.push(v+' = '+mostrar.textContent)
        final=0
    }else{
        alert('Completar la operación');
    }
}

const limpiar=(t)=>{
    mostrar.textContent =""
    final=0
}

const historial=()=>{
    let body=document.getElementById("ListadoHistorial")
    let load=document.getElementById("load")
    document.getElementById("ContenidoHistorial").style.display="block"
    load.style.display="block"
    let cont="";
    if(list.length>0){
        for(let i=0;i<list.length;i++){
            cont+="<p class='mb-1'>"+list[i]+"</p>";
        }
    }else{
        cont="<p>No se han registrado operaciones</p>";
    }
    
    body.innerHTML=cont;
    setTimeout(()=>{
        load.style.display="none"
    },1000)
}
