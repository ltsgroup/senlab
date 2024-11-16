"use client";

import { useTranslations } from "next-intl";
import Banner from "../components/Banner";

const HomePage = () => {
  const t = useTranslations("banner");

  return (
    <div
      style={{
        paddingBottom: "50px",
      }}
    >
      <Banner
        title={t("title")}
        desc={t("desc")}
        btnLabel1={t("btnLabel1")}
        btnLabel2={t("btnLabel2")}
      />
    </div>
  );
};

export default HomePage;
