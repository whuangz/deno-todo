import { Router } from "../../deps.ts";
import { get as getTodo} from "../handlers/todo.ts";
const router = new Router();

router.get('/', getTodo);

router.post('/', (c: any) => {
    c.response.body = "post";
});

router.delete('/', (c: any) => {
    c.response.body = "delete";
});

router.put('/', (c: any) => {
    c.response.body = "put";
});

export default router;