export const formatDate = (targetDate: Date, format: string = "DDMMMYYYY") => {
  const date = new Date(targetDate);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  switch (format) {
    case "DDMMMYYYY":
      return `${day} ${months[month]} ${year}`;
    default:
      return `${day} ${months[month]} ${year}`;
  }
};
