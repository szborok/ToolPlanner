"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Archive,
  LayoutDashboard,
  PenToolIcon as Tool,
  Wrench,
  FolderOpen,
  Settings,
  LogOut,
} from "lucide-react";

const SidebarItem = ({ href, icon: Icon, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:text-primary",
        isActive ? "bg-muted text-primary font-medium" : "text-muted-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{children}</span>
      {isActive && (
        <span className="ml-auto text-xs font-medium">
          {/* You could add counts/notifications here */}
        </span>
      )}
    </Link>
  );
};

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;
  const companyLogoPath = process.env.NEXT_PUBLIC_COMPANY_LOGO_PATH;

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card px-4 py-6 flex flex-col">
        <div className="flex items-center gap-3 px-2 mb-6">
          <Image
            src={companyLogoPath}
            alt={`${companyName} logo`}
            width={32}
            height={32}
          />
          <h2 className="text-lg font-semibold">{companyName}</h2>
        </div>
        <nav className="flex-1 space-y-1">
          <SidebarItem href="/dashboard" icon={LayoutDashboard}>
            Dashboard
          </SidebarItem>
          <SidebarItem href="/dashboard/all-tools" icon={Tool}>
            All Tools
          </SidebarItem>
          <SidebarItem href="/dashboard/my-tools" icon={Wrench}>
            My Tools
          </SidebarItem>
          <SidebarItem href="/dashboard/projects" icon={FolderOpen}>
            Projects
          </SidebarItem>
          <SidebarItem href="/dashboard/archive" icon={Archive}>
            Archive
          </SidebarItem>
          <Separator className="my-4" />
          <SidebarItem href="/dashboard/settings" icon={Settings}>
            Settings
          </SidebarItem>
        </nav>
        <div className="pt-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
