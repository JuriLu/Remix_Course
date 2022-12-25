import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <h1>Welcome to Remix</h1>
      <Link to="/demo">Go to demo page</Link>
    </>
  );
}
