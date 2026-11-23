// Elle vérifie non seulement le format YYYY-MM-DD, mais aussi que la date existe réellement. Par exemple, 2026-02-30 sera refusée.

export const isValidate = (value) => {
  if (typeof value != "string") {
    return false;
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00.000Z`);

  return (
    !Number.isNaN(date.getTime()) && date.toISOString.slice(0, 10) === value
  );
};
