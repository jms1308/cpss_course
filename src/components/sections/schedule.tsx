import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

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
    <section className="py-20 md:py-28 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '700ms' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Course Schedule (Weeks 1–2)</h2>
          <p className="text-lg text-muted-foreground mt-2">A glimpse into your first two weeks of learning.</p>
        </div>
        <div className="rounded-lg border shadow-lg overflow-hidden bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Class No.</TableHead>
                <TableHead>Day & Time (UZ)</TableHead>
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
