"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";

import ArcticonsEasyshare from "@/icons/ArcticonsEasyshare";
import MaterialSymbolsPauseRounded from "@/icons/MaterialSymbolsPauseRounded";
import Mathematics from "@/blog/Competition_Math.webp";
import Frontier_Math from "@/blog/Frontier_Math.webp";
import MaterialSymbolsPlayArrow from "@/icons/MaterialSymbolsPlayArrow";
import { cn } from "@/util/utils";
import Link from "next/link";

interface PageProps {
  slug: string;
}

const data1 = [
  {
    text: `We’re releasing OpenAI o3‑mini, the newest, most
          cost-efficient model in our reasoning series, available in
          both ChatGPT and the API today. Previewed in December 2024⁠,
          this powerful and fast model advances the boundaries of what
          small models can achieve, delivering exceptional STEM
          capabilities—with particular strength in science, math, and
          coding—all while maintaining the low cost and reduced latency
          of OpenAI o1‑mini.`,
  },
  {
    text: `OpenAI o3‑mini is our first small reasoning model that
          supports highly requested developer features including
          function calling, Structured Outputs, and developer messages,
          making it production-ready out of the gate. Like OpenAI
          o1‑mini and OpenAI o1‑preview, o3‑mini will support streaming.
          Also, developers can choose between three reasoning effort
          options—low, medium, and high—to optimize for their specific
          use cases. This flexibility allows o3‑mini to “think harder”
          when tackling complex challenges or prioritize speed when
          latency is a concern. o3‑mini does not support vision
          capabilities, so developers should continue using OpenAI o1
          for visual reasoning tasks. o3‑mini is rolling out in the Chat
          Completions API, Assistants API, and Batch API starting today
          to select developers in API usage tiers 3-5.`,
  },
  {
    text: `ChatGPT Plus, Team, and Pro users can access OpenAI o3‑mini
          starting today, with Enterprise access coming in February.
          o3‑mini will replace OpenAI o1‑mini in the model picker,
          offering higher rate limits and lower latency, making it a
          compelling choice for coding, STEM, and logical
          problem-solving tasks. As part of this upgrade, we’re tripling
          the rate limit for Plus and Team users from 50 messages per
          day with o1‑mini to 150 messages per day with o3‑mini.
          Additionally, o3‑mini now works with search to find up-to-date
          answers with links to relevant web sources. This is an early
          prototype as we work to integrate search across our reasoning
          models.`,
  },
  {
    text: `Starting today, free plan users can also try OpenAI o3‑mini by
          selecting ‘Reason’ in the message composer or by regenerating
          a response. This marks the first time a reasoning model has
          been made available to free users in ChatGPT.`,
  },
  {
    text: `While OpenAI o1 remains our broader general knowledge
          reasoning model, OpenAI o3‑mini provides a specialized
          alternative for technical domains requiring precision and
          speed. In ChatGPT, o3‑mini uses medium reasoning effort to
          provide a balanced trade-off between speed and accuracy. All
          paid users will also have the option of selecting o3‑mini‑high
          in the model picker for a higher-intelligence version that
          takes a little longer to generate responses. Pro users will
          have unlimited access to both o3‑mini and o3‑mini‑high.`,
  },
];

const data2 = [
  {
    title: "Competition Math (AIME 2024)",
    img: Mathematics,
    content:
      "With low reasoning effort, OpenAI o3‑mini achieves comparable performance with OpenAI o1‑mini, while with medium effort, o3‑mini achieves comparable performance with o1. Meanwhile, with high reasoning effort, o3‑mini outperforms both OpenAI o1‑mini and OpenAI o1, where the gray shaded regions show the performance of majority vote (consensus) with 64 samples.",
    headText: "Mathematics",
    imgClass: "max-w-[600px]",
  },
  {
    title: "PhD-level Science Questions (GPQA Diamond)",
    img: Mathematics,
    content:
      "On PhD-level biology, chemistry, and physics questions, with low reasoning effort, OpenAI o3‑mini achieves performance above OpenAI o1‑mini. With high effort, o3‑mini achieves comparable performance with o1.",
    headText: "PhD-level science",
    imgClass: "max-w-[600px]",
  },
  {
    title: "FrontierMath",
    img: Mathematics,
    content:
      "OpenAI o3‑mini with high reasoning performs better than its predecessor on FrontierMath. On FrontierMath, when prompted to use a Python tool, o3‑mini with high reasoning effort solves over 32% of problems on the first attempt, including more than 28% of the challenging (T3) problems. These numbers are provisional, and the chart above shows performance without tools or a calculator.",
    headText: "Research-level mathematics",
    imgClass: "max-w-[600px]",
  },
  {
    title: "Competition Code (Codeforces)",
    img: Mathematics,
    content:
      "On Codeforces competitive programming, OpenAI o3‑mini achieves progressively higher Elo scores with increased reasoning effort, all outperforming o1‑mini. With medium reasoning effort, it matches o1’s performance.",
    headText: "Competition coding",
    imgClass: "max-w-[600px]",
  },
  {
    title: "Software Engineering (SWE-bench Verified)",
    img: Mathematics,
    content:
      "o3‑mini is our highest performing released model on SWEbench-verified. For additional datapoints on SWE-bench Verified results with high reasoning effort, including with the open-source Agentless scaffold (39%) and an internal tools scaffold (61%), see our system card⁠⁠.",
    headText: "Software engineering",
    imgClass: "max-w-[600px]",
  },
  {
    title: "LiveBench Coding",
    img: Frontier_Math,
    content:
      "OpenAI o3‑mini surpasses o1‑high even at medium reasoning effort, highlighting its efficiency in coding tasks. At high reasoning effort, o3‑mini further extends its lead, achieving significantly stronger performance across key metrics.",
    headText: "LiveBench coding",
    imgClass: "max-w-[840px]",
  },
];

interface AuthorListProps {
  title: string;
  content: ReactNode;
}

function AuthorList({ content, title }: AuthorListProps) {
  return (
    <div className="w-full text-left">
      <h2 className="mb-3 text-[.875rem] leading-[1.435rem] text-[#707070]">
        {title}
      </h2>
      {content}
    </div>
  );
}

function BlogDetailPage({ slug }: PageProps) {
  console.log("🚀 ~ BlogDetailPage ~ slug: ", slug);

  const [isPlayAudio, setIsPlayAudio] = useState<boolean>(false);
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
  const [truncatedIndexes, setTruncatedIndexes] = useState<number[]>([]);
  const textRefs = useRef<(HTMLElement | null)[]>([]);

  function handlePlay() {
    setIsPlayAudio((pre) => !pre);
  }

  useEffect(() => {
    setTruncatedIndexes(
      textRefs.current
        .map((v, i) => {
          return v && v.scrollHeight > v.clientHeight ? i : -1;
        })
        .filter((i) => i !== -1),
    );
  }, [textRefs]);

  const toggleExpand = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="bg-bgColor">
      <div className="w-full pt-14 lg:pt-20"></div>
      <div className="mx-auto flex w-full max-w-[1349px] flex-col gap-20 md:gap-[7.5rem]">
        <section className="flex flex-col flex-wrap items-center justify-center px-6">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <p className="text-sm font-medium leading-5 tracking-normal">
              January 31, 2025
            </p>
            <p className="hover:text-primary-100 cursor-pointer text-[#707070] transition delay-0 duration-300 ease-linear hover:text-inherit">
              Release
            </p>
          </div>

          <h1 className="max-w-[62.5rem] text-[2rem] font-medium tracking-[-.02em] md:text-[4rem]">
            OpenAI o3-mini
          </h1>

          <div className="mt-8">
            <p className="text-balance text-center">
              Pushing the frontier of cost-effective reasoning.
            </p>
          </div>

          <div className="flex w-full items-center justify-center pt-20">
            <div className="flex w-full max-w-[504px] items-center justify-between border-t border-solid border-[#1F1F1F] pt-3">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  className="rounded-full bg-[rgb(28,_43,_51)] p-[3px]"
                  onClick={handlePlay}
                >
                  {!isPlayAudio ? (
                    <MaterialSymbolsPlayArrow className="text-3xl text-white" />
                  ) : (
                    <MaterialSymbolsPauseRounded className="rotate-180 text-3xl text-white" />
                  )}
                </button>

                <span className="flex-1 pl-3 text-sm font-medium leading-[0.875rem] tracking-normal">
                  <div className="flex items-center gap-3">
                    <span>Listen to article</span>
                    <div className="border-l border-l-[#707070] py-1 pl-3">
                      5:43
                    </div>
                  </div>
                </span>
              </div>

              <div className="relative">
                <div
                  className="flex items-center gap-1"
                  itemType="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:rc:"
                  data-state="closed"
                >
                  <span className="text-sm font-medium leading-[0.875rem] tracking-normal">
                    <button
                      type="button"
                      className="flex h-[2.5rem] min-h-8 items-center justify-center gap-[0.3em] text-nowrap px-0 text-sm font-medium leading-[0.875rem] tracking-normal outline-offset-2 transition duration-200 ease-linear hover:text-[#707070] focus:outline-none focus:outline focus:outline-1 focus-visible:outline-gray-300 disabled:cursor-not-allowed disabled:text-gray-300"
                    >
                      <ArcticonsEasyshare className="-rotate-45 text-2xl" />
                      Share
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col flex-wrap items-center justify-center px-6">
          <div className="text-pretty text-[1.0625rem] font-normal leading-[1.7499375rem] tracking-[-0.01em]">
            <div className="flex flex-col gap-6">
              {data1?.map((v, i) => (
                <div key={i} className="w-full max-w-[600px]">
                  <p>{v?.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col flex-wrap items-center justify-center px-6">
          <div className="text-pretty text-[1.0625rem] font-normal leading-[1.7499375rem] tracking-[-0.01em]">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="w-full max-w-[600px] pb-6">
                <h2 className="font-medium">
                  Fast, powerful, and optimized for STEM reasoning
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-center gap-12 md:gap-16">
              <div className="w-full max-w-[600px]">
                <p>
                  Similar to its OpenAI o1 predecessor, OpenAI o3‑mini has been
                  optimized for STEM reasoning. o3‑mini with medium reasoning
                  effort matches o1’s performance in math, coding, and science,
                  while delivering faster responses. Evaluations by expert
                  testers showed that o3‑mini produces more accurate and clearer
                  answers, with stronger reasoning abilities, than OpenAI
                  o1‑mini. Testers preferred o3‑mini&rsquo;s responses to
                  o1‑mini 56% of the time and observed a 39% reduction in major
                  errors on difficult real-world questions. With medium
                  reasoning effort, o3‑mini matches the performance of o1 on
                  some of the most challenging reasoning and intelligence
                  evaluations including AIME and GPQA.
                </p>
              </div>

              {data2?.map((v, i) => (
                <React.Fragment key={i}>
                  <h3 className="w-full max-w-[600px]">{v?.headText}</h3>

                  <div className={cn("", v?.imgClass)}>
                    <Image
                      src={v?.img}
                      alt={v?.title}
                      width={1000}
                      height={1000}
                      className="h-auto w-full object-contain"
                    />

                    <div className="mt-5 w-full">
                      <div className="flex flex-col gap-2">
                        <div className="[&>p]:text-[.875rem] [&>p]:font-normal [&>p]:leading-[1.435rem] [&>p]:tracking-normal">
                          <p
                            ref={(el) => {
                              textRefs.current[i] = el;
                            }}
                            className={cn({
                              "line-clamp-none": expandedIndexes.includes(i),
                              "line-clamp-2": !expandedIndexes.includes(i),
                            })}
                          >
                            <b>
                              <i>
                                <span>{v?.headText}: </span>
                              </i>
                            </b>
                            <i>
                              <span>{v?.content}</span>
                            </i>
                          </p>
                        </div>

                        {truncatedIndexes.includes(i) && (
                          <button
                            onClick={() => toggleExpand(i)}
                            className="max-w-fit text-sm italic text-[#707070] hover:underline"
                          >
                            {expandedIndexes.includes(i)
                              ? "Show Less"
                              : "Show More"}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-[72px]">
          <div className="flex flex-col items-center rounded-md bg-[#F5F5F5] px-5 py-8 shadow-xl md:py-16">
            <div className="w-full max-w-[580px]">
              <div className="flex flex-col flex-wrap items-center justify-center gap-12">
                <AuthorList
                  title="Authors"
                  content={
                    <Link
                      className="text-[.875rem] leading-[1.435rem] tracking-[-.01em] text-[#000] underline underline-offset-[0.25rem] transition duration-300 ease-linear hover:text-[#707070]"
                      href="/news/?author=openai#results"
                    >
                      OpenAI
                    </Link>
                  }
                />

                <AuthorList
                  title="Authors"
                  content={
                    <p className="mb-4 break-words text-[.875rem] leading-none tracking-[-.01em] [word-break:break-word] [&_*]:text-[.875rem] [&_*]:tracking-[-.01em]">
                      <span>
                        Brian Zhang, Eric Mitchell, Hongyu Ren, Kevin Lu, Max
                        Schwarzer, Michelle Pokrass, Shengjia Zhao, Ted Sanders.
                      </span>
                    </p>
                  }
                />

                <AuthorList
                  title="Eval"
                  content={
                    <p className="mb-4 break-words text-[.875rem] leading-none tracking-[-.01em] [word-break:break-word] [&_*]:text-[.875rem] [&_*]:tracking-[-.01em]">
                      <span>
                        Adam Kalai, Alex Tachard Passos, Ben Sokolowsky, Elaine
                        Ya Le, Erik Ritter, Hao Sheng, Hanson Wang, Ilya
                        Kostrikov, James Lee, Johannes Ferstad, Michael Lampe,
                        Prashanth Radhakrishnan, Sean Fitzgerald, Sebastien
                        Bubeck, Yann Dubois, Yu Bai
                      </span>
                    </p>
                  }
                />

                <AuthorList
                  title="Frontier Evals & Preparedness"
                  content={
                    <p className="mb-4 break-words text-[.875rem] leading-none tracking-[-.01em] [word-break:break-word] [&_*]:text-[.875rem] [&_*]:tracking-[-.01em]">
                      <span>
                        Andy Applebaum, Elizabeth Proehl, Evan Mays, Joel
                        Parish, Kevin Liu, Leon Maksin, Leyton Ho, Miles Wang,
                        Michele Wang, Olivia Watkins, Patrick Chao, Samuel
                        Miserendino, Tejal Patwardhan
                      </span>
                    </p>
                  }
                />

                <AuthorList
                  title="Engineering"
                  content={
                    <p className="mb-4 break-words text-[.875rem] leading-none tracking-[-.01em] [word-break:break-word] [&_*]:text-[.875rem] [&_*]:tracking-[-.01em]">
                      <span>
                        Adam Walker, Akshay Nathan, Alyssa Huang, Andy Wang,
                        Ankit Gohel, Ben Eggers, Brian Yu, Bryan Ashley, Chengdu
                        Huang, Christian Hoareau, Davin Bogan, Emily Sokolova,
                        Eric Horacek, Eric Jiang, Felipe Petroski Such, Jonah
                        Cohen, Josh Gross, Justin Becker, Kan Wu, Kevin
                        Whinnery, Larry Lv, Lee Byron, Manoli Liodakis, Max
                        Johnson, Mike Trpcic, Murat Yesildal, Rasmus Rygaard, RJ
                        Marsan, Rohit Ramchandani, Rohan Kshirsagar, Roman Huet,
                        Sara Conlon, Shuaiqi (Tony) Xia, Siyuan Fu, Srinivas
                        Narayanan, Sulman Choudhry, Tomer Kaftan, Trevor Creech
                      </span>
                    </p>
                  }
                />

                <AuthorList
                  title="Search"
                  content={
                    <p className="mb-4 break-words text-[.875rem] leading-none tracking-[-.01em] [word-break:break-word] [&_*]:text-[.875rem] [&_*]:tracking-[-.01em]">
                      <span>
                        Adam Fry, Adam Perelman, Brandon Wang, Cristina Scheau,
                        Philip Pronin, Sundeep Tirumalareddy, Will Ellsworth,
                        Zewei Chu
                      </span>
                    </p>
                  }
                />

                <AuthorList
                  title="Product"
                  content={
                    <p className="mb-4 break-words text-[.875rem] leading-none tracking-[-.01em] [word-break:break-word] [&_*]:text-[.875rem] [&_*]:tracking-[-.01em]">
                      <span>
                        Antonia Woodford, Beth Hoover, Jake Brill, Kelly
                        Stirman, Minnia Feng, Neel Ajjarapu, Nick Turley, Nikunj
                        Handa, Olivier Godement
                      </span>
                    </p>
                  }
                />

                <AuthorList
                  title="Safety"
                  content={
                    <p className="mb-4 break-words text-[.875rem] leading-none tracking-[-.01em] [word-break:break-word] [&_*]:text-[.875rem] [&_*]:tracking-[-.01em]">
                      <span>
                        Andrea Vallone, Andrew Duberstein, Enis Sert, Eric
                        Wallace, Grace Zhao, Irina Kofman, Jieqi Yu, Joaquin
                        Quinonero Candela, Madelaine Boyd, Mehmet Yatbaz, Mike
                        McClay, Mingxuan Wang, Saachi Jain, Sandhini Agarwal,
                        Sam Toizer, Santiago Hernández, Steve Mostovoy, Young
                        Cha, Tao Li, Yunyun Wang
                      </span>
                    </p>
                  }
                />

                <AuthorList
                  title="External Redteaming"
                  content={
                    <p className="mb-4 break-words text-[.875rem] leading-none tracking-[-.01em] [word-break:break-word] [&_*]:text-[.875rem] [&_*]:tracking-[-.01em]">
                      <span>Lama Ahmad, Troy Peterson</span>
                    </p>
                  }
                />

                <AuthorList
                  title="Research Program Managers"
                  content={
                    <p className="mb-4 break-words text-[.875rem] leading-none tracking-[-.01em] [word-break:break-word] [&_*]:text-[.875rem] [&_*]:tracking-[-.01em]">
                      <span>Carpus Chang, Kristen Ying</span>
                    </p>
                  }
                />

                <AuthorList
                  title="Leadership"
                  content={
                    <div>
                      <p className="mb-4 break-words text-[.875rem] leading-none tracking-[-.01em] [word-break:break-word] [&_*]:text-[.875rem] [&_*]:tracking-[-.01em]">
                        <span>
                          Aidan Clark, Dane Stuckey, Jerry Tworek, Jakub
                          Pachocki, Johannes Heidecke, Kevin Weil, Liam Fedus,
                          Mark Chen, Sam Altman, Wojciech Zaremba
                        </span>
                      </p>

                      <p className="mb-4 break-words text-[.875rem] leading-none tracking-[-.01em] [word-break:break-word] [&_*]:text-[.875rem] [&_*]:tracking-[-.01em]">
                        <span>+ </span>
                        <Link
                          className="leading-[1.435rem] text-[#000] underline underline-offset-[0.25rem] transition duration-300 ease-linear hover:text-[#707070]"
                          href="/news/?author=openai#results"
                        >
                          all the contributors behind o1⁠.
                        </Link>
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full pt-14 lg:pt-20"></div>
    </div>
  );
}

export default BlogDetailPage;
