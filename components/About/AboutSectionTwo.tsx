import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Mission & Vision
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                InsiteMY aspires to be a Leading Global Player in the Banking and Finance Industry with our innovative products that meet our customers’ satisfaction and objectives.
                We are already No. 1 in Cheque clearing and Statutory Reporting in Malaysia. We aim to be No. 1 in Customer Acquisition and Enterprise STP in the next 5 years.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Our Staff is Our Biggest Asset
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We are a regional player with more than 100 highly skilled staff comprising Malaysia, China, Philippines, Pakistan, and Indonesia citizens. As a software house that develops world-class products, we emphasize highly on our people. Through the last 10 years, we have evolved to have a strong team of Technical Team leaders, System Analysts, and Analyst Programmers. We also have an independent Project Management Office with qualified PMP certified Project Managers and Quality Assurance team that ensures we do not roll out products before proper regression testing. Using the latest development tools, our products undergo vigorous testing and development iteration. All these help our people make good products that would benefit the customer’s business and deliver on time. We have received numerous testimonies from our customers for the dedication of our staff and for delivering the project within the stipulated timeframe.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Customer Driven Products
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our goal is to develop innovative and customer-oriented products while making them affordable for all financial institutions in Malaysia and around the World. We want to free the banks from being dependent on expensive foreign products, as our locally trained technical team is more than capable of developing world-class products. As such, it can be seen that our products, especially in the cheque clearing and Statutory Reporting systems, have replaced foreign products in the market. We constantly seek new innovative ways to help solve our customers’ problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
