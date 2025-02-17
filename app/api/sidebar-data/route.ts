import { NextResponse } from "next/server";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  Terminal,
} from "lucide-react";
import { SidebarData } from "@/types/sidebar";

export async function GET() {
  // This is example data - replace with your actual data source
  const data: SidebarData = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      // ... rest of your teams data
    ],
    navMain: [
      {
        title: "Playground",
        url: "/playground",
        icon: Terminal,
        isActive: true,
        items: [
          {
            title: "History",
            url: "/playground/history",
          },
          // ... rest of your items
        ],
      },
      // ... rest of your navigation data
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "/projects/design",
        icon: Frame,
      },
      // ... rest of your projects data
    ],
  };

  return NextResponse.json(data);
}
