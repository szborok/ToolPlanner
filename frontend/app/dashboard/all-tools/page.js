"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { ToolItem } from "@/components/tool-item";
import { Separator } from "@/components/ui/separator.jsx";
import { Search, Filter } from "lucide-react";

export default function AllToolsPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b px-6 py-4">
        <h1 className="text-2xl font-semibold">All Tools</h1>
      </div>

      {/* Search and Filters */}
      <div className="border-b px-6 py-4">
        <div className="flex items-center gap-4 max-w-3xl">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Tools List */}
      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-1 max-w-3xl">
          <ToolItem
            toolCode="MILL-001"
            status="Free"
            diameter={10.0}
            toolTypeCode="E1234"
            lifePercentage={75}
            imageSrc="/placeholder.svg?height=64&width=96"
          />
          <Separator />
          <ToolItem
            toolCode="LATHE-002"
            status="In Use"
            diameter={20.5}
            toolTypeCode="T5678"
            lifePercentage={30}
            imageSrc="/placeholder.svg?height=64&width=96"
          />
          <Separator />
          <ToolItem
            toolCode="DRILL-003"
            status="Maxed"
            diameter={5.2}
            toolTypeCode="D9012"
            lifePercentage={110}
            imageSrc="/placeholder.svg?height=64&width=96"
          />
          <Separator />
          <ToolItem
            toolCode="ROUTER-004"
            status="In Debt"
            diameter={15.7}
            toolTypeCode="R3456"
            lifePercentage={150}
            imageSrc="/placeholder.svg?height=64&width=96"
          />
          <Separator />
          <ToolItem
            toolCode="SAW-005"
            status="In Use"
            diameter={200.0}
            toolTypeCode="S7890"
            lifePercentage={95}
            imageSrc="/placeholder.svg?height=64&width=96"
          />
          <Separator />
        </div>
      </div>
    </div>
  );
}
