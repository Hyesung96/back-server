import React from "react";
import { Row, Col, Button, Typography, Input } from "antd";
import styled from "styled-components";
import Router from "next/router";

const JoinStyle = styled.div``;

const { Title } = Typography;

const Join = () => {
  return (
    <Row>
      <JoinStyle>
        <Col>
          <Title level={4}>회원가입</Title>
        </Col>
        <Col>
          <Input placeholder="이름" />
        </Col>
        <Col>
          <Input placeholder="아이디" />
        </Col>
        <Col>
          <Input placeholder="비밀번호" />
        </Col>
        <Col>
          <Button onClick={() => Router.push("/join")}>회원가입</Button>
        </Col>
        <Col>
          <Button onClick={() => Router.push("/")}>홈으로 가기</Button>
        </Col>
      </JoinStyle>
    </Row>
  );
};
export default Join;
