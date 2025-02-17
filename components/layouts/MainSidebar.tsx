// "use client";
// import { motion } from "framer-motion";
// import { GamepadIcon, LayoutDashboard, MessageCircle } from "lucide-react";

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
// } from "@/components/ui/sidebar";

// const sidebarItems = [
//   { icon: LayoutDashboard, label: "Dashboard", isActive: true },
//   { icon: MessageCircle, label: "WhatsApp" },
//   { icon: MessageCircle, label: "Discord" },
//   { icon: GamepadIcon, label: "Games" },
// ];

// export default function MainSidebar() {
//   return (
//     <Sidebar className="border-r-0">
//       <SidebarHeader className="h-[60px] border-b border-border/50">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="px-6 flex items-center h-full"
//         >
//           <h1 className="text-xl font-semibold">Pal Development Center</h1>
//         </motion.div>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarMenu>
//           {sidebarItems.map((item) => (
//             <SidebarMenuItem key={item.label}>
//               <SidebarMenuButton
//                 asChild
//                 isActive={item.isActive}
//                 className="gap-2"
//               >
//                 <button>
//                   <item.icon className="h-5 w-5" />
//                   <span>{item.label}</span>
//                 </button>
//               </SidebarMenuButton>
//             </SidebarMenuItem>
//           ))}
//         </SidebarMenu>
//       </SidebarContent>
//     </Sidebar>
//   );
// }
