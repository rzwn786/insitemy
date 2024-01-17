import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";


const InGateway = () => {
  return (
    <section
    id="ingateway"
    className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
  >
    <div className="container">
    <div className="-mx-4 flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-1/2">
          <div
            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[300px] text-center lg:m-0"
            data-wow-delay=".15s"
          >
            <Image
              src="/images/about/pngpayment-270x300.png"
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
              New Rentas STP (RBG)
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Rentas Straight-Through-Processing (STP) Interface is a Bank Negara Malaysia initiative to enable the transfer of online transactions from the RENTAS RBG system to the bank’s host system.
              Objective: To eliminate double entry at Financial Institutions and streamline the operation process (operational efficiency).
              INGateway RENTAS STP is a ready product to ease the Financial Institutions’ interface development to RENTAS STP.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="-mx-4 my-8 flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-1/2">
          <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              IBG & Jompay
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              IBG & Jompay payment module enables fund transfer from bank’s host system to BNM PaySwitch client.
              With its built-in ETL engine, INGateway IBG can integrate to various original bank hosts. Outward Transactions: extract and consolidate from various hosts into a single payment NACHA file and transferred to PaySwitch client for each window.
              Inward Transaction: Extract from third party bank’s inward NACHA file and straight through to the bank’s host system for crediting process.
              Jompay Transactions: System will perform online BVM validation by connecting to BNM online services.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <div
            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[300px] text-center lg:m-0"
            data-wow-delay=".15s"
          >
            <Image
              src="/images/about/Payment2-150x150.png"
              alt="about image"
              fill
              className="drop-shadow-three dark:drop-shadow-none"
            />
          </div>
        </div>
      </div>


      <div className="-mx-4 flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-1/2">
          <div
            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[300px] text-center lg:m-0"
            data-wow-delay=".15s"
          >
            <Image
              src="/images/about/Payment-300x223.png"
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
              SWIFT STP
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              The SWIFT Straight-Through-Processing (STP) Interface allows foreign currency transactions to be transferred online between the bank’s host system and SWIFT Alliance system.
              Objective: To eliminate double entry at Financial Institutions and streamline operation process (operational efficiency).              
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="-mx-4 my-8 flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-1/2">
          <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              IBFT
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              Streamline and automate the MEPS IBFT Fund Transfer process to achieve optimum operational efficiency.
              Objective: To connect the bank with MEPS Interbank Funds Transfer (“IBFT”) Shared ATM network for funds transfer through ATM, over the counter, and internet banking.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <div
            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[300px] text-center lg:m-0"
            data-wow-delay=".15s"
          >
            <Image
              src="/images/about/PaymentPNG-300x210.png"
              alt="about image"
              fill
              className="drop-shadow-three dark:drop-shadow-none"
            />
          </div>
        </div>
      </div>


      <div className="-mx-4 flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-1/2">
          <div
            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
            data-wow-delay=".15s"
          >
            <Image
              src="/images/about/OnlinePayment-150x150.png"
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
              DCHEQS B2B
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                DCHEQS B2B gateway serves as a centralized access-point of information related to BNM Dishonored Cheque Information System (DCHEQS).
                It can integrate with bank host or data warehouse to extract all required data for issuance submission..                
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="-mx-4 my-8 flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-1/2">
          <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
            <div className="mb-9">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              RENTAS SWIFT ISO 20022
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
              The RENTAS SWIFT ISO 20022 module capable to cater co-existence of MT 15022/MT and ISO 20022/MX messages. It is able to map all ISO 15022/MT to ISO 20022/MX messages and vice-versa to RENTAS Host.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <div
            className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
            data-wow-delay=".15s"
          >
            <Image
              src="/images/about/paymentgateway-150x150.png"
              alt="about image"
              fill
              className="drop-shadow-three dark:drop-shadow-none"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default InGateway;
