# SecretAligner Prueba
Este repositorio contiene la prueba técnica de FrontEnd solicitada por SecretAligner. [(link)](https://github.com/secretaligner/pruebas-tecnicas/tree/main/frontend) 

## Tecnologías

El proyecto ha sido realizado con  [Angular CLI](https://github.com/angular/angular-cli)  versión 10.0.1 y con  [Json Server](https://github.com/typicode/json-server) para mockear el back y obtener los datos principales.

### Pre-requisitos
Para la correcta ejecución del proyecto en local es necesario tener instalado  **Node.js**, el cual se puede obtener desde su  [página oficial](https://nodejs.org/es/).
Se necesita instalar también  **Json Server**:
```
npm install -g json-server
```
El último requisito para poder ejecutar el proyecto es instalar los paquetes necesarios en el repositorio descargado o clonado. Para ello, desde la carpeta donde se encuentra, se ejecuta:
```
npm install
```

### Ejecución

Para iniciar la base de datos con  **json server**  se debe ejecutar el siguiente comando indicando la ruta en la que se encuentra el archivo json que almacena los datos. En el caso de este proyecto desde la carpeta principal:
```
json-server --watch db/db.json
```
Para ejecutar el proyecto se utiliza con el comando de  **angular** o de **npm**:
```
ng serve | npm start
```
Una vez realizado lo anterior ya está listo para ser consultado el proyecto en la dirección  `http://localhost:4200/`.

### Tiempo empleado
A continuación dejo reflejado el tiempo empleado en cada tarea: 

 1. Definición de la estructura de datos a recibir del back y la estructura utilizada basadas en el json provisto: 1h30.
 2. Tarea 1 -> Pantalla principal con los datos mostrados en formato tabla, tarjetas y con el buscador y paginación necesaria: 7h.
 3. Tarea 2 -> Creación del modal para dar de alta un nuevo usuario: 3h. 
