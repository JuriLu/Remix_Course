import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "~/styles/main.css";
import MainNavigation from "~/components/MainNavigation";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MainNavigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

//* Reserved keyword, actually its an component that Remix will display if any error occurs
//*  anywhere in your application
export function ErrorBoundary({ error }: any) {
  //this component always get an error prop *(which is an object)
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>An Error Ocurred!</title>
      </head>
      <body>
        <MainNavigation />
        <main className="error">
          <h1>An Error Ocurred!</h1>
          <p>{error.message}</p>
          <p>
            Back to <Link to="/">Safety</Link>
          </p>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


//* Reserved keyword links to add stylization [Looks like this is for general stylizations]
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
