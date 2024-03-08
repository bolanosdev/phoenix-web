import type { MetaFunction } from "@remix-run/node";
import { Button } from "@phoenix-ui/react-button";
import { Text } from "@phoenix-ui/react-text";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Text colors={{ text: { color: "text-red", weight: "600" } }}>
        I am a text
      </Text>
      <br />
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
