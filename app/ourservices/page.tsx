import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import OurService from '@/components/OurService';



import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OurService",
  // other metadata
};

const OurServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="OurService"
        description="InsiteMY offers a variety of services to address your challenges. Learn how we can help."
      />
    <OurService/>

    </>
  )
}

export default OurServicePage