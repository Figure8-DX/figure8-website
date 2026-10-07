"use client";

import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/i18n/LanguageProvider";

type PhilosophyId = "xOps" | "eightyTwenty" | "kaizen";

type PhilosophyPill = {
  leftLabel: string;
  rightLabel: string;
  emphasizeRight?: boolean;
};

type PhilosophyCardConfig = {
  id: PhilosophyId;
  title: string;
  borderColorClass: string;
  hoverBorderColorClass: string;
  backgroundClass: string;
  titleBadge: React.ReactNode;
  pills: PhilosophyPill;
  extraColClasses?: string;
};

const PHILOSOPHY_CARDS: PhilosophyCardConfig[] = [
  {
    id: "xOps",
    title: "X Ops",
    borderColorClass: "border-[#212E3F]/6",
    hoverBorderColorClass: "hover:border-[#212E3F]/20",
    backgroundClass: "bg-gray-50",
    titleBadge: (
      <>
        <span className="text-[#EB5824]">X</span> Ops
      </>
    ),
    pills: {
      leftLabel: "X",
      rightLabel: "Ops",
    },
  },
  {
    id: "eightyTwenty",
    title: "80 / 20 Rule",
    borderColorClass: "border-[#EB5824]/8",
    hoverBorderColorClass: "hover:border-[#EB5824]/20",
    backgroundClass: "bg-gray-50",
    titleBadge: (
      <>
        <span className="text-[#EB5824]">80 / 20</span> Rule
      </>
    ),
    pills: {
      leftLabel: "20%",
      rightLabel: "80%",
      emphasizeRight: false,
    },
  },
  {
    id: "kaizen",
    title: "Kaizen",
    borderColorClass: "border-[#212E3F]/6",
    hoverBorderColorClass: "hover:border-[#212E3F]/20",
    backgroundClass: "bg-gray-50",
    titleBadge: (
      <>
        <span className="text-[#EB5824]">Kai</span>zen
      </>
    ),
    pills: {
      leftLabel: "i1",
      rightLabel: "i2",
    },
    extraColClasses: "md:col-span-2 lg:col-span-1",
  },
];

function PhilosophyCard({ config }: { config: PhilosophyCardConfig }) {
  const { t } = useLanguage();
  const bullets = t.about.cards[config.id];
  const {
    borderColorClass,
    hoverBorderColorClass,
    backgroundClass,
    titleBadge,
    pills,
    extraColClasses,
  } = config;

  return (
    <div
      className={`group p-6 sm:p-8 rounded-xl ${backgroundClass} border ${borderColorClass} ${hoverBorderColorClass} transition-all duration-300 hover:shadow-lg ${
        extraColClasses ?? ""
      }`}
    >
      <div className="text-center mb-6">
        <div className="transform-gpu transition-transform duration-300 ease-out will-change-transform group-hover:scale-105">
          {/* Figure and title keep their English design in every language */}
          <div lang="en" dir="ltr">
            <div className="relative flex items-center justify-center mx-auto mb-4 w-56 h-32">
              <img
                src="/Figure8-cropped.png"
                alt="Figure8 Logo"
                className="w-full h-full object-contain"
              />
              <span className="absolute left-[16%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-md text-[#EB5824]">
                {pills.leftLabel}
              </span>
              <span className="absolute left-[74%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-md">
                {pills.rightLabel}
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#212E3F] mb-6 text-center">
              <span className="inline-block bg-white text-[#212E3F] ring-1 ring-gray-100 px-3 py-1 rounded-md shadow-sm">
                {titleBadge}
              </span>
            </h4>
          </div>
          <div className="space-y-3 text-sm text-[#212E3F]/70 text-center">
            {bullets.map((bullet) => (
              <p key={bullet}>{bullet}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { sectionRef, isVisible } = useSectionInView<HTMLElement>();
  const { t } = useLanguage();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#f9fafb] text-[#212E3F] relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-20 w-64 h-64 border border-[#212E3F] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-[#EB5824] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 relative z-10">
        {/* Section Header */}
        <div
          className={`mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <SectionHeader
            title={
              <>
                {t.about.titlePrefix}
                <span lang="en" className="text-[#EB5824]">
                  Figure8 DX
                </span>
              </>
            }
            subtitle={
<>{t.about.subtitle}</>
            }
          />
        </div>

        {/* Main Content Grid */}

        {/* Our Philosophy Section */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-xl p-10 border border-[#212E3F]/10 shadow-sm mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#212E3F] mb-6">
                {t.about.philosophyTitlePrefix}
                <span className="text-[#EB5824]">
                  {t.about.philosophyTitleHighlight}
                </span>
              </h3>
              <p className="text-lg text-[#212E3F]/70 mb-4">
                {t.about.philosophyIntro}{" "}
                <span lang="en" className="text-[#EB5824] font-bold">
                  X Ops
                </span>
                {t.about.philosophySep1}
                <span lang="en" className="text-[#EB5824] font-bold">
                  {" "}
                  80/20{" "}
                </span>
                {t.about.philosophySep2}{" "}
                <span lang="en" className="font-bold">
                  <span className="text-[#EB5824]">Kai</span>zen
                </span>
                {t.about.philosophyEnd}
              </p>
              <p className="text-base text-[#212E3F]/60">
                {t.about.philosophyFocus}{" "}
                <span className="font-semibold">
                  {t.about.philosophyFocusHighlight}
                </span>
              </p>
            </div>

            {/* <div className="text-center mb-8">
              <p className="text-lg text-[#212E3F]/70 leading-relaxed">
                <span className="text-[#EB5824] font-semibold">Figure8Dx</span>{" "}
                represents a continuous loop between strategy and execution,
                where learning and improvement are built into delivery, not
                added later.
              </p>
            </div> */}

            {/* Philosophy Framework */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {PHILOSOPHY_CARDS.map((card) => (
                <PhilosophyCard key={card.id} config={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
