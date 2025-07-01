import React, { useState } from "react";
import '../Application/mainscreen.css';
import SalesSideNav from "../Application/Sales/SalesNav";
import ConfirmationNav from "../Application/Conformation/ConformationNav";
import StudentInformation from "../Application/Conformation/StudentInformation";
import PaymentInformation from "../Application/Conformation/PaymentInformation";

const MainScreen = () => {
  const [activeTab, setActiveTab] = useState('sale');
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="w-100 h-100 ms-1">
      {/* Header */}
      <div className="mb-3">
        <h1 className="fw-bold text-dark mb-0" style={{ fontSize: '2.25rem', letterSpacing: '-0.792px' }}>
          Application Status
        </h1>
      </div>

      {/* Toggle Tabs */}
      <div className="status-toggle d-inline-flex mb-4">
        <button
          className={`tab-btn ${activeTab === 'sale' ? 'active-tab' : 'inactive-tab'}`}
          onClick={() => setActiveTab('sale')}
        >
          Sale
        </button>
        <button
          className={`tab-btn ${activeTab === 'conformation' ? 'active-tab' : 'inactive-tab'}`}
          onClick={() => setActiveTab('conformation')}
        >
          Conformation
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content w-100">
        {activeTab === 'sale' && <SalesSideNav />}

        {activeTab === 'conformation' && (
          <div className="w-100">
            <ConfirmationNav currentStep={currentStep} setCurrentStep={setCurrentStep} />

            <div className="container mt-4">
              {currentStep === 1 && (
                <StudentInformation onNext={() => setCurrentStep(2)} />
              )}
              {currentStep === 2 && (
                <PaymentInformation onBack={() => setCurrentStep(1)} />
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainScreen;
