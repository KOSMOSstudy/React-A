import React, { useEffect } from "react";

const HistorySample = ({ history }) => {
  // 뒤로 가기
  const handleGoBack = () => {
    history.goBack();
  };
  // 홈으로 가기
  const handleGoHome = () => {
    history.push("/");
  };

  useEffect(() => {
    const unblock = history.block("Really Leave?");
    return () => unblock();
  }, [history]);

  return (
    <div>
      <button onClick={handleGoBack}>Back</button>
      <button onClick={handleGoHome}>Home</button>
    </div>
  );
};

export default HistorySample;
