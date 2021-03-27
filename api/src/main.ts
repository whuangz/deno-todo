import { Application, Router } from "../deps.ts";
import initRouters from "./routes/index.ts";
import db from "./helpers/mongodb.ts";


const URL = Deno.env.get("URL") || 'http://localhost';
const PORT = +(Deno.env.get("PORT") || 3001);

const app = new Application();
initRouters(app);

app.addEventListener("listen", () => {
    console.log(`Server listening at ${URL}: ${PORT}`);
});


await app.listen({port : PORT});
