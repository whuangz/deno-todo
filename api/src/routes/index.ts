import todo from './todo.ts';

const initRouters = (app: any) => {
    app.use(todo.routes());
};

export default initRouters;