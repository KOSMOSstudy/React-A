import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
    // 이 설정을 하면 문자열 맨 앞의 ?를 생략한다.
  });
  const showDetail = query.detail === "true";

  return (
    <div>
      <h1>About</h1>
      <p>React Router Example</p>
      {showDetail && <p>detail value true!</p>}
    </div>
  );
};

export default About;
