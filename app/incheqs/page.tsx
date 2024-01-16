import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import InCheqs from '@/components/InCheqs';



import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InCheqs",
  // other metadata
};

const InCheqsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="InCHEQS"
        description="INCHEQS is an Image-Ready Cheque Clearing System that takes a full average of Cheque Truncation capabilities."
      />
    <InCheqs/>

    </>
  )
}

export default InCheqsPage