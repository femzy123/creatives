import dynamic from "next/dynamic";

// wrap around lazy image and dynamically import it for client side rendering. Saves us an extra step in each file it's used.
const LazyImage = dynamic(
  () => import("../../ui").then((m) => m.LazyImage),
  { ssr: false }
);

export default LazyImage;
