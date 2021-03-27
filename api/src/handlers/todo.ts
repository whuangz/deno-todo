import db from "../helpers/mongodb.ts";

const mongoDB = db.getDatabase().collection("todo");

const get = async(context: any) => {
    try {
        const todo = {
            title: "Test Deno",
            description: "Todo Description",
            created_at: new Date()
        }
        const response = {
            success: true,
            todo
        }

        context.response.body = JSON.stringify(response);

    }catch (err) {
        const response = {
            success: false,
            err
        }
        context.response.status = 500;
        context.response.body = JSON.stringify(response);
    }
};

const post = async(c: any) => {
    const body = c.request.body;
    const data = await body.value;

    const response = await mongoDB.insertOne(data);

    c.response.body = JSON.stringify(response);


};

export {get, post};