import React, { useState } from "react";
import { Form, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import FormRow from "../../pages/components/FormRow";
import FormRowSelect from "../../pages/components/FormRowSelect";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [formData, setFormData] = useState({
    position: "",
    company: "",
    jobLocation: "",
    jobType: "full-time",
    status: "pending",
    specialization: "general",
  });

  // Medical job types
  const jobTypeOptions = [
    "full-time",
    "part-time",
    "locum",
    "contract",
    "remote",
    "hybrid",
  ];

  // Medical job status options
  const statusOptions = [
    "pending",
    "interview",
    "assessment",
    "reference check",
    "declined",
    "offered",
  ];

  // Medical specializations
  const specializationOptions = [
    "general",
    "cardiology",
    "dermatology",
    "emergency",
    "family medicine",
    "neurology",
    "obstetrics",
    "oncology",
    "pediatrics",
    "psychiatry",
    "radiology",
    "surgery",
    "other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success("Job application added successfully");
  };

  return (
    <Wrapper>
      <Form method="post" className="form" onSubmit={handleSubmit}>
        <h4 className="form-title">Add Medical Position</h4>
        <div className="form-center">
          {/* Position */}
          <FormRow
            type="text"
            name="position"
            labelText="Position Title"
            value={formData.position}
            onChange={handleChange}
            required
          />

          {/* Company/Hospital */}
          <FormRow
            type="text"
            name="company"
            labelText="Hospital/Clinic"
            value={formData.company}
            onChange={handleChange}
            required
          />

          {/* Job Location */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Location"
            value={formData.jobLocation}
            onChange={handleChange}
            required
          />

          {/* Medical Specialization */}
          <FormRowSelect
            name="specialization"
            labelText="Medical Specialization"
            value={formData.specialization}
            onChange={handleChange}
            options={specializationOptions}
          />

          {/* Job Status */}
          <FormRowSelect
            name="status"
            value={formData.status}
            onChange={handleChange}
            options={statusOptions}
          />

          {/* Job Type */}
          <FormRowSelect
            name="jobType"
            labelText="Position Type"
            value={formData.jobType}
            onChange={handleChange}
            options={jobTypeOptions}
          />

          {/* Additional Fields */}
          <FormRow
            type="date"
            name="applicationDate"
            labelText="Application Date"
            onChange={handleChange}
          />

          <FormRow
            type="textarea"
            name="notes"
            labelText="Additional Notes"
            onChange={handleChange}
            className="form-textarea"
          />

          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
