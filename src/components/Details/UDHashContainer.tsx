import styled from "@emotion/styled";
import { PALLETS } from "../../constants/index";

export const UDHashContainer = () => {
  return (
    <Container>
      <h2 className="sr-only">해시태그 및 글 수정, 삭제</h2>
      <UDContainer>
        <a href="#" className="velog-nickname">
          velog닉네임
        </a>
        <div>
          <a href="#">통계</a>
          <a href="#">수정</a>
          <a href="#">삭제</a>
        </div>
      </UDContainer>
      <ul>
        <li>
          <a href="#">태그입니다1</a>
        </li>
        <li>
          <a href="#">태그입니다2</a>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.article`
  ul {
    display: flex;
    margin: 16px 0;
  }
  ul > li {
    background-color: #f1f3f5;
    border-radius: 25px;
    padding: 5px 15px;
  }
  ul > li:not(:last-child) {
    margin-right: 15px;
  }
  ul > li:hover {
    background-color: #f8f9fa;
  }
  ul > li > a {
    color: ${PALLETS.MAIN};
  }
`;
const UDContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .velog-nickname {
    font-weight: 700;
  }
  .velog-nickname:hover {
    text-decoration: underline;
  }
  div > a {
    color: #868e96;
    font-weight: 500;
  }
  div > a:not(:last-child) {
    margin-right: 8px;
  }
  div > a:hover {
    color: #000;
  }
`;
