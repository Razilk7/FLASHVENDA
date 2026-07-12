
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Globe,
  Image,
  Video,
  MessageSquare,
  Users,
  FolderOpen,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Criar eBook",
    href: "/ebooks",
    icon: BookOpen,
  },
  {
    title: "Landing Pages",
    href: "/landing",
    icon: Globe,
  },
  {
    title: "Criativos",
    href: "/creatives",
    icon: Image,
  },
  {
    title: "Vídeos",
    href: "/videos",
    icon: Video,
  },
  {
    title: "Mensagens",
    href: "/messages",
    icon: MessageSquare,
  },
  {
    title: "Grupos",
    href: "/groups",
    icon: Users,
  },
  {
    title: "Biblioteca",
    href: "/library",
    icon: FolderOpen,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-[#0F0F11] border-r border-[#1F1F25] flex flex-col">
      <div className="h-20 flex items-center px-6 border-b border-[#1F1F25]">
        <h1 className="text-xl font-bold text-white">
          FLASH<span className="text-red-500">VENDA</span>
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                active
                  ? "bg-red-600 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#1F1F25]">
        <Link
          href="/settings"
          className="flex items-center gap-3 text-zinc-400 hover:text-white"
        >
          <Settings size={20} />
          Configurações
        </Link>
      </div>
    </aside>
  );
}
