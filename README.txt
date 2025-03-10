================================================================================================
University...: Universidad Técnica Nacional
Campus........: Pacífico
Career.......: Tecnologías de la Información
Course.......: ITI-421 - Tecnologías y Sistemas Web
Period.......: 1-2025
Document.....: Tarea-4-Web
Goals........: Manipulating files
Professor....: Ronny Guevara Gutierrez
Student......: Ricardo Contreras
================================================================================================

Objetivos:

Realizar un pequeño juego en JavaScript donde el usuario y la computadora compitan para ver cuál es el número más alto. Tomando en cuenta lo siguiente:

El usuario debe elegir un número entre 1 y 100 y la computadora genera el número aleatorio entre 1 y 100.

Se deben comparar los números y:

    Si el número del usuario es mayor, muestra un mensaje que diga: "¡Ganó! Su número es más alto."
    Si el número de la computadora es mayor, muestra un mensaje que diga: "Perdió. La computadora tiene un número más alto."
    Si los números son iguales, se muestra un mensaje que diga: "Empate. Ambos sacaron el mismo número."




Requerimientos:

Para ahorrarme un dolor de cabeza en sacar numeros aleatorios en Js, tome la decision de usar una libreria la cual ya trae la funcion (Random) incluida, la cual, para que este proyecto funcione, se debe de inyectar en el codigo.

Metodos de Inyecion:
CDN URLs (Usando: <script src="..."></script>)

    https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-umd-min.js
    https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-esm-min.js
    https://unpkg.com/underscore@1.13.7/underscore-umd-min.js
    https://unpkg.com/underscore@1.13.7/underscore-esm-min.js
    https://pagecdn.io/lib/underscore/1.13.7/underscore-umd-min.js
    https://pagecdn.io/lib/underscore/1.13.7/underscore-esm-min.js
    -------------------------------------------------------------------------
    URL usado:
    https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.7/underscore-umd-min.js
    -------------------------------------------------------------------------
    https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.7/underscore-esm-min.js

Instalacion por medio de Paquete
    -------------------------------------------------------------------------
    Recomedado:
    Node.js npm install underscore
    -------------------------------------------------------------------------
    Meteor.js meteor add underscore
    Bower bower install underscore


Referencias:
    https://underscorejs.org/
    https://underscorejs.org/#random