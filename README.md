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
Creamos distintos endpoints para todas las funcionalidades conectando router al CategoriesController.


## Categories

- Create
Introducimos Categories vía la route especificada. En el body debe introducirse el dato requerido (name). 
_'localhost:3000/categories/newCategory'_

- Update
Necesario introducir en la ruta el id que se recupera vía req.params

- Delete
Lo utilizaremos para borrar un registro. Introduciremos id en la ruta y lo recuperamos por req.params
_'localhost:3000/categories/deleteCategory/id/:id'_

- Get
Utilizamos para ver todas las categories
_'localhost:3000/categories/getAll'_

- GetById
Búsqueda de categoría por ID
_'localhost:3000/categories/getById/id/:id'_

- GetByName
Busqueda por nombre
_'localhost:3000/categories/getByName/name/:name'_ 

- GetAllWithProducts
Recuperar categorias junto a sus productos
_'localhost:3000/categories/GetAllWithProducts'_

## Products
​
- Create
Lo utilizaremos para añadir un producto: _'localhost:3000/Products/newProduct'_. En el body deben introducirse los datos requeridos (name, price y CategoryId). (post)

- GetAll
Lo usaremos para recoger todos los productos: _'localhost:3000/Products/getAll'_ (get)

- GetById
Buscamos producto por id: _'localhost:3000/getById/id/:id'_ (get)

- GetByName
Buscamos por nombre: _'localhost:3000/Products/getByName/name/:name'_ (get)

- GetByPrice
Búsqueda por precio : _'localhost:3000/Products/GetByPrice/:price'_ (get)

- GetAll?order
Ver todos los productos según id descendente: _'localhost:3000/Products/GetAll?order=-id'_ (get)

- Update
Actualizar productos: _'localhost:3000/Products/update/id/:id'_ (put)

- Delete
Borrar registro: _'localhost:3000/Products/delete/id/:id'_ (delete)

- OrderByPrice
Ver productos por precio: _'localhost:3000/Products/orderByPrice'_ (get)

## Users

- Create
Crear un nuevo usuario :_'localhost:3000/Users/create'_

- Login
Iniciar sesión : _'localhost:3000/Users/login'_. Introduciendo por body el email y el password (post)

-GetUser
Ver los datos de un usuario, es necesario autentificarse y ser admin: _'localhost:3000/Users/getUser'_ (get)

- Delete
Salir de la sesión: _'localhost:3000/Users/logout'_ (delete)

## Orders

- Create
Crear un nuevo pedido, introducimos vía body el ProductId y el UserId: _'localhost:3000/orders/newOrder'_ (post)

- GetAll
Buscar todos los pedidos: _'localhost:3000/orders/getAll'_ (get)
