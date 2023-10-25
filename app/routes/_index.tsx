import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { redirectRouteToURL } from "~/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "Fachridan Tio Mu'afa - Personal Website" },
    {
      name: "description",
      content: "SWE - Android • Building goo.gle/googledevsid & @gdgjakarta • #GoogleCertified - Associate Android Developer • Ex-GDSC Lead @ GDSC UIN Syarif Hidayatullah Jakarta",
    },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return redirectRouteToURL(request);
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Fachridan Tio Mu'afa</h1>
    </div>
  );
}