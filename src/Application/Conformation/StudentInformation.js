import React from 'react';
import { Formik, Form, Field } from 'formik';
import './StudentInformation.css';

const StudentInformation = ({ onNext }) => {
    const initialValues = {
        admissionNo: '',
        studentName: '',
        surname: '',
        parentName: '',
        gender: 'Male',
        applicationFee: '',
        confirmationAmount: '',
        firstYearConcession: '',
        secondYearConcession: '',
        thirdYearConcession: '',
        reasonForConcession: 'General Concession',
    };

    const handleSubmit = (values) => {
        console.log('Form Data:', values);
        onNext();
    };

    return (
        <div className="student-info-container " style={{backgroundColor:'rgba(255, 255, 255, 1)', maxHeight: '55vh', overflowX: 'hidden' }}>
            <div className="student-info-header">
                <div className="student-text-header">
                    <div className="student-info-item">
                        <div className="student-label">Application No</div>
                        <div className="student-value">MPC</div>
                    </div>
                    <div className="student-info-item">
                        <div className="student-label">PRD Name</div>
                        <div className="student-value">Direct Walkin</div>
                    </div>
                    <div className="student-info-item">
                        <div className="student-label">PRD Mobile No</div>
                        <div className="student-value">Inter with NPL</div>
                    </div>
                    <div className="student-info-item">
                        <div className="student-label">PRD Campus</div>
                        <div className="student-value">Residential</div>
                    </div>
                </div>
            </div>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, setFieldValue }) => (
                    <Form className="student-form-container ">
                        <div className="student-form-grid">
                            <div className="student-form-group">
                                <label className="student-form-label">Admission No.</label>
                                <Field name="admissionNo" className="student-form-control" disabled />
                            </div>
                            <div className="student-form-group">
                                <label className="student-form-label">Student Name</label>
                                <Field name="studentName" className="student-form-control" />
                            </div>
                            <div className="student-form-group">
                                <label className="student-form-label">Surname</label>
                                <Field name="surname" className="student-form-control" />
                            </div>
                            <div className="student-form-group">
                                <label className="student-form-label">Parent Name</label>
                                <Field name="parentName" className="student-form-control" />
                            </div>
                            <div className="student-form-group">
                                <label className="student-form-label">Gender</label>
                                <div className="student-gender-buttons">
                                    <button
                                        type="button"
                                        className={`student-gender-btn ${values.gender === 'Male' ? 'active' : ''}`}
                                        onClick={() => setFieldValue('gender', 'Male')}
                                    >
                                        Male
                                    </button>
                                    <button
                                        type="button"
                                        className={`student-gender-btn ${values.gender === 'Female' ? 'active' : ''}`}
                                        onClick={() => setFieldValue('gender', 'Female')}
                                    >
                                        Female
                                    </button>
                                </div>
                            </div>
                            <div className="student-form-group">
                                <label className="student-form-label">Application Fee</label>
                                <Field name="applicationFee" className="student-form-control" />
                            </div>
                            <div className="student-form-group">
                                <label className="student-form-label">Confirmation Amount</label>
                                <Field name="confirmationAmount" className="student-form-control" />
                            </div>
                            <div className="student-form-group">
                                <label className="student-form-label">1st Year Concession</label>
                                <Field name="firstYearConcession" className="student-form-control" />
                            </div>
                            <div className="student-form-group">
                                <label className="student-form-label">2nd Year Concession</label>
                                <Field name="secondYearConcession" className="student-form-control" />
                            </div>
                            <div className="student-form-group">
                                <label className="student-form-label">3rd Year Concession</label>
                                <Field name="thirdYearConcession" className="student-form-control" />
                            </div>
                            <div className="student-form-group">
                                <label className="student-form-label">Reason For Concession</label>
                                <Field name="reasonForConcession" as="select" className="student-form-select">
                                    <option>General Concession</option>
                                    <option>Merit Based</option>
                                    <option>Staff Child</option>
                                </Field>
                            </div>
                        </div>

                        <div className="student-form-footer">
                            <button type="submit" className="student-next-btn">
                                Next <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
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

export default StudentInformation;
