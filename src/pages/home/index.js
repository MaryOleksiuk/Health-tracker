import React from 'react';
import { Base } from '../../views/base';
import { Home as HomeComponent } from '../../components/home';
import { useProfileInit } from '../../bus/user/hooks/useProfileInit';
import { useScoreInit } from '../../bus/tracker/hooks/useScoreInit';
import { useScore } from '../../bus/tracker/hooks/useScore';
import { useProfile } from '../../bus/user/hooks/useProfile';

export const Home = () => {
  useProfileInit();
  useScoreInit();

  const { score } = useScore();
  const { profile, logout } = useProfile();

  return (
    <Base isHome={true} logout={logout} profile={profile} score={score}>
      <HomeComponent />
    </Base>
  )
}
