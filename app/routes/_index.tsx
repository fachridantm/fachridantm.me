import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { redirectRouteToURL } from "~/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "Fachridan Tio Mu'afa - Personal Website" },
    {
      name: "description",
      content: "SWE - Android | GDG Jakarta Co-Organizer | #GoogleCertified - Associate Android Developer | Ex-GDSC Lead @ GDSC UIN Jakarta",
    },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return redirectRouteToURL(request);
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Loading...</h1>
    </div>
  );
}