import { json, redirect } from "@remix-run/node";

import { configRedirects } from "~/configs";

export function redirectRouteToURL(request: Request) {
    const url = new URL(request.url);
    const foundItem = configRedirects.find((item) => {
        return item.path.trim() === url.pathname;
    });

    if (!foundItem) return json("Page Not Found", { status: 404 });
    return redirect(foundItem?.url);
}