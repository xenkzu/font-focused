
import { Bell, Settings, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-4xl font-bold text-blue-primary font-space">
        Lokally
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell size={24} />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings size={24} />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Go back">
          <ArrowLeft size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
