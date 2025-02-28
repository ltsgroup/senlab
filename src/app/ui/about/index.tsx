"use client";
import Link from "next/link";
import React from "react";

const researchTeams = [
  {
    id: 1,
    title: "Interpretability",
    content:
      "The mission of the Interpretability team is to discover and understand how large language models work internally — the foundation of ensuring safety and positive outcomes.",
  },
  {
    id: 2,
    title: "Alignment",
    content:
      "The Alignment teams works to understand and develop ways to keep future advancements in AI helpful, honest, and harmless.",
  },
  {
    id: 3,
    title: "Societal Impacts",
    content:
      "Working closely with the Anthropic Policy and Trust & Safety teams, the Societal Impacts team is a technical research team that looks to ensure AI interacts positively with people.",
  },
];

const researchPrinciples = [
  {
    id: 1,
    title: "AI as a Systematic Science",
    content: `Inspired by the universality of scaling in statistical physics, we develop 
    <span class="text-[#cc785c] hover:text-[#87867f] cursor-pointer"><a href="">scaling laws</a></span> 
    to help us do systematic, empirically-driven research. We search for simple relations among data, compute, parameters, and performance of large-scale networks. 
    Then we leverage these relations to train networks more efficiently and predictably, and to evaluate our own progress. 
    We’re also investigating what scaling laws for the safety of AI systems might look like, and this will inform our future research.`,
  },
  {
    id: 2,
    title: "Safety and Scaling",
    content: `At Anthropic we believe safety research is most useful when performed on highly capable models. 
    Every year, we see larger neural networks which perform better than those that came before. These larger networks also bring new safety challenges. 
    We study and engage with the safety issues of large models so that we can find ways to make them more reliable, share what we learn, and improve safe deployment outcomes across the field. 
    Our immediate focus is prototyping systems that pair these safety techniques with tools for analyzing text and code.`,
  },
  {
    id: 3,
    title: "Tools and Measurements",
    content: `We believe critically evaluating the potential societal impacts of our work is a key pillar of research. 
    Our approach centers on building tools and measurements to evaluate and understand the capabilities, limitations, and potential for societal impact of our AI systems. 
    A good way to understand our research direction here is to read about some of the work we’ve led or collaborated on in this space: 
    <span class="text-[#cc785c] hover:text-[#87867f] cursor-pointer"><a href="">AI and Efficiency</a></span>, 
    <span class="text-[#cc785c] hover:text-[#87867f] cursor-pointer"><a href="">Measurement in AI Policy: Opportunities and Challenges</a></span>, 
    <span class="text-[#cc785c] hover:text-[#87867f] cursor-pointer"><a href="">the AI Index 2021 Annual Report</a></span>, 
    and
    <span class="text-[#cc785c] hover:text-[#87867f] cursor-pointer"><a href="">Microscope</a></span>.`,
  },
  {
    id: 4,
    title: "Focused, Collaborative Research Efforts",
    content: `We highly value collaboration on projects, and aim for a mixture of top-down and bottom-up research planning. 
    We always aim to ensure we have a clear, focused research agenda, but we put a lot of emphasis on including everyone — researchers, engineers, 
    societal impact experts and policy analysts — in determining that direction. We look to collaborate with other labs and researchers, 
    as we believe the best research into characterizing these systems will come from a broad community of researchers working together.`,
  },
];

function AboutPage() {
  return (
    <div className="bg-bgColor md:px-12">
      {/* Our Mission */}
      <div className="px-16 py-12 md:py-24 max-md:px-8">
        <div className="flex border-b border-solid border-[#141413] pb-12 md:pb-24 max-md:flex-col max-md:gap-6">
          <h2 className="w-[40%] text-4xl font-bold max-sm:w-full max-md:text-2xl">
            Our Mission
          </h2>
          <h2 className="w-[60%] text-4xl font-bold max-sm:w-full max-md:text-2xl">
            Our research teams investigate the safety, inner workings, and
            societal impact of AI models — so that artificial intelligence has a
            positive impact on society as it becomes increasingly advanced and
            capable.
          </h2>
        </div>
      </div>

      {/* Research Teams */}
      <div className="border-b border-solid border-[#141413] px-16 pb-12 md:pb-24 max-md:px-8">
        <h2 className="text-center text-5xl text-[#1c2b33] max-md:text-2xl">
          Research Teams
        </h2>
        <div className="pt-12 md:pt-24"></div>

        <div className="flex gap-12 max-md:flex-col">
          {researchTeams?.map((v) => {
            return (
              <div
                key={v.id}
                className="flex w-[33%] flex-col gap-4 max-md:w-full"
              >
                <h2 className="text-4xl font-bold max-md:text-2xl">
                  {v.title}
                </h2>
                <div className="flex h-full flex-col items-start justify-between gap-4">
                  <p className="text-xl leading-[145%] max-md:text-base">
                    {v.content}
                  </p>
                  <Link
                    href={""}
                    className="flex h-12 w-fit items-center justify-center rounded-xl border border-solid border-[#3D3D3A] px-8 transition-all delay-0 duration-300 hover:bg-[#3D3D3A] hover:text-white max-md:h-10"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Research Principles */}
      <div className="pt-12 md:pt-24"></div>
      <div className="px-16 max-md:px-8">
        <h2 className="text-center text-5xl text-[#1c2b33] max-md:text-2xl">
          Research Principles
        </h2>
        <div className="pt-12 md:pt-24"></div>

        <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1 max-md:flex-col">
          {researchPrinciples?.map((v) => {
            return (
              <div key={v.id} className="flex flex-col gap-4 max-md:w-full">
                <h4 className="text-2xl font-medium leading-[125%] max-md:text-xl">{`0${v?.id}`}</h4>
                <h2 className="leading-[120% text-4xl font-bold max-md:text-2xl">
                  {v.title}
                </h2>
                <div
                  className="text-xl leading-[145%] max-md:text-base"
                  dangerouslySetInnerHTML={{ __html: v?.content }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-12 md:pt-24"></div>
    </div>
  );
}

export default AboutPage;
