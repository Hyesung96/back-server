import React from "react";
import { Row, Col, Button, Typography, Input } from "antd";
import styled from "styled-components";

const { TextArea } = Input;
const { Title } = Typography;

const MakeStyle = styled.div`
  & .context {
    margin-top: 30px;
    width: 100%;
    height: auto;
  }
`;

const MakeBoard = () => {
  return (
    <Row>
      <MakeStyle>
        <Col>
          <Title>내용을 작성해주세요</Title>
        </Col>
        <Col>
          <Input placeholder="제목을 입력해주세요" />
        </Col>
        <Col className="context">
          <TextArea placeholder="내용을 입력해주세요" />
        </Col>
        <Col>
          <Button>등록하기</Button>
        </Col>
      </MakeStyle>
    </Row>
  );
};
export default MakeBoard;
