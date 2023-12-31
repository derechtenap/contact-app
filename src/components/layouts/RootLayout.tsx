import Head from "next/head";
import pkg from "../../../package.json";
import { AppShell } from "@mantine/core";
import RootNavbar from "../appShell/Navbar";
import RootHeader from "../appShell/Header";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  const APP_NAME = pkg.productName as string;

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <AppShell
        header={{
          height: {
            base: 44,
          },
        }}
        navbar={{
          width: {
            base: 250,
            md: 275,
            lg: 300,
            xl: 325,
          },
          /*
           * The "xs" breakpoint is necessary for Mantine's responsiveness,
           * but in production, the user will not encounter the mobile view
           * since the screen resolution is always higher.
           */
          breakpoint: "xs",
        }}
      >
        <AppShell.Header>
          <RootHeader />
        </AppShell.Header>
        <AppShell.Navbar>
          <RootNavbar />
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
};

export default RootLayout;
