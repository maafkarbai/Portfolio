"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/components/ui/Logo";

const technologies = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    icon: "⚛️",
    description: "Modern UI library",
  },
  {
    id: 2,
    name: "Node.js",
    category: "Backend",
    icon: "🟢",
    description: "Server-side JavaScript",
  },
  {
    id: 3,
    name: "PostgreSQL",
    category: "Database",
    icon: "🐘",
    description: "Advanced SQL database",
  },
  {
    id: 4,
    name: "MongoDB",
    category: "Database",
    icon: "🍃",
    description: "Document database",
  },
  {
    id: 5,
    name: "TypeScript",
    category: "Frontend",
    icon: "📘",
    description: "Typed JavaScript",
  },
  {
    id: 6,
    name: "Next.js",
    category: "Frontend",
    icon: "⏭️",
    description: "React framework",
  },
  {
    id: 7,
    name: "Express",
    category: "Backend",
    icon: "🚂",
    description: "Web framework",
  },
  {
    id: 8,
    name: "Docker",
    category: "DevOps",
    icon: "🐳",
    description: "Containerization",
  },
  {
    id: 9,
    name: "Kubernetes",
    category: "DevOps",
    icon: "☸️",
    description: "Container orchestration",
  },
  {
    id: 10,
    name: "AWS",
    category: "Cloud",
    icon: "☁️",
    description: "Cloud platform",
  },
  {
    id: 11,
    name: "Redis",
    category: "Database",
    icon: "🔴",
    description: "In-memory store",
  },
  {
    id: 12,
    name: "GraphQL",
    category: "Backend",
    icon: "📊",
    description: "Query language",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Cloud",
];

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const filteredTechnologies =
    selectedCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === selectedCategory);

  // Create duplicated array for infinite scroll effect
  const duplicatedTechnologies = [
    ...filteredTechnologies,
    ...filteredTechnologies,
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          // Reset to 0 when we reach the end of the original array
          if (nextIndex >= filteredTechnologies.length) {
            return 0;
          }
          return nextIndex;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [filteredTechnologies.length, isHovered]);

  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="mb-8 flex items-center gap-4">
        <Logo />
        <Image
          src=""
          alt="Techlogies Logo"
          width={60}
          height={60}
          className="flex-shrink-0"
        />
        <div>
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Welcome to your Techlogies CRM dashboard
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">No contacts yet</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              No deals in progress
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">No active projects</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$0</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No recent activity to display
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Technologies That Power Our Solutions */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center mb-6">
              Technologies That Power Our Solutions
            </CardTitle>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-[#4689ec] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </CardHeader>

          <CardContent>
            {/* Horizontal Carousel Container */}
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex gap-6 py-8">
                <div
                  className="flex gap-6 transition-transform duration-1000 ease-linear"
                  style={{
                    transform: `translateX(-${currentIndex * 320}px)`,
                    width: `${duplicatedTechnologies.length * 320}px`,
                  }}
                >
                  {duplicatedTechnologies.map((tech, index) => (
                    <div
                      key={`${tech.id}-${index}`}
                      className="flex-shrink-0 w-80"
                    >
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 h-full">
                        <div className="text-center">
                          <div className="text-4xl mb-4">{tech.icon}</div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            {tech.name}
                          </h3>
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-white text-gray-600 rounded-full mb-3">
                            {tech.category}
                          </span>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fade edges for infinite scroll effect */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Status indicator */}
            <div className="flex justify-center mt-4">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isHovered
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isHovered ? "bg-red-500" : "bg-green-500 animate-pulse"
                  }`}
                ></div>
                {isHovered ? "Paused" : "Auto-scrolling"}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
