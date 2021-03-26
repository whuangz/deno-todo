import { Application, Router } from "../deps.ts";
import initRouters from "./routes/index.ts";

const app = new Application();

const URL = Deno.env.get("URL") || 'http://localhost';
const PORT = +(Deno.env.get("PORT") || 3001);

initRouters(app);

app.addEventListener("listen", () => {
    console.log(`Server listening at ${URL}: ${PORT}`);
});


await app.listen({port : PORT});
