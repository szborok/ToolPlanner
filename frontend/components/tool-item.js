import Image from "next/image";
import { Badge } from "@/components/ui/badge.jsx";
import { Progress } from "@/components/ui/progress.jsx";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";

export function ToolItem({
  toolCode,
  status,
  diameter,
  toolTypeCode,
  lifePercentage,
  imageSrc,
}) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "free":
        return "bg-green-500/20 text-green-500";
      case "in use":
        return "bg-blue-500/20 text-blue-500";
      case "maxed":
        return "bg-red-500/20 text-red-500";
      case "in debt":
        return "bg-purple-500/20 text-purple-500";
      default:
        return "bg-gray-500/20 text-gray-500";
    }
  };

  const getLifeColor = (percentage) => {
    const greenThreshold = parseInt(
      process.env.NEXT_PUBLIC_TOOL_LIFE_GREEN_THRESHOLD || "60"
    );
    const yellowThreshold = parseInt(
      process.env.NEXT_PUBLIC_TOOL_LIFE_YELLOW_THRESHOLD || "80"
    );

    if (percentage <= greenThreshold) return "bg-green-500";
    if (percentage <= yellowThreshold) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="flex items-center gap-4 p-4 hover:bg-muted/50 rounded-lg cursor-pointer">
      <div className="flex-1 grid gap-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{toolCode}</span>
          <Badge variant="secondary" className={cn(getStatusColor(status))}>
            {status}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground flex items-center">
          <Circle className="h-4 w-4 mr-1" />
          <span>{diameter.toFixed(1)}mm</span>
          <span className="ml-2">{toolTypeCode}</span>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <Progress
            value={lifePercentage}
            className="h-2"
            indicatorClassName={getLifeColor(lifePercentage)}
          />
          <span className="text-sm font-medium">{lifePercentage}%</span>
        </div>
      </div>
      <div className="w-24 h-16 relative">
        <Image
          src={imageSrc}
          alt={`${toolCode} image`}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    </div>
  );
}
