import {addItemToBasket, Basket, getAllProducts, getProductById, removeItemFromBasket, Router} from "../../deps.ts"
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
        })
        .get("/basket", async (context) => {
            if (await context.state.session.get("basket") === undefined) {
                context.response.status = 404;
                return;
            }
            const basket: Basket = await context.state.session.get("basket");
            context.response.status = 200;
            context.response.body = Object.fromEntries(basket);
        })
        .put("/basket", async (context) => {
            const result = context.request.body();
            const params: URLSearchParams = await result.value;
            const productId = params.get("productId");
            if (!productId){
                return;
            }
            await addItemToBasket(context, productId);
            const res: Map<string, number> = await context.state.session.get("basket");
            context.response.status = 200;
            context.response.body = Object.fromEntries(res);
        })
        .delete("/basket", async (context) => {
            const result = context.request.body();
            const params: URLSearchParams = await result.value;
            const productId = params.get("productId");
            if (!productId){
                return;
            }
            await removeItemFromBasket(context, productId);
            const res = await context.state.session.get("basket");
            context.response.status = 200;
            context.response.body = Object.fromEntries(res);
        });