# Proyecto Ecommerce Backend


Hemos creado un proyecto para gestionar un Ecommerce vía creación de API REST  con las siguientes herramientas:
- JavaScript
- Node JS
- Express
- Sequelize
- SQL
Por ello habrá que instalar en el sistema los complementos necesarios, en este caso, Sequelize, Node js y Express.

Para levantar el proyecto es necesario crear un archivo config.json en el que se creará la conexión a la base de datos y asignar un puerto localhost.
En primer lugar creamos la base de datos en SQL.


# Endpoints
​
Permite crear una base de datos, con sus correspondientes tablas, mediante varios endpoints logramos modificar los datos contenidos en las tablas.
Para ello utilizaremos los distintos métodos HTTP:
- .get
- .post
- .update
- .delete
De esta forma realizaremos la solicitud desde la propia URL.
​

## Utilización
​
Tras introducir las siguientes url y datos requeridos, el usuario recibirá un fichero JSON con la respuesta solicitada.
​

### Inicializando la base de datos y tablas con sequelize
​
- Crear base de datos.
​
- Crear tablas Users, Products, Categories, Orders y orderProducts con sus relaciones.
​
- La tabla OrderProducts se trata de una tabla intermedia en la que no es necesario introducir datos. Se crea porque Orders y Products tienen una relación N:M.


### Añadiendo datos vía endpoints
Creamos distintos endpoints para todas las funcionalidades conectando los routers a los controller de cada tabla.


## Categories

- Create
Introducimos Categories vía la route especificada. En el body debe introducirse el dato requerido (name) con el método .post 
_'localhost:3000/categories/newCategory'_

- Update
Necesario introducir en la ruta el id que se recupera vía req.params con el método .put
_'localhost:3000/categories/updateCategory/id/:id'_

- Delete
Lo utilizaremos para borrar un registro. Introduciremos id en la ruta y lo recuperamos por req.params con el método .delete
_'localhost:3000/categories/deleteCategory/id/:id'_

- Get
Utilizamos método .get para ver todas las categories
_'localhost:3000/categories/getAll'_

- GetById
Búsqueda de categoría por ID. Introducimos el id de la categoría en la ruta y la recuperamos por req.params utilizando método .get
_'localhost:3000/categories/getById/id/:id'_

- GetByName
Busqueda por nombre. Introducimos el nombre en la ruta y lo recogemos por req.params. Usamos método .get
_'localhost:3000/categories/getByName/name/:name'_ 

- GetAllWithProducts
Recuperar categorias junto a sus productos. Se hace la solicitud por la ruta, no es necesario meter más datos. Utilizamos método .get
_'localhost:3000/categories/GetAllWithProducts'_

## Products
​
- Create
Lo utilizaremos para añadir un producto. En el body deben introducirse los datos requeridos (name, price y CategoryId). Se recogen vía req.body utilizando el método .post
_'localhost:3000/Products/newProduct'_. 

- GetAll
Lo usaremos para recoger todos los productos, se hace la solicitud desde la propia ruta, no precisa introgucir informacón. Vía método .get
_'localhost:3000/Products/getAll'_ 

- GetById
Buscamos producto por id introduciendo el id en la ruta y recogiendolo con req.params con el método .get 
_'localhost:3000/getById/id/:id'_ 

- GetByName
Buscamos el producto por nombre introduciendolo en la ruta y lo recogemos con req.params. Se envía con el método .get
_'localhost:3000/Products/getByName/name/:name'_ 

- GetByPrice
Búsqueda productos por precio introduciendolo en la ruta, lo recogeremos con req.params, y utilizamos el método .get
_'localhost:3000/Products/GetByPrice/:price'_

- GetAll?order
Buscamos los productos con todos los productos según id descendente. Se utiliza el método .get
_'localhost:3000/Products/GetAll?order=-id'_

- Update
Endpoint para actualizar productos uno a uno, introduciremosel id en la ruta y lo recogeremos con req.params. Utilizamos el método .put
 _'localhost:3000/Products/update/id/:id'_ 

- Delete
Borrar registro del producto introducido en la ruta, lo recogeremos con req.params y utilizaremos el método .delete
_'localhost:3000/Products/delete/id/:id'_

- OrderByPrice
Veremos productos ordenados por precio, no se precisa introducir ningún dato y utilizamos el método .get
_'localhost:3000/Products/orderByPrice'_ 

## Users

- Create
Crear un nuevo usuario, introduciremos en el body los campos necesarios para crear el registro. En este caso name, last_name, email y password. Utilizamos el método .post.
:_'localhost:3000/Users/create'_

- Login
Para iniciar sesión será preciso haber confirmado el correo electrónico, de esta manera cambia el campo confirmed a true y nos envía el token que nos da acceso a la página. Introducimos por body el email y el password con el método .post.
_'localhost:3000/Users/login'_. 

- GetUser
Ver los datos de un usuario, es necesario autentificarse y ser admin. Se recogen con un .get
_'localhost:3000/Users/getUser'_ 

- Delete
Salir de la sesión, es necesario introducir en el Header el token que nos han mandado. Utilizamos el método .delete. 
_'localhost:3000/Users/logout'_ 

## Orders

- Create
Crear un nuevo pedido, introducimos vía body el ProductId y el UserId con el método .post
 _'localhost:3000/orders/newOrder'_ 

- GetAll
Buscar todos los pedidos con el método .get. 
_'localhost:3000/orders/getAll'_ 
