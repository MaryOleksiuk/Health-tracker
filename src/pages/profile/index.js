import React from 'react';
import { Base } from '../../views/base';
import { Profile as ProfileComponent } from '../../components/profile';
import { useProfileInit } from '../../bus/user/hooks/useProfileInit';
import { useProfile } from '../../bus/user/hooks/useProfile';

export const Profile = () => {
  useProfileInit();

  const { profile } = useProfile();

  return (
    <Base profile={profile} hideWidget={true} isFullWidth={true}>
      <ProfileComponent profile={profile} />
    </Base>
  )
}
