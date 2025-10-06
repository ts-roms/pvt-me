

export function calculateServiceLength (period: string): string {
  const [startStr, endStr] = period.split("—").map((s) => s.trim());

  const parseDate = (str: string): Date => {
    if (/present/i.test(str)) return new Date(); // Handle "Present"
    const cleanStr = str.replace(".", "");
    const [monthStr, yearStr] = cleanStr.split(" ");
    const month = new Date(`${monthStr} 1, ${yearStr}`).getMonth();
    const year = Number(yearStr);
    return new Date(year, month);
  };

  const start = parseDate(startStr);
  const end = parseDate(endStr);

  const diffMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1; // +1 for inclusive count

  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths > 1 ? "s of service" : ""}`;
  }

  const years = diffMonths / 12;
  if (years < 1) return `${diffMonths} month${diffMonths > 1 ? "s" : ""}`;
  return years % 1 === 0
    ? `${years} year${years > 1 ? "s" : ""}`
    : `${years.toFixed(1)} years of service`;
}
