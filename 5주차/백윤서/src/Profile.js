import React from "react";

const data = {
  bgyoons: {
    name: "백윤서",
    description: "리액트를 좋아하는 개발자",
  },
  ran: {
    name: "기란",
    description: "지금 내 옆에서 공부하는 사람",
  },
};

// URL 파라미터를 사용할 때는 라우트로 사용되는 컴포넌트에서 받아 오는
// match라는 객체 안의 params 값을 참조한다.
// match 객체 안에는 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보가 들어있다.
const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];

  if (!profile) return <div>We couldn’t find any users.</div>;

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
