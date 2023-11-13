import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction } from "@vercel/remix";
import { withPrefix } from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(manifest ? [{ rel: "manifest", href: manifest }] : []),
  { rel: "icon", type: "image/png", href: withPrefix("/img/favicon.png") },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" },
  { rel: "stylesheet", href: withPrefix("/vendor/bootstrap/css/bootstrap.min.css") },
  { rel: "stylesheet", href: withPrefix("/vendor/bootstrap-icons/bootstrap-icons.css") },
  { rel: "stylesheet", href: withPrefix("/vendor/icofont/icofont.min.css") },
  { rel: "stylesheet", href: withPrefix("/vendor/glightbox/css/glightbox.min.css") },
  { rel: "stylesheet", href: withPrefix("/vendor/remixicon/remixicon.css") },
  { rel: "stylesheet", href: withPrefix("/vendor/owl.carousel//owl.carousel.min.css") },
  { rel: "stylesheet", href: withPrefix("/vendor/boxicons/css/boxicons.min.css") },
  { rel: "stylesheet", href: withPrefix("/vendor/venobox/venobox.css") },
  { rel: "stylesheet", href: withPrefix("/vendor/swiper/swiper-bundle.min.css") },
  { rel: "stylesheet", href: withPrefix("/css/style.css") },
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