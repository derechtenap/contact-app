import Head from "next/head";
import pkg from "../../../package.json";
import { AppShell } from "@mantine/core";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  const APP_NAME = pkg.name;

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          /*
           * The "xs" breakpoint is necessary for Mantine's responsiveness,
           * but in production, the user will not encounter the mobile view
           * since the screen resolution is always higher.
           */
          breakpoint: "xs",
        }}
      >
        <AppShell.Header>Header</AppShell.Header>
        <AppShell.Navbar>Navbar</AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
};

export default RootLayout;
