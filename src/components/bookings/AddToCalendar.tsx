import { Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateGoogleCalendarLink, downloadICS } from "@/utils/calendar";

type Props = {
  title: string;
  startDate: Date;
  endDate: Date;
  description?: string;
  location?: string;
};

export default function AddToCalendar({
  title,
  startDate,
  endDate,
  description,
  location,
}: Props) {
  const calendarUrl = generateGoogleCalendarLink({
    title,
    startDate,
    endDate,
    description,
    location,
  });

  const handleDownloadICS = () => {
    downloadICS({
      title,
      startDate,
      endDate,
      description,
      location,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      <Button
        asChild
        variant="outline"
        className="flex-1 gap-2"
      >
        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Calendar className="w-4 h-4" />
          Add to Google Calendar
        </a>
      </Button>
      
      <Button
        variant="outline"
        onClick={handleDownloadICS}
        className="flex-1 gap-2"
      >
        <Download className="w-4 h-4" />
        Download .ics
      </Button>
    </div>
  );
}
