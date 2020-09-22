import React, { useState } from "react";
import { Dialog, SubTitle } from "../../organisms";
import Btn from "../../components/Btn";

function Contact() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log("확인");
    setDialog(false);
  };
  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  };

  return (
    <>
      <SubTitle titleName={Contact} />
      <Btn></Btn>
      <Btn>확인</Btn>
      <Btn color="success" size="large" onClick={onClick}>
        모달!
      </Btn>
      <Btn color="reject" size="small">
        취소
      </Btn>
      <Btn color="success" icon="delete" outline />

      <Dialog
        title="제목"
        confirmText="삭제"
        cancelText="취소"
        onConfirm={onConfirm}
        onCancel={onCancel}
        visible={dialog}
      >
        내용
      </Dialog>
    </>
  );
}

export default Contact;
