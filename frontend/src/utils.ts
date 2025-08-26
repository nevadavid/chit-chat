export function cls(
  ...args: (string | string[] | { [K: string]: boolean })[]
): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (arg === null || arg === undefined) {
      continue;
    }

    if (typeof arg === "string") {
      classes.push(arg);

      continue;
    }

    if (Array.isArray(arg)) {
      classes.push(...arg);

      continue;
    }

    if (typeof arg === "object") {
      const filteredClasses = Object.entries(arg)
        .filter(([, val]) => !!val)
        .map((v) => v[0]);

      classes.push(...filteredClasses);

      continue;
    }
  }

  return classes.join(" ");
}
