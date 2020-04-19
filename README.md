# crud-node
## Instrucciones:
### Entregar una colección
    GET
    http://localhost:3000/students/
### Entregar un registro
    GET
    http://localhost:3000/students/:id
### Modificar un registro
    PUT
    http://localhost:3000/students/:id
    body: {
    "id": "05",
    "names": "Andres Roman Lonan",
    "document": "104",
    "typeDocument": "CC",
    "average": 4.3
    }
### Crear un registro
    POST
    http://localhost:3000/students/
    body: {
    "id": "05",
    "names": "Andres Roman Lonan",
    "document": "104",
    "typeDocument": "CC",
    "average": 4.3
    }
### Eliminar un registro
    DELETE
    http://localhost:3000/students/:id
### Modificar todos los registros que cumplan con un criterio
    PUT
    http://localhost:3000/:property/:value
    body: {
    "average": 4.3
    }
    property: Que propiedad del estudiante desea buscar.
    value: Valor de propiedad del estudiante desea buscar.
    body: Valor/Valores de los estudiantes encontrados que desea cambiar

### Entregar el promedio de las notas de todos los estudiantes de un curso
    http://localhost:3000/students/average
