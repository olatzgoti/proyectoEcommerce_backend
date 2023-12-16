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

- Introducimos Categories vía la route especificada. En el body debe introducirse el dato requerido (name). 
Creamos distintos endpoints para todas las funcionalidades conectando router al CategoriesController.
Creamos los endpoint necesarios para actualizar
- Necesario introducir en la ruta el id que se recupera vía req.params
Endpoint para borrar(delete)
- Necesario id en la ruta y recuperarlo por req.params
Ver Categories(getall)
- Se hace la búsqueda vía la ruta
Busqueda por id, 

busqueda por nombre y 

para recuperar categorias junto a sus productos.




​
- Añadir un producto: _'localhost:3000/Products/newProduct'_. En el body deben introducirse los datos requeridos (title, description y category_id).
​
#### Filtros, y modificaciones en Products
​
- Lista de productos: _'localhost:3000/Products/getAll'_.(get)
​
- Actualizar un producto: _'localhost:3000/Products/update/id/:id'_. En la url debe introducirse el id del producto a actualizar, y en el body los datos que queramos modificar (name, price y/o category_id).(put)
​
- Filtrar producto por id: _'localhost:3000/Products/getById/id/:id'_. En la url debe introducirse el id del producto buscado.(post)
​
- Filtrar productos de forma descendente (por precio): _'localhost:3000/Products/orderByPrice'_.(get)
​
- Filtrar producto por nombre (name): _'localhost:3000/Products/getByName/name/:name'_. En la url debe introducirse el nombre del producto buscado.(post)
​
- Eliminar un producto: _'localhost:3000/Products/deleteId/id/:id'_. En la url debe añadirse el id del producto a eliminar.(delete)
​
#### Filtros y modificaciones en Categories
​
- Actualizar una categoría: _'localhost:3000/Categories/updateCategory/id/:id'_. En la url debe introducirse el id de la categoría a actualizar, y en el body el nombre (name) que queramos modificar.(put)
​
- Lista de categorías: _'localhost:3000/Categories/getAll'_.(get)
​
- Filtrar categoría por id: _'localhost:3000/Categories/getCategory/id/:id'_. En la url debe introducirse el id de la categoría buscada y se recoge con req.params.(get)

- Borrar Category : _'localhost:3000/Categories/delete/id/:id'_ 
En la url se introduce el id que se recoge con req.params. (delete)

- Recoger Categories con Products: _'localhost:3000/Categories/getAllWithProducts' (get) 