"use client";

import { useState } from "react";

import { IconArrowDown } from "@tabler/icons-react";
import { motion } from "motion/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export const LanguageSelector = () => {
  const [selected, setSelected] = useState("en");

  const handleSelect = (code: string) => {
    setSelected(code);
    // TODO: Add logic to change language in your app
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className={cn(
              "text-brand-dark flex h-11 items-center justify-center gap-2.5 rounded-md bg-white pr-1.5 pl-4 font-medium"
            )}
            role="button"
          >
            {LANGUAGES.find((l) => l.code === selected)?.label}
            <div className="bg-background flex size-8 items-center justify-center rounded">
              <IconArrowDown className={cn("size-4 transition-transform")} />
            </div>
          </motion.button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <DropdownMenuGroup>
            {LANGUAGES.map((lang) => (
              <DropdownMenuItem key={lang.code}>
                <button
                  className={cn(
                    "w-full rounded-md text-left transition hover:bg-gray-100",
                    selected === lang.code && "text-primary font-bold"
                  )}
                  onClick={() => handleSelect(lang.code)}
                  role="menuitem"
                >
                  {lang.label}
                </button>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

// <div
//   className="relative"
//   onMouseEnter={handleMouseEnter}
//   onMouseLeave={handleMouseLeave}
// >
//   <button
//     type="button"
//     className={cn(
//       "text-brand-dark flex h-11 items-center justify-center gap-2.5 rounded-md bg-white pr-1.5 pl-4 font-medium"
//     )}
//     role="button"
//   >
//     {LANGUAGES.find((l) => l.code === selected)?.label}
//     <div className="bg-background flex size-8 items-center justify-center rounded">
//       <IconArrowDown
//         className={cn("size-4 transition-transform", open && "rotate-180")}
//       />
//     </div>
//   </button>
//   {open && (
//     <ul
//       className="absolute right-0 z-50 mt-2 w-28 rounded-md border bg-white p-1 shadow-lg"
//       role="menu"
//     >
//       {LANGUAGES.map((lang) => (
//         <li key={lang.code}>
//           <button
//             className={cn(
//               "w-full rounded-md px-4 py-2 text-left transition hover:bg-gray-100",
//               selected === lang.code && "text-primary font-bold"
//             )}
//             onClick={() => handleSelect(lang.code)}
//             role="menuitem"
//           >
//             {lang.label}
//           </button>
//         </li>
//       ))}
//     </ul>
//   )}
// </div>;
