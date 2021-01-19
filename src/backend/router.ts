import { Router } from "https://deno.land/x/oak/mod.ts";
import {products, Product} from "../backend/interface.ts";

export const router = new Router();

router
    .get("/product", ({ response }: { response: any}) => {
        response.status = 200;
        response.body = {
            success: true,
            data: products
        }})
        .get("/product/:id", (context) => {
            if (context.params && context.params.id) {
                const productId = context.params.id;
              context.response.body = products.find((product: Product) => product.id === productId);
            }
        });
