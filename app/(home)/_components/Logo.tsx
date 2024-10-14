import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={"/favicon_dark.png"}
        height={"25"}
        width={"25"}
        alt={"logo"}
        className="dark:hidden"
      />
      <Image
        src={"/favicon_light.png"}
        height={"25"}
        width={"25"}
        alt={"logo"}
        className="hidden dark:block"
      />
    </div>
  );
};
