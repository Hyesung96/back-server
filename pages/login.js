import React from "react";
import { Row, Col, Button, Typography, Input } from "antd";
import styled from "styled-components";
import Router from "next/router";

const LoginStyle = styled.div``;

const { Title } = Typography;

const Login = () => {
  return (
    <Row>
      <LoginStyle>
        <Col>
          <Title level={4}>로그인</Title>
        </Col>
        <Col>
          <Input placeholder="아이디" />
        </Col>
        <Col>
          <Input placeholder="비밀번호" />
        </Col>
        <Col>
          <Button onClick={() => Router.push("/")}>로그인</Button>
        </Col>
        <Col>
          <Button onClick={() => Router.push("/join")}>회원가입 하기</Button>
        </Col>
      </LoginStyle>
    </Row>
  );
};
export default Login;
