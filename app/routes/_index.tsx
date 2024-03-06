import type { MetaFunction } from "@remix-run/node";
import { Button } from "@phoenix-ui/react-button";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <Button
        action="primary"
        onClick={() => {
          alert("i am a button");
        }}
      >
        I am a button
      </Button>
    </div>
  );
}
