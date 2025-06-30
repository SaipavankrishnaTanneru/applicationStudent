import React, { useState } from "react";
import AddressInfoForm from "./AddressInformati";
import ConcessionInfoForm from "./ConcessionInformation";
import GeneralInfoForm from "./GeneralInformation";
import PaymentInfoForm from "./PaymentInformation";
import '../Sales/SalesNav.css';

const SalesNav = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, label: 'General Information' },
    { id: 2, label: 'Concession Information' },
    { id: 3, label: 'Address Information' },
    { id: 4, label: 'Payment Information' }
  ];

  const goToNextStep = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length));
  };

  const goToPrevStep = () => {
    setActiveStep((prev) => Math.max(prev - 1, 1));
  };

  const renderForm = () => {
    switch (activeStep) {
      case 1:
        return <GeneralInfoForm onNext={goToNextStep} />;
      case 2:
        return <ConcessionInfoForm onNext={goToNextStep} onBack={goToPrevStep} />;
      case 3:
        return <AddressInfoForm onNext={goToNextStep} onBack={goToPrevStep} />;
      case 4:
        return <PaymentInfoForm onBack={goToPrevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="sales-nav-container">
      {/* Step Navigation Bar */}
      <div className="step-nav d-flex" style={{backgroundColor:'rgba(240, 240, 240, 1)'}}>
        {steps.map((step) => (
          <div
            key={step.id}
            className={`step-item d-flex align-items-center ${activeStep === step.id ? 'active' : ''}`}
            onClick={() => setActiveStep(step.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="step-circle me-2">{step.id}</div>
            <span>{step.label}</span>
          </div>
        ))}
      </div>

      {/* Form Display Area */}
      <div className="form-container mt-4">
        {renderForm()}
      </div>
    </div>
  );
};

export default SalesNav;
