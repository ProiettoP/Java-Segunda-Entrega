const respuesta = "oscuridad"
let intentos = 3

while (intentos > 0) {
    const ingreso = prompt("Cuanto mas tienes de mi, menos ves. ¿Que soy? " +  "Una palabra, todo con minusculas: " + "Intentos restantes: " + intentos)

    if (ingreso === respuesta) {
        alert("¡Felicitaciones! Adivinaste.")
        break
    } else {
        intentos = intentos - 1

        if (intentos > 0) {
            alert("Respuesta incorrecta.")
        } else {
            
            const opcion = prompt("Agotaste tus intentos. 1- Dame la respuesta o 2- Quiero volver a intentar:")

            switch (opcion) {
                case "1":
                    alert("La respuesta correcta era: " + respuesta)
                    break
                case "2":
                    intentos = 3
                    alert("¡Tenes 3 intentos mas!")
                    break
                default:
                    alert("Opcion no valida. La respuesta correcta era: " + respuesta)
                    break
            }
        }
    }
}