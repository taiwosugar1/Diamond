import React from "react";
import { FaRocket, FaClipboardCheck, FaUserTie } from "react-icons/fa"; // Importing icons
import "./WorkingProcess.css";

const WorkingProcess = () => {
  return (
    <section className="working-process-container">
      {/* Left Section (Boxes) */}
      <div className="working-process-left">
        <div className="process-box">
          <div className="icon-wrapper">
            <FaRocket className="process-icon" />
          </div>
          <div className="process-box-text">
          <h3>Fastest Working Process</h3>
          <p>
            Our streamlined visa application process ensures that you receive
            timely updates and approvals, minimizing unnecessary delays.
          </p>
          </div>
          <img src="/images/logo.png" alt="" className="pro-icon" />

        </div>
        <div className="process-box">
          <div className="icon-wrapper">
            <FaClipboardCheck className="process-icon" />
          </div>

          <div className="process-box-text">
          <h3>Expertise in Visa Processing</h3>
          <p>
            With years of experience, we have a proven track record of
            successful visa applications for various countries around the world.
          </p>
          </div>
          <img src="/images/logo.png" alt="" className="pro-icon" />
        </div>
        <div className="process-box">
          <div className="icon-wrapper">
            <FaUserTie className="process-icon" />
          </div>
          <div className="process-box-text">
          <h3>Expert Support Personnel</h3>
          <p>
            Our dedicated team of professionals is always ready to assist you
            with personalized guidance for all your visa-related needs.
          </p>
          </div>
          <img src="/images/logo.png" alt="" className="pro-icon" />

        </div>
      </div>

      {/* Right Section (Short Write-Up and Image) */}
      <div className="working-process-right">
      <div className="content-box">
        <p className="abbout-title">// VISA CATEGORY //</p>
        <h2 className="abbout-heading">
        Start To End Immigration Visa Services
        </h2>
        <p className='desc'>We provide meticulous support in preparing and organizing the required documents, ensuring a smooth and error-free submission process.We provide meticulous support in preparing</p>
      </div>
        <img
          src="/images/h3.png"
          alt="Expert Support"
          className="working-process-image"
        />
      </div>
    </section>
  );
};

export default WorkingProcess;
