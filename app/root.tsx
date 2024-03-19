import { json } from "@remix-run/node";
import { useEffect } from "react";
import {
  Form,
  Link,
  Links,
  NavLink,
  Meta,
  Scripts,
  ScrollRestoration,
  LiveReload,
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";

import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import appStylesHref from "./app.css";
import baselineStylesHref from "@phoenix-ui/baseline/compiled/baseline.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: baselineStylesHref },
  { rel: "stylesheet", href: appStylesHref },
];

import { getContacts, createEmptyContact } from "./data";

export const action = async () => {
  const contact = await createEmptyContact();
  return json({ contact });
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return json({ contacts, q });
};

export default function App() {
  const { contacts, q } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const submit = useSubmit();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>
            <Link to="/">Remix Contacts</Link>
          </h1>
          <div>
            <Form
              id="search-form"
              role="search"
              onChange={(event) => submit(event.currentTarget)}
            >
              <input
                id="q"
                defaultValue={q || ""}
                className={searching ? "loading" : ""}
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={!searching} />
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {contacts.length ? (
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isActive ? "active" : isPending ? "pending" : ""
                      }
                      to={`contacts/${contact.id}`}
                    >
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {contact.favorite ? <span>★</span> : null}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
          </nav>
        </div>
        <div
          id="detail"
          className={
            navigation.state === "loading" && !searching ? "loading" : ""
          }
        >
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
