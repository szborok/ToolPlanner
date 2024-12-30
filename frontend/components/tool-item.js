import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Circle, ImageIcon } from "lucide-react";

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

  const getHealthColor = (percentage) => {
    const greenThreshold = parseInt(
      process.env.NEXT_PUBLIC_TOOL_HEALTH_GREEN_THRESHOLD || "60"
    );
    const yellowThreshold = parseInt(
      process.env.NEXT_PUBLIC_TOOL_HEALTH_YELLOW_THRESHOLD || "80"
    );

    if (percentage <= greenThreshold) return "bg-green-500";
    if (percentage <= yellowThreshold) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="flex items-center gap-6 p-4 hover:bg-muted/50 rounded-lg transition-colors">
      <div className="flex-[2] grid gap-2">
        <div className="flex items-center gap-2">
          <span className="font-medium text-lg">{toolCode}</span>
          <Badge
            variant="secondary"
            className={cn("capitalize", getStatusColor(status))}
          >
            {status}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground flex items-center gap-2">
          <Circle className="h-3 w-3" />
          <span>{diameter.toFixed(1)}mm</span>
          <span>{toolTypeCode}</span>
        </div>
      </div>
      <div className="flex-[2]">
        <div className="flex items-center gap-3">
          <Progress
            value={lifePercentage}
            className="h-3 flex-1"
            indicatorClassName={getHealthColor(lifePercentage)}
          />
          <span className="text-sm font-medium whitespace-nowrap">
            Health: {lifePercentage}%
          </span>
        </div>
      </div>
      <div className="w-32 h-20 relative shrink-0 bg-muted/50 rounded-md overflow-hidden mr-4 flex items-center justify-center">
        <div className="w-28 h-18 relative">
          <Image
            src={imageSrc}
            alt={`${toolCode} image`}
            width={112}
            height={72}
            className="object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
