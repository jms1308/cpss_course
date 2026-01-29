'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const scheduleData = [
  {
    classNo: 1,
    day: "Sunday, 8 Feb",
    time: "9:00–11:00",
    facilitator: "Dr. Mufti Yousuf Sultan",
    topics: [
      "SS 29 Stipulations and Ethics of Fatwa",
      "SS 31 Controls on Gharar in Financial Transactions",
      "SS 26 Islamic Insurance",
      "SS 41 Islamic Reinsurance",
    ],
  },
  {
    classNo: 2,
    day: "Friday, 13 Feb",
    time: "7:00–9:00",
    facilitator: "Muhammad Mishal",
    topics: ["SS 03 Procrastinating Debtor", "SS 01 Trading in Currencies"],
  },
  {
    classNo: 3,
    day: "Sunday, 15 Feb",
    time: "9:00–11:00",
    facilitator: "Dr. Mufti Yousuf Sultan",
    topics: [
      "SS 57 Gold and Its Trading Parameters",
      "SS 19 Loan (Qard)",
    ],
  },
  {
    classNo: 4,
    day: "Friday, 20 Feb",
    time: "7:00–9:00",
    facilitator: "Muhammad Mishal",
    topics: [
      "SS 58 Repurchase Agreement",
      "SS 55 Competitions and Prizes",
    ],
  },
  {
    classNo: 5,
    day: "Sunday, 22 Feb",
    time: "9:00–11:00",
    facilitator: "Dr. Mufti Yousuf Sultan",
    topics: [
        "SS 08 Murabaha",
        "SS 10 Salam and Parallel Salam",
        "SS 11 Istisna’a and Parallel Istisna’a",
        "SS 18 Possession (Qabd)",
        "SS 30 Monetization (Tawarruq)",
        "SS 53 Arboun (Earnest Money)",
    ],
  },
  {
    classNo: 6,
    day: "Friday, 27 Feb",
    time: "7:00–9:00",
    facilitator: "Muhammad Mishal",
    topics: [
        "Continuation and practical discussion of Week 3 standards",
        "Case-based explanations and exam-focused guidance",
    ],
  },
  {
    classNo: 7,
    day: "Sunday, 1 March",
    time: "9:00–11:00",
    facilitator: "Dr. Mufti Yousuf Sultan",
    topics: [
        "SS 49 Unilateral and Bilateral Promise",
        "SS 39 Mortgage and Its Contemporary Applications",
        "SS 04 Settlement of Debt by Set-off",
        "SS 43 Insolvency",
        "SS 48 Options to Terminate Due to Breach of Trust",
        "SS 51 Options to Revoke Contracts Due to Incomplete Performance",
    ],
  },
  {
    classNo: 8,
    day: "Friday, 6 March",
    time: "7:00–9:00",
    facilitator: "Muhammad Mishal",
    topics: [
        "SS 52 Options to Reconsider (Cooling-off, Either-or, Non-payment Options)",
        "SS 54 Revocation of Contracts by Exercise of a Cooling-off Option",
    ],
  },
  {
    classNo: 9,
    day: "Sunday, 8 March",
    time: "9:00–11:00",
    facilitator: "Dr. Mufti Yousuf Sultan",
    topics: [
        "SS 09 Ijarah and Ijarah Muntahia Bittamleek",
        "SS 14 Documentary Credit",
        "SS 23 Agency",
        "SS 07 Hawalah",
    ],
  },
  {
    classNo: 10,
    day: "Friday, 13 March",
    time: "7:00–9:00",
    facilitator: "Muhammad Mishal",
    topics: [
        "SS 15 Ju’alah",
        "SS 16 Commercial Papers",
        "SS 34 Hiring of Persons",
        "SS 36 Impact of Contingent Incidents on Commitments",
    ],
  },
  {
    classNo: 11,
    day: "Sunday, 15 March",
    time: "9:00–11:00",
    facilitator: "Dr. Mufti Yousuf Sultan",
    topics: [
        "SS 12 Sharika (Musharaka) and Modern Corporations",
        "SS 13 Mudarabah",
        "SS 05 Guarantees",
        "SS 46 Al-Wakala bi Al-Istithmar (Investment Agency)",
    ],
  },
  {
    classNo: 12,
    day: "Friday, 20 March",
    time: "7:00–9:00",
    facilitator: "Muhammad Mishal",
    topics: [
        "SS 17 Investment Sukuk",
        "SS 21 Financial Papers (Shares and Bonds)",
        "SS 27 Indices",
        "SS 45 Protection of Capital and Investments",
        "SS 20 Commodities in Organised Markets",
        "SS 50 Irrigation Partnership (Musaqat)",
    ],
  },
  {
    classNo: 13,
    day: "Sunday, 22 March",
    time: "9:00–11:00",
    facilitator: "Dr. Mufti Yousuf Sultan",
    topics: [
        "SS 42 Financial Rights and How They Are Exercised and Transferred",
        "SS 47 Rules for Calculating Profit in Financial Transactions",
        "SS 44 Obtaining and Deploying Liquidity",
        "SS 22 Concession Contracts",
        "SS 24 Syndicated Financing",
        "SS 28 Banking Services",
    ],
  },
  {
    classNo: 14,
    day: "Friday, 10 April",
    time: "7:00–9:00",
    facilitator: "Muhammad Mishal",
    topics: [
        "SS 06 Conversion of a Conventional Bank to an Islamic Bank",
        "SS 37 Credit Agreement",
        "SS 38 Online Financial Dealings",
    ],
  },
  {
    classNo: 15,
    day: "Sunday, 12 April",
    time: "9:00–11:00",
    facilitator: "Dr. Mufti Yousuf Sultan",
    topics: [
        "SS 25 Combination of Contracts",
        "SS 40 Distribution of Profit in Mudarabah-Based Investment Accounts",
        "SS 61 Payment Cards",
        "SS 32 Arbitration",
    ],
  },
  {
    classNo: 16,
    day: "Friday, 17 April",
    time: "7:00–9:00",
    facilitator: "Muhammad Mishal",
    topics: [
        "SS 35 Zakah",
        "SS 59 Sale of Debt",
        "SS 60 Waqf",
        "Final revision and CPSS exam-focused discussion",
    ],
  },
];

const Schedule = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedData = showAll ? scheduleData : scheduleData.slice(0, 4);

  return (
    <section id="schedule" className="py-20 md:py-28 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '700ms' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <div className="inline-block bg-accent text-accent-foreground font-bold text-2xl py-3 px-8 -skew-x-12">
                <h2 className="skew-x-12 tracking-wide">COURSE SCHEDULE</h2>
            </div>
          <p className="text-lg text-muted-foreground mt-4">A glimpse into your learning journey.</p>
        </div>

        {/* Mobile View: Cards */}
        <div className="space-y-4 md:hidden">
          {displayedData.map((item) => (
            <Card key={item.classNo} className="shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">Class {item.classNo}</CardTitle>
                  <div className="text-right text-sm">
                    <p className="font-semibold">{item.day}</p>
                    <p className="text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Facilitator</h4>
                  <Badge variant={item.facilitator.includes("Yousuf") ? "default" : "secondary"}>
                    {item.facilitator}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Shari’ah Standards Coverage</h4>
                  {item.topics.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-4">
                      {item.topics.map((topic, i) => <li key={i}>{topic}</li>)}
                    </ul>
                  ) : (
                    <span className="text-muted-foreground italic">Topics to be confirmed</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop View: Table */}
        <div className="hidden md:block rounded-lg border shadow-lg overflow-hidden bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Class No.</TableHead>
                <TableHead>Day & Time</TableHead>
                <TableHead>Facilitator</TableHead>
                <TableHead>Shari’ah Standards Coverage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedData.map((item) => (
                <TableRow key={item.classNo}>
                  <TableCell className="font-medium">{item.classNo}</TableCell>
                  <TableCell>
                    <div className="font-medium">{item.day}</div>
                    <div className="text-sm text-muted-foreground">{item.time}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={item.facilitator.includes("Yousuf") ? "default" : "secondary"}>
                      {item.facilitator}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {item.topics.length > 0 ? (
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {item.topics.map((topic, i) => <li key={i}>{topic}</li>)}
                      </ul>
                    ) : (
                      <span className="text-muted-foreground italic">Topics to be confirmed</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-8 text-center">
            <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="group"
            >
                {showAll ? 'Show Less' : 'Show Full Schedule'}
                {showAll ? <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" /> : <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />}
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
