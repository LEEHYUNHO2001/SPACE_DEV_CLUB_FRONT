import styled from "@emotion/styled"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { Header } from "../../components/Common/Header"
import { MyCard } from "../../components/MyPage/MyCard"
import TagLoading from "../../components/Tags/TagLoading"
import { MEDIA_QUERY_END_POINT } from "../../constants"
import { CARD_DATA, TAGS } from "../../data"
import { ThemeProps } from "../../types/Theme"
import { ThemeContext } from "../_app"

const SearchTag = () => {
  const router = useRouter()
  const tagname = router.query.tagname
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Head>
        <title>#{tagname}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TagSection>
        <TagLoading />
        {/* <Header user={false} />
        <Main>
          <TagInfo>
            <TagImg>
              <Image
                src="/image/sample.jpeg"
                alt="thumbnail"
                width={192}
                height={192}
                className="thumbnail"
              />
            </TagImg>
            <TagName># {tagname}</TagName>
            <TagDesc theme={theme}>
              {TAGS.filter((e) => e.tagName == tagname)[0]?.tagDescription}
            </TagDesc>
            <TagCount theme={theme}>총 {CARD_DATA.length}개의 포스트</TagCount>
          </TagInfo>
          <CardContainer>
            {CARD_DATA.map((e, i) => {
              return (
                <MyCard
                  key={i}
                  mySearch={true}
                  imageUrl="/image/sample.jpeg"
                  postTitle={e.postTitle}
                  postDesc={e.postDesc}
                  tags={e.tags}
                  date={333}
                  comment={e.comment}
                  username="mmmm"
                  count={e.count}
                  day={e.date}
                />
              )
            })}
          </CardContainer>
        </Main> */}
      </TagSection>
    </>
  )
}

export default SearchTag

const TagSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const Main = styled.main`
  width: 768px;

  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
  }
`

const TagInfo = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 64px;
`
const TagImg = styled.div`
  border-radius: 50%;
  width: 192px;
  height: 192px;
  overflow: hidden;
  margin-bottom: 32px;
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 128px;
    height: 128px;
    margin: 32px 0 16px;
  }
`
const TagName = styled.h1`
  font-size: 48px;
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    font-size: 32px;
  }
`

const TagDesc = styled.p<ThemeProps>`
  margin: 16px 0;
  font-size: 18px;
  line-height: 1.5;
  line-break: anywhere;
  color: ${({ theme }) => theme.MAIN_FONT};
`

const TagCount = styled.p<ThemeProps>`
  color: ${({ theme }) => theme.POINT_FONT};
`

const CardContainer = styled.article``
