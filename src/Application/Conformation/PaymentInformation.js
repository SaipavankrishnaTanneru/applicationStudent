import React from 'react';
import { Formik, Form, Field } from 'formik';
import './PaymentInformation.css';

const PaymentInformation = ({ onBack }) => {
  const initialValues = {
    joinYear: '',
    stream: '',
    program: '',
    examProgram: '',
    courseName: '',
    batchName: '',
    courseFee: '',
    section: '',
    startDate: '',
    endDate: ''
  };

  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
    alert("Payment Information Submitted!");
  };

  return (
    <div className="payment-info-container" style={{ maxHeight: '55vh', overflowX: 'hidden' }}>
      {/* Header Info Section */}
      <div className="payment-info-header d-flex justify-content-between px-4 py-3 mb-2 ">
        <div><strong>Application No</strong><br />MPC</div>
        <div><strong>PRO Name</strong><br />Direct Walkin</div>
        <div><strong>PRO Mobile No</strong><br />Inter with NPL</div>
        <div><strong>PRO Campus</strong><br />Residential</div>
      </div>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className="payment-info-form">
            <div className="row payment-row">
              <div className="col-md-4">
                <label className="payment-form-label">Join Year</label>
                <Field as="select" name="joinYear" className="payment-form-select form-select">
                  <option value="">Select Join Year</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </Field>
              </div>

              <div className="col-md-4">
                <label className="payment-form-label">Stream</label>
                <Field as="select" name="stream" className="payment-form-select form-select">
                  <option value="">Select Stream</option>
                  <option value="MPC">MPC</option>
                  <option value="BIPC">BIPC</option>
                </Field>
              </div>

              <div className="col-md-4">
                <label className="payment-form-label">Program</label>
                <Field as="select" name="program" className="payment-form-select form-select">
                  <option value="">Select Program Name</option>
                  <option value="Regular">Regular</option>
                  <option value="Integrated">Integrated</option>
                </Field>
              </div>

              <div className="col-md-4">
                <label className="payment-form-label">Exam Program</label>
                <Field as="select" name="examProgram" className="payment-form-select form-select">
                  <option value="">Select Exam Program Name</option>
                  <option value="JEE">JEE</option>
                  <option value="NEET">NEET</option>
                </Field>
              </div>

              <div className="col-md-4">
                <label className="payment-form-label">Course Name</label>
                <Field as="select" name="courseName" className="payment-form-select form-select">
                  <option value="">Select Course Name</option>
                  <option value="Course A">Course A</option>
                  <option value="Course B">Course B</option>
                </Field>
              </div>

              <div className="col-md-4">
                <label className="payment-form-label">Batch Name</label>
                <Field as="select" name="batchName" className="payment-form-select form-select">
                  <option value="">Select Batch Name</option>
                  <option value="Batch 1">Batch 1</option>
                  <option value="Batch 2">Batch 2</option>
                </Field>
              </div>

              <div className="col-md-4">
                <label className="payment-form-label">Course Batch Start Date</label>
                <Field type="date" name="startDate" className="payment-form-control form-control" />
              </div>

              <div className="col-md-4">
                <label className="payment-form-label">Course Batch End Date</label>
                <Field type="date" name="endDate" className="payment-form-control form-control" />
              </div>

              <div className="col-md-4">
                <label className="payment-form-label">Course Fee</label>
                <Field name="courseFee" className="payment-form-control form-control" placeholder="Course Fee" />
              </div>

              <div className="col-md-4">
                <label className="payment-form-label">Section</label>
                <Field as="select" name="section" className="payment-form-select form-select">
                  <option value="">Section Section Name</option>
                  <option value="A">Section A</option>
                  <option value="B">Section B</option>
                </Field>
              </div>
            </div>

            {/* Payment Table */}
            <div className="payment-table-responsive">
              <table className="payment-table table-borderless  border rounded text-center  align-middle">
                <thead className="table-light">
                  <tr>
                    <th>HEADS</th>
                    <th>FEE AMOUNT</th>
                    <th>RECEIPT NO</th>
                    <th>PAYMENT MODE</th>
                    <th>PAYMENT STATUS</th>
                    <th>PAYMENT DATE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Text</td>
                    <td>Text</td>
                    <td>Text</td>
                    <td>Text</td>
                    <td>Text</td>
                    <td>Text</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Submit Button */}
            <div className="payment-submit-wrapper">
              <button type="submit" className="payment-submit-btn">
                Submit <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M5.5 11C4.94772 11 4.5 11.4477 4.5 12C4.5 12.5523 4.94772 13 5.5 13V11ZM21.2071 12.7071C21.5976 12.3166 21.5976 11.6834 21.2071 11.2929L14.8431 4.92893C14.4526 4.53841 13.8195 4.53841 13.4289 4.92893C13.0384 5.31946 13.0384 5.95262 13.4289 6.34315L19.0858 12L13.4289 17.6569C13.0384 18.0474 13.0384 18.6805 13.4289 19.0711C13.8195 19.4616 14.4526 19.4616 14.8431 19.0711L21.2071 12.7071ZM5.5 12V13H20.5V12V11H5.5V12Z" fill="white"/>
</svg>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentInformation;
