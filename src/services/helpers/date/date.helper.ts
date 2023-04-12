export const startOfDay = (dirtyDate: Date) => {
  const date = new Date(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
};

export const isSameDay = (dirtyDateLeft: Date, dirtyDateRight: Date) => {
  const dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  const dateRightStartOfDay = startOfDay(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
};

export const isToday = (dirtyDate: Date) => {
  return isSameDay(dirtyDate, new Date());
};

export const subDay = (dirtyDate: number) => {
  const c = new Date(dirtyDate);
  const d = new Date(c.setDate(c.getDate() - 1));
  return d;
};

export const isYesterday = (dirtyDate: Date) => {
  const today = Date.now();
  return isSameDay(dirtyDate, subDay(today));
};
