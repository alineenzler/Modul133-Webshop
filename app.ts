import {Application, router, send, Session} from "./deps.ts"

const app = new Application();
const port: number = 8000;

const session = new Session({ framework: "oak" });
await session.init();
app.use(session.use()(session));

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async context => {
    await send(context,
        context.request.url.pathname,
        {
            root: `${Deno.cwd()}/src/frontend`,
            index: "index.html"
        }
    )
});

app.addEventListener("listen", ({ secure, hostname, port }) => {
    const protocol = secure ? "https://" : "http://";
    const url = `${protocol}${hostname ?? "localhost"}:${port}`;
    console.log(`Listening on: ${port}`);
});

await app.listen({ port });