import type { MetaFunction } from "@remix-run/node";
import { Section } from "@phoenix-ui/section";
import { Button } from "@phoenix-ui/button";
import { Text, Link, Heading } from "@phoenix-ui/text";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Section>
      <Heading tag="h1">I am a header</Heading>
      <Text colors={{ text: { color: "text-red", weight: "600" } }}>
        I am a text
      </Text>
      <br />
      <Link href="/contacts/kent%20c.-dodds">I am a link</Link>
      <br />
      <Link
        onClick={() => {
          alert("i am a link");
        }}
      >
        I am a link with a click event
      </Link>
      <br />
      <Button
        action="primary"
        className="foo"
        height={{ value: "14" }}
        colors={{ background: { color: "bg-red" } }}
        dark={{ colors: { background: { color: "bg-lime" } } }}
        overrides={{
          medium: {
            colors: { background: { color: "bg-amber" } },
            dark: {
              colors: { background: { color: "bg-pink" } },
            },
          },
        }}
        margin={{ top: "mt-8" }}
        onClick={() => {
          alert("i am a button");
        }}
      >
        I am a button
      </Button>
    </Section>
  );
}
