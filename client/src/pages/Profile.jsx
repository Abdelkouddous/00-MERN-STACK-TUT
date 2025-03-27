import React, { useState } from "react";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import FormRow from "./components/FormRow";
import Wrapper from "../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Dr. Sarah Johnson",
    lastName: "Johnson",
    email: "sarah.johnson@medmail.com",
    location: "Boston, MA",
    avatar:
      "https://img.freepik.com/premium-photo/pharmacist-digital-avatar-generative-ai_934475-9321.jpg?w=2000",
    specialty: "Emergency Medicine",
    yearsExperience: "5",
    education: "Harvard Medical School",
    certifications: "ABEM, ACLS, PALS",
    bio: "Board-certified emergency physician with 5 years of experience in high-volume urban emergency departments. Special interest in trauma care and medical education.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Profile updated successfully");
  };

  return (
    <Wrapper>
      <Form method="post" className="form" onSubmit={handleSubmit}>
        <h4 className="form-title">Medical Professional Profile</h4>

        <div className="form-center">
          <div className="profile-header ">
            <div className="avatar-container border-r-16">
              <div className="avatar ">
                <img
                  src={userData.avatar}
                  className="h-32 w-32 border-spacing-4 "
                ></img>
              </div>
            </div>
            <div className="profile-title">
              <h5>{userData.name}</h5>
              <p>{userData.specialty}</p>
            </div>
          </div>

          <div className="form-row-2">
            <FormRow
              type="text"
              name="name"
              labelText="First Name"
              value={userData.name}
              onChange={handleChange}
            />

            <FormRow
              type="text"
              name="lastName"
              labelText="Last Name"
              value={userData.lastName}
              onChange={handleChange}
            />
          </div>

          <FormRow
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />

          <FormRow
            type="text"
            name="location"
            value={userData.location}
            onChange={handleChange}
          />

          <FormRow
            type="text"
            name="specialty"
            labelText="Medical Specialty"
            value={userData.specialty}
            onChange={handleChange}
          />

          <FormRow
            type="number"
            name="yearsExperience"
            labelText="Years of Experience"
            value={userData.yearsExperience}
            onChange={handleChange}
          />

          <FormRow
            type="text"
            name="education"
            labelText="Medical Education"
            value={userData.education}
            onChange={handleChange}
          />

          <FormRow
            type="text"
            name="certifications"
            labelText="Certifications"
            value={userData.certifications}
            onChange={handleChange}
          />

          <div className="form-row">
            <label htmlFor="bio" className="form-label">
              Professional Bio
            </label>
            <textarea
              name="bio"
              id="bio"
              className="form-textarea"
              value={userData.bio}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <div className="form-row">
            <label htmlFor="cv" className="form-label">
              Upload CV/Resume
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              className="form-input"
              accept=".pdf,.doc,.docx"
            />
            <small className="form-text">
              Accepted formats: PDF, DOC, DOCX (Max 5MB)
            </small>
          </div>

          <button type="submit" className="btn btn-block form-btn">
            Save Changes
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
