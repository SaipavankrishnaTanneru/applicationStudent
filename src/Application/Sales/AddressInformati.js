import React from 'react';
import { useFormik } from 'formik';
import './AddressInfo.css';

const AddressInfoForm = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      doorNo: '',
      street: '',
      landmark: '',
      area: '',
      pincode: '',
      district: '',
      mandal: '',
      city: '',
    },
    validate: (values) => {
      const errors = {};
      ['doorNo', 'street', 'area', 'pincode', 'district', 'mandal', 'city'].forEach((field) => {
        if (!values[field]) {
          errors[field] = `${field.replace(/([A-Z])/g, ' $1')} is required`;
        }
      });
      return errors;
    },
    onSubmit: (values) => {
      console.log('Address Submitted:', values);
      if (onNext) onNext(values);
    },
  });

  const renderInput = (name, label) => (
    <div className="col-md-4 mb-3">
      <label className="form-label">{label}</label>
      <input
        type="text"
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`form-control ${formik.touched[name] && formik.errors[name] ? 'is-invalid' : ''}`}
        placeholder={`Enter ${label}`}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="invalid-feedback">{formik.errors[name]}</div>
      )}
    </div>
  );

  const renderSelect = (name, label, options = []) => (
    <div className="col-md-4 mb-3">
      <label className="form-label">{label}</label>
      <select
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`form-select ${formik.touched[name] && formik.errors[name] ? 'is-invalid' : ''}`}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      {formik.touched[name] && formik.errors[name] && (
        <div className="invalid-feedback">{formik.errors[name]}</div>
      )}
    </div>
  );

  return (
    <form onSubmit={formik.handleSubmit} className="address-form px-4 py-3">
      <div className="row">
        {renderInput('doorNo', 'Door No')}
        {renderInput('street', 'Street')}
        {renderInput('landmark', 'Landmark')}
        {renderInput('area', 'Area')}
        {renderInput('pincode', 'Pincode')}
        {renderInput('district', 'District')}
        {renderSelect('mandal', 'Mandal', ['Mandal 1', 'Mandal 2', 'Mandal 3'])}
        {renderSelect('city', 'City', ['City A', 'City B', 'City C'])}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button type="submit" className="btn btn-primary px-4">
          Next <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M5.5 11C4.94772 11 4.5 11.4477 4.5 12C4.5 12.5523 4.94772 13 5.5 13V11ZM21.2071 12.7071C21.5976 12.3166 21.5976 11.6834 21.2071 11.2929L14.8431 4.92893C14.4526 4.53841 13.8195 4.53841 13.4289 4.92893C13.0384 5.31946 13.0384 5.95262 13.4289 6.34315L19.0858 12L13.4289 17.6569C13.0384 18.0474 13.0384 18.6805 13.4289 19.0711C13.8195 19.4616 14.4526 19.4616 14.8431 19.0711L21.2071 12.7071ZM5.5 12V13H20.5V12V11H5.5V12Z" fill="white"/>
</svg>
        </button>
      </div>
    </form>
  );
};

export default AddressInfoForm;
