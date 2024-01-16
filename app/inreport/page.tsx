import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import InReport from '@/components/InReport';



import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InReport",
  // other metadata
};

const InReportPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="InReport"
        description="INReport is a centralized RegTech solution that automates regulatory report submission to Regulatory Bodies. It provides the facility to generate reports by integrating the interface with its source system. It can extract data from source systems messages and merge it with required business rules and reporting logic, thus transforming it into the desired file format."
      />
    <InReport/>

    </>
  )
}

export default InReportPage