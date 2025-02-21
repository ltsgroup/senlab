import AkarIconsFacebookFill from "@/icons/AkarIconsFacebookFill";
import EntypoSocialLinkedinWithCircle from "@/icons/EntypoSocialLinkedinWithCircle";
import EntypoSocialYoutubeWithCircle from "@/icons/EntypoSocialYoutubeWithCircle";
import MaterialSymbolsSearch from "@/icons/MaterialSymbolsSearch";
import MdiTwitterCircle from "@/icons/MdiTwitterCircle";
import Link from "next/link";

const footerLinkData = [
  {
    header: "Our approach",
    href: "",
    links: [
      {
        text: "About AI at Meta",
        href: "",
      },
      {
        text: "People",
        href: "",
      },
      {
        text: "Careers",
        href: "",
      },
    ],
  },
  {
    header: "Research",
    href: "",
    links: [
      {
        text: "Infrastructure",
        href: "",
      },
      {
        text: "Resources",
        href: "",
      },
      {
        text: "Demos",
        href: "",
      },
    ],
  },
  {
    header: "Product experiences",
    href: "",
    links: [
      {
        text: "Meta AI",
        href: "",
      },
      {
        text: "AI Studio",
        href: "",
      },
    ],
  },
  {
    header: "Latest news",
    href: "",
    links: [
      {
        text: "Blog",
        href: "",
      },
      {
        text: "Newsletter",
        href: "",
      },
    ],
  },
  {
    header: "Foundational models",
    href: "",
    links: [
      {
        text: "Llama",
        href: "",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-white flex flex-col">
      <div className="w-full bg-[#ccd1d4] py-[60px]">
        <div className="max-w-[1440px] mx-auto px-[50px] flex justify-between items-start">
          <div className="flex max-w-[60%] w-full flex-wrap justify-start">
            {footerLinkData?.map((v, i) => {
              return (
                <div
                  key={i}
                  className="w-full pb-[30px] tablet-large:w-[45%] tablet-large:p-[0_60px_50px_0] flex flex-col"
                >
                  <div className="flex justify-between items-center">
                    <Link
                      className="text-[#344854] mb-[10px] tablet-large:mb-[30px]"
                      href={v?.href}
                    >
                      <span className="text-[22px] leading-7">{v?.header}</span>
                    </Link>
                  </div>

                  <div className="flex flex-col">
                    {v?.links?.map((v, i) => {
                      return (
                        <div
                          key={i}
                          className="flex justify-between items-start"
                        >
                          <Link
                            className="text-[#344854] mb-4 tablet-large:mb-0 hover:underline"
                            href={v?.href}
                          >
                            <span className="text-[16px] leading-[22px]">
                              {v?.text}
                            </span>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex max-w-[40%] w-full justify-start items-center h-full gap-[25px]">
            <div className="border-b border-solid border-[#344854] flex items-center justify-start gap-3 w-full">
              <MaterialSymbolsSearch
                className="text-3xl text-[#344854]"
                cursor="pointer"
              />
              <input
                type="text"
                placeholder="Search AI Contents"
                className="focus:border-none focus:outline-none text-[22px] tracking-[.004em] leading-[1.5] bg-transparent w-full text-[#344854] placeholder:text-[#344854]"
              />
            </div>
            <div className="flex gap-3 items-start">
              <AkarIconsFacebookFill className="text-3xl" />
              <MdiTwitterCircle className="text-3xl" />
              <EntypoSocialLinkedinWithCircle className="text-3xl" />
              <EntypoSocialYoutubeWithCircle className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-50px flex justify-between items-center">
        <div className="flex gap-5 py-5 text-[#344854]">
          <Link className="" href="#" target="_blank">
            <span className="">Privacy Policy</span>
          </Link>

          <Link className="" href="#" target="_blank">
            <span className="">Terms</span>
          </Link>

          <Link className="" href="#" target="_blank">
            <span className="">Cookies</span>
          </Link>
        </div>

        <div className="py-5">LTS &copy; {new Date().getFullYear()}</div>
      </div>
    </div>
  );
};

export default Footer;
