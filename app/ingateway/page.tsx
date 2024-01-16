import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import InGateway from '@/components/InGateway';



import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InCheqs",
  // other metadata
};

const InCheqsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="InGateway"
        description="INGateway is a web-based Middleware Payment Gateway solution that is capable of supporting the Straight Through Processing (STP) of all types of Payment transactions."
      />
    <InGateway/>

    </>
  )
}

export default InCheqsPage