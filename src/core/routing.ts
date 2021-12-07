import { startsWith } from "lodash";

export const isRouteActive: (slug: string, location: Location) => boolean = (
  slug,
  location
) => {
  let isActive = slug === location.pathname;
  if (slug !== location.pathname && slug !== "/")
    isActive = startsWith(location.pathname, slug);

  return isActive;
};
