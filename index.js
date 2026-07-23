const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function ejecutarCRUD() {
    try {
        await client.connect();
        console.log("🟢 Conexión exitosa a MongoDB");

        const db = client.db("biblioteca_hipotetica");
        const coleccionLibros = db.collection("libros");

        console.log("\n--- INICIANDO CRUD ---");


        const nuevoLibro = {
            titulo: "Fahrenheit 451",
            autor: "Ray Bradbury",
            genero: "Ciencia Ficción",
            stock: 4
        };
        const resultadoCrear = await coleccionLibros.insertOne(nuevoLibro);
        console.log(`\n[CREATE] Libro agregado con el ID: ${resultadoCrear.insertedId}`);


        const libroLeido = await coleccionLibros.findOne({ titulo: "Fahrenheit 451" });
        console.log("\n[READ] Libro encontrado en la BD:", libroLeido);


        await coleccionLibros.updateOne(
            { titulo: "Fahrenheit 451" },
            { $set: { stock: 10 } }
        );
        console.log("\n[UPDATE] Stock del libro actualizado a 10 unidades.");


        console.log("\n[CONSULTA] Buscando libros del género 'Ciencia Ficción':");
        const librosCienciaFiccion = await coleccionLibros.find({ genero: "Ciencia Ficción" }).toArray();
        console.log(librosCienciaFiccion);


        const resultadoBorrar = await coleccionLibros.deleteOne({ titulo: "Fahrenheit 451" });
        console.log(`\n[DELETE] Cantidad de libros borrados: ${resultadoBorrar.deletedCount}`);

    } catch (error) {
        console.error("🔴 Error durante las operaciones:", error);
    } finally {
        await client.close();
        console.log("\n⚪ Conexión cerrada.");
    }
}

ejecutarCRUD();