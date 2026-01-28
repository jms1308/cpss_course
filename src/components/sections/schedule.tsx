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
    topics: [],
  },
  {
    classNo: 3,
    day: "Sunday, 15 Feb",
    time: "9:00–11:00",
    facilitator: "Dr. Mufti Yousuf Sultan",
    topics: [
      "SS 03 Procrastinating Debtor",
      "SS 01 Trading in Currencies",
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
];

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 md:py-28 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '700ms' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <div className="inline-block bg-accent text-accent-foreground font-bold text-2xl py-3 px-8 -skew-x-12">
                <h2 className="skew-x-12 tracking-wide">COURSE SCHEDULE</h2>
            </div>
          <p className="text-lg text-muted-foreground mt-4">A glimpse into your first two weeks of learning.</p>
        </div>

        {/* Mobile View: Cards */}
        <div className="space-y-4 md:hidden">
          {scheduleData.map((item) => (
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
              {scheduleData.map((item) => (
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
      </div>
    </section>
  );
};

export default Schedule;
