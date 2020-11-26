import React from 'react';
import { Base } from '../../views/base';
import { Question } from '../../components/question';
import { useProfileInit } from '../../bus/user/hooks/useProfileInit';
import { useScoreInit } from '../../bus/tracker/hooks/useScoreInit';
import { useScore } from '../../bus/tracker/hooks/useScore';
import { useProfile } from '../../bus/user/hooks/useProfile';
import { useRecord } from '../../bus/tracker/hooks/useRecord';
import { useRecordInit } from '../../bus/tracker/hooks/useRecordInit';
import { questionData } from './questionData';

export const Fruits = () => {
  useProfileInit();
  useScoreInit();
  useRecordInit(questionData.kind);

  const {
    profile,
    logout
  } = useProfile();

  const { record, updateRecord, createRecord, isLoading } = useRecord();
  const { score } = useScore();

  return (
    <Base logout={logout} profile={profile} hideWidget={false} isFullWidth={false} isFlex={true} score={score}>
      <Question
        isLoading={isLoading}
        data={questionData}
        update={updateRecord}
        create={createRecord}
        initialValue={record.fruits}
      />
    </Base>
  )
}
