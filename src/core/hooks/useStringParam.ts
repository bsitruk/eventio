import { useParam } from "@blitzjs/next";

export const useStringParam = (slug: string) => {
  const param = useParam(slug, "string");
  return param;
};
