import React from "react";
import { FaRocket, FaClipboardCheck, FaUserTie } from "react-icons/fa"; // Importing icons
import "./WorkingProcess.css";

const WorkingProcess = () => {
  return (
    <section className="working-process-container">
      {/* Left Section (Boxes) */}
      <div className="working-process-left">
        <div className="process-box" data-aos="zoom-out">
          <div className="icon-wrapper">
            <FaRocket className="process-icon" />
          </div>
          <div className="process-box-text">
          <h3>Fastest Working Process</h3>
          <p>
          Our streamlined process ensures timely updates and quick approvals.
          </p>
          </div>
          <img src="/images/logo.png" alt="" className="pro-icon" />

        </div>
        <div className="process-box" data-aos="zoom-out">
          <div className="icon-wrapper">
            <FaClipboardCheck className="process-icon" />
          </div>

          <div className="process-box-text">
          <h3>Expertise in Visa Processing</h3>
          <p>
          We have years of success in handling visa applications worldwide.
          </p>
          </div>
          <img src="/images/logo.png" alt="" className="pro-icon" />
        </div>
        <div className="process-box" data-aos="zoom-out">
          <div className="icon-wrapper">
            <FaUserTie className="process-icon" />
          </div>
          <div className="process-box-text">
          <h3>Expert Support Personnel</h3>
          <p>
          Our team offers personalized guidance for all your visa needs.
          </p>
          </div>
          <img src="/images/logo.png" alt="" className="pro-icon" />

        </div>
      </div>

      {/* Right Section (Short Write-Up and Image) */}
      <div className="working-process-right">
      <div className="content-box" data-aos="flip-right">
        <p className="abbout-title" >// VISA CATEGORY //</p>
        <h2 className="abbout-heading">
        Start To End Immigration Visa Services
        </h2>
        <p className='desc'>We provide meticulous support in preparing and organizing the required documents, ensuring a smooth and error-free submission process.We provide meticulous support in preparing</p>
      </div>
        <img
          data-aos="zoom-in"
          src="/images/h3.png"
          alt="Expert Support"
          className="working-process-image"
        />
      </div>
    </section>
  );
};

export default WorkingProcess;
