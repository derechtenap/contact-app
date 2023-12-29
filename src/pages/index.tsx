import type { NextPage } from "next";
import Head from "next/head";
import { useMantineColorScheme, Button, Group } from "@mantine/core";

const IndexPage: NextPage = () => {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Group>
        <Button onClick={() => setColorScheme("light")}>Light</Button>
        <Button onClick={() => setColorScheme("dark")}>Dark</Button>
        <Button onClick={() => setColorScheme("auto")}>Auto</Button>
        <Button onClick={clearColorScheme}>Clear</Button>
      </Group>
    </>
  );
};

export default IndexPage;
