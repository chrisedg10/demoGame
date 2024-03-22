# Demo Game

## Prerequisitos
1. Tener instalado Node en la maquina, este se puede descargar desde su pagina y seguir ahi los pasos de instalacion https://nodejs.org/en
2. Tener instalado Visual Studio Code (preferiblemente)
3. Tener instalado los siguientes plugins <br>
  - Playwright test for VS code <br>
  ![image](https://github.com/chrisedg10/demoGame/assets/76143358/bf173e74-4df9-400c-90ab-46addfaf1304)
  - node-snippets o alguno equivalente <br>
  ![image](https://github.com/chrisedg10/demoGame/assets/76143358/48121f51-b29f-4143-8d71-01066d860e40)

## Configuracion
Ejecutar el siguiente comando para actualizar el manejador de paquetes de node <br>
```bash
npm update
```

## Ejecución
Se puede realizar de las siguientes formas <br>
1. Graficamente <br>
- Situarse en el lado de las extensiones y luego dar click en el icono de probeta para acceder al explorador de pruebas<br>
![image](https://github.com/chrisedg10/demoGame/assets/76143358/3d375126-d3c9-45e4-8fee-26e649f3499d) <br>
![image](https://github.com/chrisedg10/demoGame/assets/76143358/1c7d8f2d-4aa3-4b00-b111-19395d34066e) <br>

- Dar click en el boton de ejecución, puede ser por cada caso de prueba o por la suite (conjunto de casos de pruebas)<br>
![image](https://github.com/chrisedg10/demoGame/assets/76143358/0203018c-945d-481a-8431-b22658710996)


2. Consola <br>
Ejecutamos el siguiente comando en nuestra terminal
``` bash
npx playwright test
```
<br> Hay que tomar en cuenta que este comando ejecuta todos los tests que detecte dentro de la carperta "tests" <br>
![image](https://github.com/chrisedg10/demoGame/assets/76143358/c7d0c868-1d5c-44a6-8894-4188736d7690) <br>
Por defecto Playwright tiene configurado que todos los casos de prueba se ejecutaran en la capeta "tests" pero esto se puede cambiar si se desea ejecutar algun archivo en especifico modificando la linea que se muestra en la siguiente imagen: 
![image](https://github.com/chrisedg10/demoGame/assets/76143358/69af991f-c463-4cab-8bc9-7e649a90a41d)

Tomar en cuenta que los casos de prueba requieren parametros, asi que es necesario cambiarlos recurrentemente entre ejecuciones <br>
![image](https://github.com/chrisedg10/demoGame/assets/76143358/66df3068-5f99-476b-9f39-bd37d4f2060e)


## Reporte de pruebas
Ejecutamos el siguiente comando en nuestra terminal
``` bash
npx playwright show-report
```
