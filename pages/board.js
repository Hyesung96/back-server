import React from "react";
import { Row, Col, Button } from "antd";
import styled from "styled-components";
import Router from "next/router";

const BoradStyle = styled.div`
  & .board {
    margin-top: 30px;
    border: 1px solid;
    height: auto;
  }
`;

const Board = () => {
  return (
    <Row>
      <BoradStyle>
        <Col>개시판 입니다</Col>
        <Col>
          <Button onClick={() => Router.push("/")}>홈으로 가기</Button>
        </Col>
        <Col>
          <Button onClick={() => Router.push("/makeboard")}>
            글 작성하러 가기
          </Button>
        </Col>
        <Col className="board"></Col>
      </BoradStyle>
    </Row>
  );
};
export default Board;
