import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import InArk from '@/components/InArk';



import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InArk",
  // other metadata
};

const InReportPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="InArk"
        description="INArk is a solution that offers a seamless customer onboarding experience improvement, digital onboarding, electronic signature capturing and document storing via INArk Mobile, INArk eKYC and INArk SDS as one solution."
      />
    <InArk/>

    </>
  )
}

export default InReportPage