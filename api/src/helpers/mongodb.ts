import {MongoClient} from "../../deps.ts";

class MongoDatabase  {

    private client: MongoClient;
    private DB_NAME: string;
    private MONGO_URL: string;

    constructor(){
        console.log("Connecting to mongo");
        this.MONGO_URL = Deno.env.get("MONGO_URL") || 'mongodb://localhost:27017';
        this.DB_NAME = Deno.env.get("DB_NAME") || "deno-todo"
        this.client = new MongoClient();
    }

    async connect(){
        await this.client.connect(this.MONGO_URL);
    }

    get getDatabase(){
        return this.client.database(this.DB_NAME);
    }
}

const db = new MongoDatabase();
await db.connect();

export default db;