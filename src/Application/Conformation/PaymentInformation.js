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
    <div className="payment-info-container">
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
                Submit &rarr;
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentInformation;
