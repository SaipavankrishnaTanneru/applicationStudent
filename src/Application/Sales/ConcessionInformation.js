import React, { useState } from 'react';
import { useFormik } from 'formik';
import './ConcessionInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConcessionInfoForm = ({ onNext }) => {
  const [concession, setConcession] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [couponDetails, setCouponDetails] = useState({ mobile: '', code: '' });

  const formik = useFormik({
    initialValues: {
      yearConcession1st: '',
      yearConcession2st: '',
      yearConcession3st: '',
      givenBy: '',
      description: '',
      authorizedby: '',
      reason: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.reason) errors.reason = 'Reason is required';
      return errors;
    },
    onSubmit: (values) => {
      const formData = { ...values, concession, couponDetails };
      console.log('Concession Info Submitted:', formData);
      if (onNext) onNext(formData);
    }
  });

  const handleCouponApply = () => setShowModal(!showModal);
  const handleCouponSubmit = () => {
    console.log('Applied Coupon:', couponDetails);
    setShowModal(false);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="concession-form container-fluid">
      {/* Coupon Button and Modal */}
      <div className="coupon-wrapper">
        <button
          type="button"
          onClick={handleCouponApply}
          className="btn btn-primary shadow-sm rounded-pill px-4"
        >
          Apply Coupon
        </button>

        {showModal && (
          <div className="coupon-popout">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="mb-0">Apply Coupon</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                value={couponDetails.mobile}
                onChange={(e) =>
                  setCouponDetails({ ...couponDetails, mobile: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Coupon Code</label>
              <input
                type="text"
                className="form-control"
                value={couponDetails.code}
                onChange={(e) =>
                  setCouponDetails({ ...couponDetails, code: e.target.value })
                }
              />
            </div>
            <div className="d-flex justify-content-end mt-3 gap-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCouponSubmit}
              >
                Apply
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              
            </div>
          </div>
        )}
      </div>

      {/* Form Grid */}
      <div className="row">
        <div className="col-md-4 mb-3">
          <label>1st Year Concession</label>
          <input
            type="text"
            name="yearConcession1st"
            className="form-control"
            value={formik.values.yearConcession1st}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label>2nd Year Concession</label>
          <input
            type="text"
            name="yearConcession2st"
            className="form-control"
            value={formik.values.yearConcession2st}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label>3rd Year Concession</label>
          <input
            type="text"
            name="yearConcession3st"
            className="form-control"
            value={formik.values.yearConcession3st}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label>Given By</label>
          <input
            type="text"
            name="givenBy"
            className="form-control"
            value={formik.values.givenBy}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label>Description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label>Authorized By</label>
          <input
            type="text"
            name="authorizedby"
            className="form-control"
            value={formik.values.authorizedby}
            onChange={formik.handleChange}
          />
        </div>

        <div className="col-md-4 mb-3">
          <label>Concession Written on Application</label>
          <div className="d-flex gap-2">
            {['Yes', 'No'].map((opt) => (
              <button
                key={opt}
                type="button"
                className={`btn ${concession === opt ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => setConcession(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <label>Reason</label>
          <select
            name="reason"
            className={`form-select ${
              formik.errors.reason && formik.touched.reason ? 'is-invalid' : ''
            }`}
            value={formik.values.reason}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Reason</option>
            <option value="Fee Waiver">MLA</option>
            <option value="Merit">Merit</option>
            <option value="Employee">Employee</option>
            <option value="Other">Other</option>
          </select>
          {formik.errors.reason && formik.touched.reason && (
            <div className="invalid-feedback">{formik.errors.reason}</div>
          )}
        </div>
      </div>

      {/* Submit */}
      <div className="d-flex justify-content-center mt-4">
        <button type="submit" className="btn btn-primary px-4">
          Next{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            fill="none"
            viewBox="0 0 25 24"
          >
            <path
              d="M5.5 11C4.94772 11 4.5 11.4477 4.5 12C4.5 12.5523 4.94772 13 5.5 13V11ZM21.2071 12.7071C21.5976 12.3166 21.5976 11.6834 21.2071 11.2929L14.8431 4.92893C14.4526 4.53841 13.8195 4.53841 13.4289 4.92893C13.0384 5.31946 13.0384 5.95262 13.4289 6.34315L19.0858 12L13.4289 17.6569C13.0384 18.0474 13.0384 18.6805 13.4289 19.0711C13.8195 19.4616 14.4526 19.4616 14.8431 19.0711L21.2071 12.7071ZM5.5 12V13H20.5V12V11H5.5V12Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ConcessionInfoForm;
