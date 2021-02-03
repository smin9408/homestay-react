import React, { useContext } from 'react';
import FormHostInfo from 'components/FormHostInfo';
import FormHouseRules from 'components/FormHouseRules';
import FormHouseIntro from 'components/FormHouseIntro';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { HostContext } from 'HostContext';
import Button from '@material-ui/core/Button';

export default function HostForm() {
  const { step, setStep } = useContext(HostContext);
  function getSteps() {
    return [
      '호스트정보',
      '숙소정보',
      '홈스테이소개',
      '입력내용확인',
      '신청완료',
    ];
  }
  function showStep(step) {
    switch (step) {
      case 0:
        return <FormHostInfo />;
      case 1:
        return <FormHouseRules />;
      case 2:
        return <FormHouseIntro />;
      case 3:
        return <FormHouseIntro />;
      case 4:
        return <FormHouseIntro />;
    }
  }

  const steps = getSteps();

  const handleNext = () => {
    setStep(step => step + 1);
  };

  const handleBack = () => {
    setStep(step => step - 1);
  };

  const handleReset = () => {
    setStep(0);
  };
  console.log(step);
  return (
    <>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>{showStep(step)}</div>
      <div>
        {step === steps.length ? (
          <div>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div>
              <Button disabled={step === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {step === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}