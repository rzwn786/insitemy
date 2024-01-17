import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const InReport = () => {
  return (
    <section
      id="inreport"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/Website-Reference-30-qfjwzuj3q1jvj2lbhek032vczeosll5xp7n884nfs0.png"
                alt="about image"
                fill
                className="drop-shadow-three"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  INReport e-Invoice
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  INReport e-Invoice is a real-time solution that is tailored
                  for the IT backend environment that requires centralization on
                  LHDN e-invoice management for TaxPayer Proof of Income & Proof
                  of Expenses. A business entity with Multiple
                  Sources/ERP/Accounting Systems. Holdings company would like to
                  have a centralized e-invoicing system across all subsidiaries.
                  Foreign brand ERP that does not have e-invoice solutions. A
                  legacy system that needs to comply with LHDN e-invoice.
                  Looking for an extensive solution that would cover Malaysia’s
                  upcoming GST requirement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-4 mt-5 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto mt-10 max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <h4 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
                What INReport e-Invoice do?
              </h4>
              <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                INReport e-Invoice complies with real-time transactional
                requirements on e-invoicing for B2B, B2C & B2G regulatory
                requirements. Requirement that the Inland Revenue Board of
                Malaysia (IRBM), also known as the Lembaga Hasil Dalam Negeri
                Malaysia (LHDN), be presented to administer business
                transactions and to improve the management of Malaysia’s tax
                administration.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 mt-5 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto mt-10 max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <h4 className="mb-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
                INReport e-Invoice Workflow via API
              </h4>
              <img
                src="/images/about/Figure-1-768x432.png"
                alt="Descriptive Alt Text"
                className="mx-auto h-auto max-w-full"
              />
            </div>
          </div>
        </div>

        <div className="-mx-4 mt-5 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto mt-10 max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <h4 className="mb-10 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
                INReport e-Invoice Features
              </h4>

              <div className="text-left">
                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  1. Compliance
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  We comply with the e-Invoice model via API for the latest tax
                  regulations and tax reporting requirements by LHDN. We are
                  dynamic & support future incremental requirements, including
                  the extension to GST.
                </p>

                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  2. One-stop solution by Taxpayer as the Supplier & Taxpayer as
                  the Buyer role
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Taxpayer as the Supplier E-invoice Pre-Submission (Digital
                  Certificate)<br></br>
                  E-invoice Submission (Invoice/Debit/Credit/Refund)<br></br>
                  E-invoice Validation – UIN & invoice data validation, 72 hours
                  real-time validation with Supplier or Buyer via LHDN)<br></br>
                  E-invoice Notification<br></br>
                  Sharing of e-invoice (final e-invoice with QR code)<br></br>
                  Rejection and Cancellation (Buyer rejection, Supplier
                  cancellation)<br></br>
                  TIN & UIN Management<br></br>
                  where goods are shipped to a different recipient and/or
                  address <br></br>
                </p>

                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  3. Source System API Integration & LHDN API integration
                </h3>

                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  4. Consolidation
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  We compile and aggregate into one reporting format:
                </p>

                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  5. Real-time monitoring & alertness
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  We provide real-time monitoring of invoicing and tax-related
                  activities.
                </p>

                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  6. Scalability
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  We accommodate the growth of businesses or government
                  direction: For business: Allowing the addition of new
                  requirements / Tax reporting submissions to comply/submit
                  (GST) For IT: Cloud readiness, scalable
                </p>

                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  7. Customized Tax Invoice / Reporting Template
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  We generate comprehensive and customizable reports that cater
                  to specific business needs and assist in preparing accurate
                  tax filings attached with QR codes.
                </p>

                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  8. TIN Management
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Centralized Taxpayer Identification Number, provides real-time
                  enquiries.
                </p>

                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  9. UIN Management
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  A centralized module that keeps track of the Unique Identifier
                  Number provided by IRBM per invoices.
                </p>
                <img
                  src="/images/about/peppol-figure-1536x864.png"
                  alt="Descriptive Alt Text"
                  className="mx-auto h-auto max-w-full bg-white"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InReport;
