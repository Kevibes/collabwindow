export interface TimeZoneOption {
  value: string;
  label: string;
  city: string;
  country: string;
  flag: string;
  region: string;
}

export const timeZones: TimeZoneOption[] = [
  // Americas
  { value: "America/New_York", label: "Eastern Time", city: "New York", country: "USA", flag: "🇺🇸", region: "Americas" },
  { value: "America/Chicago", label: "Central Time", city: "Chicago", country: "USA", flag: "🇺🇸", region: "Americas" },
  { value: "America/Denver", label: "Mountain Time", city: "Denver", country: "USA", flag: "🇺🇸", region: "Americas" },
  { value: "America/Los_Angeles", label: "Pacific Time", city: "Los Angeles", country: "USA", flag: "🇺🇸", region: "Americas" },
  { value: "America/Toronto", label: "Eastern Time", city: "Toronto", country: "Canada", flag: "🇨🇦", region: "Americas" },
  { value: "America/Vancouver", label: "Pacific Time", city: "Vancouver", country: "Canada", flag: "🇨🇦", region: "Americas" },
  { value: "America/Sao_Paulo", label: "Brasília Time", city: "São Paulo", country: "Brazil", flag: "🇧🇷", region: "Americas" },
  { value: "America/Buenos_Aires", label: "Argentina Time", city: "Buenos Aires", country: "Argentina", flag: "🇦🇷", region: "Americas" },
  { value: "America/Mexico_City", label: "Central Time", city: "Mexico City", country: "Mexico", flag: "🇲🇽", region: "Americas" },

  // Europe
  { value: "Europe/London", label: "Greenwich Mean Time", city: "London", country: "UK", flag: "🇬🇧", region: "Europe" },
  { value: "Europe/Paris", label: "Central European Time", city: "Paris", country: "France", flag: "🇫🇷", region: "Europe" },
  { value: "Europe/Berlin", label: "Central European Time", city: "Berlin", country: "Germany", flag: "🇩🇪", region: "Europe" },
  { value: "Europe/Amsterdam", label: "Central European Time", city: "Amsterdam", country: "Netherlands", flag: "🇳🇱", region: "Europe" },
  { value: "Europe/Madrid", label: "Central European Time", city: "Madrid", country: "Spain", flag: "🇪🇸", region: "Europe" },
  { value: "Europe/Rome", label: "Central European Time", city: "Rome", country: "Italy", flag: "🇮🇹", region: "Europe" },
  { value: "Europe/Dublin", label: "Greenwich Mean Time", city: "Dublin", country: "Ireland", flag: "🇮🇪", region: "Europe" },
  { value: "Europe/Lisbon", label: "Greenwich Mean Time", city: "Lisbon", country: "Portugal", flag: "🇵🇹", region: "Europe" },
  { value: "Europe/Warsaw", label: "Eastern European Time", city: "Warsaw", country: "Poland", flag: "🇵🇱", region: "Europe" },
  { value: "Europe/Athens", label: "Eastern European Time", city: "Athens", country: "Greece", flag: "🇬🇷", region: "Europe" },

  // Asia Pacific
  { value: "Asia/Kolkata", label: "India Standard Time", city: "Mumbai", country: "India", flag: "🇮🇳", region: "Asia Pacific" },
  { value: "Asia/Dhaka", label: "Bangladesh Time", city: "Dhaka", country: "Bangladesh", flag: "🇧🇩", region: "Asia Pacific" },
  { value: "Asia/Singapore", label: "Singapore Time", city: "Singapore", country: "Singapore", flag: "🇸🇬", region: "Asia Pacific" },
  { value: "Asia/Tokyo", label: "Japan Standard Time", city: "Tokyo", country: "Japan", flag: "🇯🇵", region: "Asia Pacific" },
  { value: "Asia/Shanghai", label: "China Standard Time", city: "Shanghai", country: "China", flag: "🇨🇳", region: "Asia Pacific" },
  { value: "Asia/Hong_Kong", label: "Hong Kong Time", city: "Hong Kong", country: "Hong Kong", flag: "🇭🇰", region: "Asia Pacific" },
  { value: "Asia/Seoul", label: "Korea Standard Time", city: "Seoul", country: "South Korea", flag: "🇰🇷", region: "Asia Pacific" },
  { value: "Asia/Manila", label: "Philippine Time", city: "Manila", country: "Philippines", flag: "🇵🇭", region: "Asia Pacific" },
  { value: "Asia/Bangkok", label: "Indochina Time", city: "Bangkok", country: "Thailand", flag: "🇹🇭", region: "Asia Pacific" },
  { value: "Asia/Jakarta", label: "Western Indonesia Time", city: "Jakarta", country: "Indonesia", flag: "🇮🇩", region: "Asia Pacific" },

  // Australia & Oceania
  { value: "Australia/Sydney", label: "Australian Eastern Time", city: "Sydney", country: "Australia", flag: "🇦🇺", region: "Australia" },
  { value: "Australia/Melbourne", label: "Australian Eastern Time", city: "Melbourne", country: "Australia", flag: "🇦🇺", region: "Australia" },
  { value: "Australia/Brisbane", label: "Australian Eastern Time", city: "Brisbane", country: "Australia", flag: "🇦🇺", region: "Australia" },
  { value: "Australia/Perth", label: "Australian Western Time", city: "Perth", country: "Australia", flag: "🇦🇺", region: "Australia" },
  { value: "Australia/Adelaide", label: "Australian Central Time", city: "Adelaide", country: "Australia", flag: "🇦🇺", region: "Australia" },
  { value: "Pacific/Auckland", label: "New Zealand Time", city: "Auckland", country: "New Zealand", flag: "🇳🇿", region: "Australia" },

  // Middle East & Africa
  { value: "Asia/Dubai", label: "Gulf Standard Time", city: "Dubai", country: "UAE", flag: "🇦🇪", region: "Middle East & Africa" },
  { value: "Asia/Jerusalem", label: "Israel Standard Time", city: "Tel Aviv", country: "Israel", flag: "🇮🇱", region: "Middle East & Africa" },
  { value: "Africa/Johannesburg", label: "South Africa Time", city: "Johannesburg", country: "South Africa", flag: "🇿🇦", region: "Middle East & Africa" },
  { value: "Africa/Lagos", label: "West Africa Time", city: "Lagos", country: "Nigeria", flag: "🇳🇬", region: "Middle East & Africa" },
  { value: "Africa/Cairo", label: "Eastern European Time", city: "Cairo", country: "Egypt", flag: "🇪🇬", region: "Middle East & Africa" },

  // UTC
  { value: "UTC", label: "Coordinated Universal Time", city: "UTC", country: "Global", flag: "🌍", region: "UTC" },
];

export const defaultPairs: Record<string, { a: string; b: string }> = {
  "us-india": { a: "America/New_York", b: "Asia/Kolkata" },
  "us-uk": { a: "America/New_York", b: "Europe/London" },
  "us-germany": { a: "America/New_York", b: "Europe/Berlin" },
  "us-philippines": { a: "America/Los_Angeles", b: "Asia/Manila" },
  "uk-india": { a: "Europe/London", b: "Asia/Kolkata" },
  "us-brazil": { a: "America/New_York", b: "America/Sao_Paulo" },
  "us-japan": { a: "America/Los_Angeles", b: "Asia/Tokyo" },
  "uk-singapore": { a: "Europe/London", b: "Asia/Singapore" },
  "us-australia": { a: "America/Los_Angeles", b: "Australia/Sydney" },
  "uk-australia": { a: "Europe/London", b: "Australia/Sydney" },
};

export function getTimeZoneOption(value: string): TimeZoneOption | undefined {
  return timeZones.find((tz) => tz.value === value);
}

export function getTimeZoneLabel(value: string): string {
  const tz = getTimeZoneOption(value);
  return tz ? `${tz.flag} ${tz.city} (${tz.label})` : value;
}

export function getRegionTimeZones(region: string): TimeZoneOption[] {
  return timeZones.filter((tz) => tz.region === region);
}

export const regions = Array.from(new Set(timeZones.map((tz) => tz.region)));
