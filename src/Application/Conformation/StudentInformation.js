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
        <div className="student-info-container mt-1 mb-3">
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
                    <Form className="student-form-container">
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
                                Next <span>&rarr;</span>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default StudentInformation;
