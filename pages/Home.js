import React from "react";
import { Row, Col, Button } from "antd";
import styled from "styled-components";
import Router from "next/router";

const HomeStyle = styled.div``;

const Home = () => {
  return (
    <Row>
      <HomeStyle>
        <Col>홈 입니다</Col>
        <Col>
          <Button onClick={() => Router.push("/login")}>로그인</Button>
        </Col>
        <Col>
          <Button onClick={() => Router.push("/board")}>개시판 가기</Button>
        </Col>
      </HomeStyle>
    </Row>
  );
};
export default Home;
