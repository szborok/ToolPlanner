"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolItem } from "@/components/tool-item";
import { Search, Filter } from "lucide-react";

export default function AllToolsPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-semibold">All Tools</h1>
      </div>

      <div className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 bg-background"
            />
          </div>
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-6">
        <div className="space-y-4">
          <ToolItem
            toolCode="RT-8400501_1"
            status="Free"
            diameter={5.7}
            toolTypeCode="P8400"
            lifePercentage={75}
            imageSrc="/P8400.png"
          />
          <ToolItem
            toolCode="MT-9200302_2"
            status="In Use"
            diameter={8.5}
            toolTypeCode="M9200"
            lifePercentage={45}
            imageSrc="/P8400.png"
          />
          <ToolItem
            toolCode="DT-5600103_3"
            status="Maxed"
            diameter={3.2}
            toolTypeCode="D5600"
            lifePercentage={100}
            imageSrc="/P8400.png"
          />
          <ToolItem
            toolCode="BT-7100204_4"
            status="In Debt"
            diameter={12.0}
            toolTypeCode="B7100"
            lifePercentage={120}
            imageSrc="/P8400.png"
          />
          <ToolItem
            toolCode="CT-3800405_5"
            status="Free"
            diameter={6.3}
            toolTypeCode="C3800"
            lifePercentage={10}
            imageSrc="/P8400.png"
          />
        </div>
      </div>
    </div>
  );
}
