import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ConformationNav.css';

const ConfirmationNav = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="confirmation-nav-container">
      <div className="confirmation-step-nav d-flex">
        <div
          className={`confirmation-step-tab flex-fill text-center ${
            currentStep === 1 ? 'active' : ''
          }`}
          onClick={() => setCurrentStep(1)}
        >
          <span className="confirmation-step-number">1</span>
          <span className="confirmation-step-label">Student Information</span>
        </div>
        <div
          className={`confirmation-step-tab flex-fill text-center ${
            currentStep === 2 ? 'active' : ''
          }`}
          onClick={() => setCurrentStep(2)}
        >
          <span className="confirmation-step-number">2</span>
          <span className="confirmation-step-label">Payment Information</span>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationNav;
