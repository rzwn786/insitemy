import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
      src="/images/product/inark.png"
      width={250}
      height={250}
      alt="INArk"
    />
    ),
    title: "INArk",
    paragraph:
      "INArk is a solution that offers a seamless customer onboarding experience improvement, digital onboarding, electronic signature capturing and document storing via INArk Mobile, INArk eKYC and INArk SDS as one solution.",
  },
  {
    id: 1,
    icon: (
      <Image
      src="/images/product/inreport.png"
      width={250}
      height={250}
      alt="INReport"
    />
    ),
    title: "INReport",
    paragraph:
      "INReport is a centralized end-to-end RegTech solution of Regulatory Reporting that assists the business user in managing all the regulatory report preparation and automating report submission in one place to Regulatory Bodies such as BNM, MDIC, RMCD and IRBM.",
  },
  {
    id: 1,
    icon: (
      <Image
      src="/images/product/incheqs.png"
      width={250}
      height={250}
      alt="INCHEQS"
    />
    ),
    title: "INCHEQS",
    paragraph:
      "INCHEQS is an Image-Ready Cheque Clearing System that takes a full average of Cheque Truncation capabilities. INCHEQS is entirely web-based and can be deployed over multiple branches, allowing for cost-effectiveness, ease of deployment, training and flexible workflow. This solution covers the Cheque Truncation System end-to-end process.",
  },
  {
    id: 1,
    icon: (
      <Image
      src="/images/product/ingateway.png"
      width={250}
      height={250}
      alt="INGateway"
    />
    ),
    title: "INGateway",
    paragraph:
      "INGateway is a Middleware Payment Gateway solution. An Extract, Transform and Load tool (ETL) used in:",
  },
];
export default featuresData;
