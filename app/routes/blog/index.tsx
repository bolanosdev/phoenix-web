import { Section } from "@phoenix-ui/section";
import { Heading } from "@phoenix-ui/text";

export default function Blog() {
  return (
    <Section>
      <Heading tag="h1">Blog</Heading>
      <Section
        flex={{ direction: "flex-col" }}
        overrides={{ medium: { flex: { direction: "flex-row" } } }}
      >
        <Section>Section 1</Section>
        <Section>Section 2</Section>
        <Section>Section 3</Section>
      </Section>
    </Section>
  );
}
