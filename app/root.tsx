import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction } from "@vercel/remix";
import type { ScriptsFunction } from "@remix-run/node";

export const scripts: ScriptsFunction = () => [
  { async: "", src: "https://www.google-analytics.com/analytics.js" },
  { src: "/vendor/jquery/jquery.min.js" },
  { src: "/vendor/bootstrap/js/bootstrap.bundle.min.js" },
  { src: "/vendor/jquery.easing/jquery.easing.min.js" },
  { src: "/vendor/waypoints/jquery.waypoints.min.js" },
  { src: "/vendor/counterup/counterup.min.js" },
  { src: "/vendor/owl.carousel/owl.carousel.min.js" },
  { src: "/vendor/isotope-layout/isotope.pkgd.min.js" },
  { src: "/vendor/venobox/venobox.min.js" },
  { src: "/vendor/glightbox/js/glightbox.min.js" },
  { src: "/vendor/swiper/swiper-bundle.min.js" },
  { src: "/vendor/purecounter/purecounter_vanilla.js" },
  { src: "/vendor/js/main.js" },
];

export const links: LinksFunction = () => [
  ...(manifest ? [{ rel: "manifest", href: manifest }] : []),
  { rel: "icon", type: "image/png", href: "/img/favicon.png" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" },
  { rel: "stylesheet", href: "/vendor/bootstrap/css/bootstrap.min.css" },
  { rel: "stylesheet", href: "/vendor/bootstrap-icons/bootstrap-icons.css" },
  { rel: "stylesheet", href: "/vendor/icofont/icofont.min.css" },
  { rel: "stylesheet", href: "/vendor/glightbox/css/glightbox.min.css" },
  { rel: "stylesheet", href: "/vendor/remixicon/remixicon.css" },
  { rel: "stylesheet", href: "/vendor/owl.carousel//owl.carousel.min.css" },
  { rel: "stylesheet", href: "/vendor/boxicons/css/boxicons.min.css" },
  { rel: "stylesheet", href: "/vendor/venobox/venobox.css" },
  { rel: "stylesheet", href: "/vendor/swiper/swiper-bundle.min.css" },
  { rel: "stylesheet", href: "/css/style.css" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>
          {
            isRouteErrorResponse(error)
              ? `${error.status} ${error.statusText}`
              : error instanceof Error
                ? error.message
                : "Unknown Error"
          }
        </h1>
        <Scripts />
      </body>
    </html>
  );
}
