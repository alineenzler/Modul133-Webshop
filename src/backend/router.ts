import { Router } from "https://deno.land/x/oak/mod.ts";
import getProducts from '../backend/interface.ts';

const router = new Router();

router
    .get("/AllProducts", ({ response }: { response: any}) => {
        response.status = 200;
        response.body = {
            success: true,
            data: getProducts
        }});

export default router;