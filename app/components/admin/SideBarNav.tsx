"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { UserButton } from "@clerk/nextjs";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  {
    name: "Blog Posts",
    href: "/dashboard/blog-posts",
    icon: FolderIcon,
  },
  {
    name: "Projects",
    href: "/dashboard/projects",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: UsersIcon,
  },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => {
                const current = item.href === pathname;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        current
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(item.href);
                      }}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="mt-auto">
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
