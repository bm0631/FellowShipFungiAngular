# FellowshipFungiAdminWeb

Este proyecto es una prueba de concepto que facilita la administración de la aplicación FellowshipFungi a personas ajenas, mediante una interfaz web desarrollada en Angular. Las funciones incluidas en esta prueba de concepto son:

- Leer  curiosidades diarias.
- Lector de preguntas del test.

## Requisitos Previos

- Node.js y npm instalados.
- Cuenta de Firebase.
- Angular CLI instalado.

## Instalación

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/bm0631/FellowShipFungiAngular
    ```


2. Instalar las dependencias:

    ```bash
    npm install
    ```

3. Configurar Firebase en tu proyecto de Angular:

    - Crear un nuevo proyecto en Firebase Console.
    - Registrar la aplicación web en Firebase.
    - Descargar el archivo `firebase-config.js` y colocarlo en el directorio `src/environments` de tu proyecto.
    - Activar los servicios de Firestore Database, Authentication y Storage en Firebase.

4. Ejecutar la aplicación:

    ```bash
    ng serve
    ```

5. Abrir el navegador y navegar a `http://localhost:4200`.


## Dependencias

Las siguientes dependencias de Angular se utilizan en este proyecto:

- `@angular-devkit/architect`: 0.1602.14
- `@angular-devkit/build-angular`: 16.2.14
- `@angular-devkit/core`: 16.2.14
- `@angular-devkit/schematics`: 16.2.14
- `@angular/cli`: 16.2.14
- `@angular/fire`: 16.0.0
- `@schematics/angular`: 16.2.14
- `rxjs`: 7.8.1
- `typescript`: 5.1.6
- `zone.js`: 0.13.3

## Desarrollo Futuro

Aunque esta prueba de concepto solo implementa completamente las funciones de gestión de preguntas del test y de curiosidades diarias, las demás funciones están maquetadas y pueden ser implementadas en futuros desarrollos.
