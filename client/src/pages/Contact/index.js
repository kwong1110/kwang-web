import React from "react";
import { SubTitle } from "../../organisms";
import Btn from "../../components/Btn";

function Contact() {
  return (
    <>
      <SubTitle titleName={Contact} />
      <Btn></Btn>
      <Btn>확인</Btn>
      <Btn color="success" size="large">
        확인
      </Btn>
      <Btn color="reject" size="small">
        취소
      </Btn>
      <Btn color="reject" icon="delete" outline />
    </>
  );
}

export default Contact;
