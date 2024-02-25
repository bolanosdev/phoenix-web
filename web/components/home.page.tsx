"use client";
import { Button } from "@phoenix-ui/react-button";

export const HomePage = () => {
  return (
    <>
      <Button
        onClick={() => {
          alert("hello world");
        }}
      >
        Hello World
      </Button>
    </>
  );
};
