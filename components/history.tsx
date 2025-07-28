import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const items = [
  {
    id: 1,
    date: "1998",
    title: "Started Operations",
    description:
      "Established on December 24, 1998 to engage in the supply and install surface protection system. Forged an agreement with ENVIROCHEM-USA, Covercrete-Canada and BASF-Germany.",
  },
  {
    id: 2,
    date: "2002",
    title: "Joined CCAP Cold Chain Association of the Philippines",
    description: "",
  },
  {
    id: 3,
    date: "2003",
    title: "Opened ware house at Tambler, Gen. Santos City",
    description: "",
  },
  {
    id: 4,
    date: "2005",
    title: "Moved to new Santienz Phils., Inc. Office and Warehouse",
    description:
      "#357 San Agustin Ave., Brgy. Palatiw, Pasig City, Philippines",
  },
  {
    id: 5,
    date: "2006",
    title: "Malaysia Branch",
    description:
      "Established regional branch and manufacturing plant in Malaysia thru Creative Analysis Sdn. Bhd.",
  },
  {
    id: 6,
    date: "2007",
    title: "Minglanilla, Cebu City Branch",
    description: "",
  },
  {
    id: 7,
    date: "2010",
    title: "C.B27 Partnership Agreement",
    description:
      "Forged a partnership agreement with C.B27 Engineering Co., Ltd., Hon Chi Minh City, Vietnam.",
  },
  {
    id: 8,
    date: "2014",
    title: "Installed 700,000 sq. mts. Surface Area",
    description:
      "Has already completed installation of about 700,00 sq. mts. surface area nationwide for various industry application.",
  },
  {
    id: 9,
    date: "2017",
    title: "Tugbok, Davao City Branch",
  },
];

export default function History() {
  return (
    <Timeline defaultValue={9}>
      {items.map((item) => (
        <TimelineItem key={item.id} step={item.id}>
          <TimelineHeader>
            <TimelineSeparator />
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineIndicator />
          </TimelineHeader>
          <TimelineContent>{item.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
