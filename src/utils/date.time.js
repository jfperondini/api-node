function getLocalDateTimeBrazil() {
  const now = new Date();
  const brazilTimezoneOffset = -3 * 60; // Fuso horário do Brasil (Brasília) é UTC-3
  const brazilTimezoneOffsetMilliseconds = brazilTimezoneOffset * 60 * 1000;
  const brazilTime = new Date(now.getTime() + brazilTimezoneOffsetMilliseconds);
  return brazilTime.toISOString();
}

export default getLocalDateTimeBrazil;
