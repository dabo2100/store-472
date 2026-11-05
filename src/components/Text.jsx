import { useState } from "react";
import SpecificationGroup from "./SpecificationGroup";
import Display from "../assets/display.png";
import Chip from "../assets/idk.png";
import Camera from "../assets/camera.png";
import Battery from "../assets/battery.png";

const tabs = [
  "Technical Specifications",
  "Customer Reviews",
  "Shipping & Returns",
];

const specificationGroups = [
  {
    title: "Display",
    icon: Display,
    rows: [
      { label: "Screen Size", value: "6.7-inch Super Retina XDR" },
      { label: "Resolution", value: "2796 × 1290 pixels" },
      { label: "Refresh Rate", value: "ProMotion 120Hz" },
    ],
  },
  {
    title: "Performance",
    icon: Chip,
    rows: [
      { label: "Chip", value: "A17 Pro chip" },
      { label: "CPU", value: "6-core CPU" },
      { label: "GPU", value: "6-core GPU" },
    ],
  },
  {
    title: "Camera System",
    icon: Camera,
    rows: [
      { label: "Main Camera", value: "48MP, f/1.78" },
      { label: "Telephoto", value: "12MP 5x Optical Zoom" },
      { label: "Ultra Wide", value: "12MP, 120° FOV" },
    ],
  },
  {
    title: "Battery & Charging",
    icon: Battery,
    rows: [
      { label: "Capacity", value: "20 × 20" },
      { label: "Charging", value: "USB-C, MagSafe 15W" },
      { label: "Video Playback", value: "Up to 29 hours" },
    ],
  },
];

export default function TechnicalDetails() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="-mb-px flex gap-6 overflow-x-auto sm:gap-8">
          {tabs.map((tab, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`shrink-0 border-b-2 pb-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? "border-[#7C5CFC] text-[#7C5CFC]"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
      {activeTab === 0 && (
        <div className="mt-8 rounded-2xl bg-[#F7F7F8] p-5 sm:p-7">
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {/* Left column */}
            <div className="flex flex-col gap-8">
              <SpecificationGroup {...specificationGroups[0]} />
              <SpecificationGroup {...specificationGroups[2]} />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-8 md:border-l md:border-gray-200 md:pl-12">
              <SpecificationGroup {...specificationGroups[1]} />
              <SpecificationGroup {...specificationGroups[3]} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
