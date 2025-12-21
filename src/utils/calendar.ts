export function formatToUTC(date: Date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

export function generateGoogleCalendarLink({
  title,
  description,
  location,
  startDate,
  endDate,
}: {
  title: string;
  description?: string;
  location?: string;
  startDate: Date;
  endDate: Date;
}) {
  const start = formatToUTC(startDate);
  const end = formatToUTC(endDate);
  const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';

  return (
    `${baseUrl}` +
    `&text=${encodeURIComponent(title)}` +
    `&dates=${start}/${end}` +
    `&details=${encodeURIComponent(description || '')}` +
    `&location=${encodeURIComponent(location || '')}`
  );
}

export function generateICS({
  title,
  description,
  location,
  startDate,
  endDate,
}: {
  title: string;
  description?: string;
  location?: string;
  startDate: Date;
  endDate: Date;
}) {
  const formatICSDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Shazmeen Bank Coaching//EN
BEGIN:VEVENT
UID:${Date.now()}@shazmeenbank.com
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:${title}
DESCRIPTION:${(description || '').replace(/\n/g, '\\n')}
LOCATION:${location || ''}
END:VEVENT
END:VCALENDAR`;
}

export function downloadICS({
  title,
  description,
  location,
  startDate,
  endDate,
}: {
  title: string;
  description?: string;
  location?: string;
  startDate: Date;
  endDate: Date;
}) {
  const icsContent = generateICS({ title, description, location, startDate, endDate });
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${title.replace(/[^a-z0-9]/gi, '_')}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
