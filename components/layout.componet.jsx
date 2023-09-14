import Head from "next/head";
import { Navbar } from "./Navbar.component";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hosterr</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};
