# Aplicación E-commerce Pistons
Victor Daniel Velasco Ochoa
Comisión: 43620

## Resumen
Aplicación creada usando React js, se trata de un ecommerce para venta de refacciones mecánicas, integrando temas como Hooks, routering, manejo de dom e integrando un serverless service Firebase de Google.

## Enlaces de interés
 1. Aplicación en hosting: [Pistons](https://pistonsf1.web.app/)
 2. Repositorio GitHub:  [PistonsGitHub](https://github.com/Darkmaster1814/Rines-VictorVelasco/tree/Final_VictorVelasco)
 3. Maquetado Básico e idea: [FigmaPistons](https://www.figma.com/file/EfccT5ECbJDuI2DFagU9f9/Ecommers-Danny?node-id=26:778&t=fCKyOd1bp3rw8jtd-0)

## Descripción de aplicación
La aplicación es un E-commerce para venta de refacciones al por mayor, integra un catálogo de productos los cuales pueden ser filtrados dependiendo de la categoría y es posible acceder a los detalles de cada uno. 
Dentro de cada detalle se puede seleccionar uno o mas articulos para agregar al carrito de compras y comprar una vez se ha registrado y logeado correctamente, todas las compras quedar registradas en firebase storage, para su manejo externo en otra UI admin o para consulta del usuario.

## Requisitos de instalación previos

 4. Node js v16.14.0: Usado para la instalación de los paquetes
 5. Instalar [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/download/): Usado para el maquetado y diseño UI de la aplicación
 6. Instalar [FontAwesome](https://fontawesome.com/docs/web/use-with/react/): Usado para todos los iconos de la aplicación
 7. Instalar [SweetAlert](https://sweetalert2.github.io/#download): Usado para crear las alertas y feedback para el usuario cada que efectua una acción en el UI.
 8. Instalar e iniciar Firebase ([Preguntar por las claves de acceso)](https://github.com/Darkmaster1814): Para Integrar las funciones del Back-end usando la nube.
 
 # ¿Cómo utilizar la aplicación? 

 1. Ingresa a la aplicación  [Pistons](https://pistonsf1.web.app/).
 2. Navega entre las diferentes categorías dando click a cada usando la barra de navegación, si deseas volver al inicio da click en el logotipo de pistons.
 3. Da click en alguno de los productos del catalogo, se desplegarán los detalles del producto seleccionado, y diferentes botones.
 4. Da click en el botón + o - para aumentar la cantidad de productos que deseas agregar al carrito de compras, la aplicación limita el mimimo agregar a 1 y el maximo esta dado por la cantidad maxima en el inventario
 5. Una vez selecciones la cantidad a agregar, da click en el ícono del carrito para agregar al carrito y continúa navegando por la aplicación para agregar mas artículos o si deseas comprar ahora, da click en el botón comprar ahora, cada cambio se verá reflejado en el icono del carrito y en sus detalles al ingresar a la categoría.
 6. Ingresa a la categoría de carrito y visualiza tu carrito, actualiza o sal de la aplicación, el carrito queda guardado y puede ser consultado despúes, puedes eliminar los articulos que ya no desees dando click en el botón x.
 7. Un vez se tenga definida la compra, dar click en "Comprar".
 8. Si no ha iniciado sesión, será redirigido a "Mi cuenta", dar click en registrar si aún no lo ha hecho e ingrese su información personal, en caso de que ya lo haya hecho, dar click en ingrear y logeese usando sus credenciales. En caso de no recordar su contraseña la aplicación automáticamente desplegará un botón de "olvide mi contraseña" despues de un determinado numero de intentos (Revisar bandeja de spam para restablecer contraseña).
 9. Una vez iniciada la sesión tendra acceso a dos botones, uno para salir de la sesión y otro para revisar sus ordenes de compra finalizadas.
 10. Vuelva a el carrito y dar click en "Comprar", verá un desgloce de su compra y sus datos de envío, una vez verificado que sean correctos, dar click en "Proceder al pago".
 11. Paga (En futuras entregas se agregará una API de pago, por ahora se descartó para facilitar las pruebas de compra).
 12.  Visualiza el estatus de tus ordenes de compra o regresa a la categoría "Log-In" con tus credenciales para dirigirte a compras y poder visualizar el estatus de tus pedidos.

 # Diagrama de flujo de los componentes
La siguiente imagen muestra de forma general el flujo de información de los componentes, más importantes de la aplicación y puede ser utilizado como una guía para navegar entre cada uno de ellos y verificar el flujo de información.
![enter image description here](https://firebasestorage.googleapis.com/v0/b/pistonsf1.appspot.com/o/Rutas.png?alt=media&token=d8bb9cd8-06e2-4967-a0d8-530e2a79e887)
 **No necesariamente indica el flujo de dependencias entre los coponentes, pero si se puede usar para saber si un componente esta relacionado con otro, para simplificar, se descartó los contextos dentro del diagrama**.

# Componentes

## Alerts
 - [ ] Alertas: Alertas hechas con sweet alert para dar feedback al usuario cuando realice una acción.

## Botones
 - [ ] Botton: Componente de Botón, posee un icono sin texto.
 - [ ] BottonClassic: Componente de botón tradicional sin relleno y texto en el centro.
 - [ ]  BottonHeader: Componente Botón de cabecera, posee un titulo y una opción para regresar atrás, usado en las secciones de detalles de la aplicación.
 - [ ] BottonWidget: Componente de botón con widget, posee un icono en la parte superior y un texto en la parte inferior, usado en el navbar.

## Nav

 - [ ] NavBar: Componente de barra de navegación, muestra un icono de logotipo que lleva al inicio, las categorias disponibles, carrito de compras y opciones de inicio de sesión.
 - [ ] CartWidget: Componente de boton widget del carrito de compras, se trata de un botón dinámico que muestra la cantidad agregada en el carrito.

## Product (Items)
 -Catalogo:
 - [ ] ItemListContainer: Componente contenedor de articulos disponibles en el ecommerce.
 - [ ] ItemList: Componente de listado de productos del catalogo, crea los componetes de productos dependiendo de la ruta ingresada o la acción del usuario
 - [ ] Item: Componente de cada card de articulos en el catalogo de productos.
 
- ItemDetail:
 - [ ] ItemDetailContainer: Componente contenedor del detalle del catalogo del producto seleccionado.
 - [ ] ItemDescription: Componente de detalles del producto seleccionado.
 - [ ] ItemQuantitySelector: Componente de cantidad en cada descripción de carrito para agregar mas o menos productos.
 
 ## Cart
 
 - [ ] CartContainer: Componente contenedor de cards de articulos agregados al carrito.
 - [ ] CartDetails: Detalles del carrito de productos, como subtotal y cantidad de productos en el carrito o botones para continuar con la compra.
 - [ ] Cart: Componente de Card de cada articulo agregado a carrito.
 
 ## Checkout
 
 - [ ] BriefContainer: Componente contenedor de Checkout, muestra un preview de la orden de compra, contiene los detalles de compra(detalles del cliente) y la lista de productos que se van a comprar.
 - [ ] BriefList: Listado de articulos para la orden de compra.
 - [ ] BriefDetails: Componente de detalles de compra tales como, nombre y datos del cliente, total a pagar y botones para generar orden de compra y proceder a pago.
 
 ## Login
 
 - [ ] LoginContainer: Componente contenedor de Inicio de sesión y registro para nuevos usuarios.
 - [ ]  FormularioIngresar: Componente de formulario para ingresar a la aplicación con usuario email, contraseña.
 - [ ] FormularioRegistrar: Formulario para registrar un nuevo usuario a la aplicación.

## Order

 - [ ] OrderContainer: Componente contenedor de ordenes de compra finalizadas.
 - [ ] OrderList: Componente de Ordenes de compra, realiza la solicitud a la db para crear un map de carritos.
 - [ ] Order: Componente de card de orden de compra, despliega el detalle de cada orden de compra.

## Loader

 - [ ] Loader: Compoenente de Spinner para mostrar durante las consultas al servidor (cargando...).
 
 ## Footer
 
 - [ ] Footer: Componente de footer para el E-commerce, integra algunos botones para dirigirse a las redes sociales y un pequeño mapa de información y contacto.
 
# Context
## Contexto del Carrito
 - [ ] CartContext: Contexto del carrito de compras, posee las funcionalidades básicas para agregar o eliminar del carrito así como acceder a su variable de estado para saber las cantidades agregadas a carrito en cada momento.
 - [ ] CartProvider: Proveedor de funcionalidades del contexto de carrito, describe todas las funciones mencionadas en el cartContext.

## Contexto Inicio de Sesión

 - [ ] LoginContext: Contexto de Inicio de sesión, administra los usuarios logeados, agrega nuevos usuarios e indica si han iniciado sesión o no.
 - [ ] LoginProvider: Provider del Contexto de inicio de sesión, posee todas las funcionalidades para administrar el inicio de sesión como agregar un nuevo usuario, establecer un state para saber si el usuario ingresó o no y con ello controlar y mostrar información acorde dentro de la aplicación.

# CSS
La aplicación integra toda una estructura customizada de maquetado usando etiquetas CSS personalizadas en algunas clases.

 - [ ] App.css: Posee las etiquetas customizadas para darle maquetado y apariencia a la aplicación.
 
 # Imagenes

Unicamente se integra el logotipo como imagen en formato .svg.

# Queries

Se trata de las funciones para realizar consultas en firebase, a través de ellas es como la aplicación tiene acceso a escriturar, obtener y editar los documentos de cada 
colección.

 - [ ] prdenes: Querys para agregar información de envio a usuario en firebase y tambien para obtener sus datos.
 - [ ] productos: Querys para acceder editar y modificar productos desde firebase.
 - [ ] Usuarios: Querys para agregar información de envio a usuario en firebase y tambien para obtener sus datos.
  
# App.jsx

Desde aquí se hace la conexión hacia todos los componentes y rutas de la aplicación.

# Index.css

Estilos del index.html, aquí se incluyó el maquetado general de la app como lo es: Reset universar para margenes y paddings así como traslación de scroll.

# Index.js

Aquí se hace la inyección de todos los componentes usado el ReactDom render para convertirlos a JS, también se usa para inicializar y configurar los servicios de Firebase.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
