import React from "react";
import { FiAward } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiPenTool } from "react-icons/fi";

const cardDetails = [
  {
    title: "Quality",
    icon: (
      <FiAward className="w-5 h-5 text-reef-200" />
    ),
    description: "We take pride in delivering high-quality work that meets our clients' expectations and exceeds industry standards.",
  },
  {
    title: "Customer service",
    icon: (
      <FiBriefcase className="w-5 h-5 text-reef-200" />
    ),
    description: "We are committed to providing excellent customer service and support throughout the project lifecycle.",
  },
  {
    title: "Flexibility",
    icon: (
      <FiPenTool className="w-5 h-5 text-reef-200" />
    ),
    description: "We offer customized solutions that meet our clients' unique needs, and we are willing to work with you to achieve your goals.",
  },
];

export default cardDetails;
