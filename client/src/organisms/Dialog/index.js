import React, { useState, useEffect } from "react";
import { Btn } from "../../components";
import * as S from "./style";

function Dialog({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onConfirm,
  onCancel,
}) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;

  return (
    <S.DarkBackground disappear={!visible}>
      <S.DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <S.ButtonGroup>
          <Btn onClick={onCancel}>{cancelText}</Btn>
          <Btn onClick={onConfirm}>{confirmText}</Btn>
        </S.ButtonGroup>
      </S.DialogBlock>
    </S.DarkBackground>
  );
}

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인",
};

export default Dialog;
