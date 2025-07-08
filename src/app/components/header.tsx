import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Image from "next/image";

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={120}
            height={40}
            className="h-16 w-auto"
          />
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="default" className="bg-[#29c231]  text-white">
            Invite Staff
          </Button>
          <Button variant="default" className="bg-[#29c231]  text-white">
            Invite Engineer
          </Button>
          <Button
            variant="outline"
            className="border-[#29c231] text-[#29c231] hover:bg-green-50 bg-transparent"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
