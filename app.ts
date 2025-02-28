import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes   from './src/routes/authRoutes';
import usuarioRoutes from './src/routes/usuarioRoutes';

/*
*Clase de inicio de la aplicación NodeJsExpress
*Autor: Miriam Jasmin Guerrero Lozano
*Fecha: 18 febrero 2024
*/

class Server{
  private app: Application;

  //Inicializa clase
  constructor(){
    this.app = express();
      this.config();
      this.routes();
      this.app.listen(this.app.get("port"), () => {
        console.log("Server on port", this.app.get("port"));
    });      
  }
  
  //Configuración de módulos
  config() : void{
    // configuración del puerto para el servidor
      this.app.set("port", 3000);
     
      // muestra las peticiones en consola
      this.app.use(morgan("dev"));
 
      // puertos de conexión de la API
      this.app.use(cors());
 
      // solo se permiten peticiones en formato JSON
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({extended: false,}));

  }

  //Configura las rutas
  routes(){
    this.app.use("/", authRoutes);
    this.app.use("/usuario", usuarioRoutes)
  }

}
const server = new Server();
