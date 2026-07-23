# Evaluación: Proyecto CRUD con Node.js y MongoDB

Este proyecto es un caso práctico de conexión de una aplicación Node.js con una base de datos MongoDB (Biblioteca Hipotética), gestionando 5 colecciones diferentes y ejecutando operaciones CRUD.

## Autor
**Leandro Mulato Rios**

## Requisitos Previos
- [Node.js](https://nodejs.org/) instalado en el sistema.
- Servicio de MongoDB ejecutándose localmente en el puerto 27017 (o acceso a un clúster).

## Instalación y Configuración

1. **Ubicarse en el proyecto:**
   Abre tu terminal en la carpeta raíz del proyecto.

2. **Instalar las dependencias:**
   Para descargar los módulos necesarios (como el driver oficial de MongoDB), ejecuta el siguiente comando en tu terminal:
   ```bash
   npm install
   ```

## Ejecución del Proyecto

Asegúrate de que tu servidor MongoDB local esté encendido y funcionando. Luego, para iniciar las operaciones CRUD, utiliza el siguiente comando:

```bash
npm start
```

*(Nota técnica: Para que el comando anterior funcione, el archivo `package.json` debe tener definido `"start": "node index.js"` en su sección de `scripts`. De lo contrario, se puede ejecutar directamente con `node index.js`).*

## Estructura de la Base de Datos
El proyecto maneja las siguientes 5 colecciones con un mínimo de 4 documentos cada una:
1. `libros`
2. `lectores`
3. `prestamos`
4. `autores`
5. `editoriales`
