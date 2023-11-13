import { json, redirect } from "@remix-run/node";

import { configRedirects } from "~/configs";

export function redirectRouteToURL(request: Request) {
    const url = new URL(request.url);
    const foundItem = configRedirects.find((item) => {
        return item.path.trim() === url.pathname;
    });

    if (!foundItem) throw new Response(null, {
        status: 404,
        statusText: "Not Found",
    });
    return redirect(foundItem?.url);
}