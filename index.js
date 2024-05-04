const express = require("express"); //Express 모듈 불러오기

/** Express 서버 인스턴스 */
const app = express();
/** 서버 포트 */
const PORT = 3000;

// 템플릿 엔진을 ejs로 설정
app.set("view engine", "ejs");

// "/" URL로 get 요청 시 view/hello.ejs 파일을 HTML 형태로 렌더링해 응답으로 반환
app.get("/", (req, res) => {
    res.render("hello.ejs", { clientAddr: req.socket.address().address});
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`${PORT} 포트에서 서버 실행 중`);
});