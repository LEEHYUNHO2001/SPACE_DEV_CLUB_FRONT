import { NextPage } from "next";
import styled from "@emotion/styled";
import Image from "next/image";
import { DetailHeader } from "../../components/Details/DetailHeader";
import { LeftHeader } from "../../components/Details/LeftHeader";
import { RightHeader } from "../../components/Details/RightHeader";
import Head from "next/head";

const DetailsIndexPage: NextPage = () => {
  return (
    <DetailContainer>
      <Head>
        <title>Space Dev Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftHeader />
      <DetailHeader />
      <RightHeader />
    </DetailContainer>
  );
};

export default DetailsIndexPage;

const DetailContainer = styled.section`
  display: flex;
`;
