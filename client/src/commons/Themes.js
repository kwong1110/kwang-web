const theme = {
  bodySize: {
    margin: "auto",
    padding: "0 6rem 0 6rem",
    maxWidth: "85rem",
  },
  fontStyle: {
    subTitle1: `
      font-size: 2.1rem;
      font-weight: 700;
      letter-spacing: 0.2rem;
    `,
    subTitle2: `
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: 0.05rem;
    `,
    subTitle3: `
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 0.05rem;
    `,
  },
  interval: {
    menu: "margin-left: 3rem",
    btn: "margin-left: 1rem",
    bottomLine: "padding: 0.3rem",
    atom: `
      padding: 0.5rem 0.5rem 0.5rem 0.5rem; 
      margin: 0 1rem 0.5rem 1rem
    `,
    box: `
      padding: 0.5rem;
      margin: 0.3rem 1.2rem 0.8rem 1.2rem;
    `,
    pageBottom: `
      margin-bottom: 4.5rem;
    `,
  },
  palette: {
    primary: "#ffa94d", // 주황
    success: "#69db7c", // 초록
    reject: "#ff6b6b", // 빨강
    black: "#212529",
    gray: "#d4d2cd",
    emphasis: ["#ffd8a8", "#ffa94d", "#fd7e14", "#e8590c"], // 주황
    decoGray: ["#dee2e6", "#adb5bd", "#868e96", "#495057"],
  },
  boxShadow:
    "box-shadow: 2px 2px rgba(0, 0, 0, 0.1), -7px 0 10px rgba(0, 0, 0, 0.1);",
};

export default theme;
