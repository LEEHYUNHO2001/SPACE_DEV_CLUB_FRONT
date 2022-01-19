import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { Filter } from "../../../components/Home/Filter";
import { Header } from "../../../components/Common/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Space Dev Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Header username={"deli-ght"} user={false} />

        <Filter route={"read"}></Filter>
      </Main>
    </div>
  );
};

const Main = styled.main`
  padding: 0 16px 16px;
`;

export default Home;
