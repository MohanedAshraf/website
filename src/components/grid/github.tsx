import React, { useCallback, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Button from "@/components/button";
import Card from "@/components/card";
import { ActivityCalendar } from "react-activity-calendar";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total: {
    [year: number]: number;
    [year: string]: number;
  };
  contributions: Array<Activity>;
}

interface ApiErrorResponse {
  error: string;
}

async function fetchCalendarData(username: string): Promise<ApiResponse> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
  );
  const data: ApiResponse | ApiErrorResponse = await response.json();

  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${
        (data as ApiErrorResponse).error
      }`
    );
  }

  return data as ApiResponse;
}

export default function Github() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { theme } = useTheme();
  const cardRef = useRef<HTMLDivElement>(null);
  const [daysToShow, setDaysToShow] = useState<number>(300);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchCalendarData("mohanedashraf")
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  useEffect(fetchData, [fetchData]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries && entries.length > 0) {
        const cardWidth = entries[0].contentRect.width;
        const calculatedDaysToShow = Math.floor(cardWidth / 3); // Adjust as needed
        setDaysToShow(calculatedDaysToShow);
      }
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const selectLastNDays = (contributions: any[]) => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - daysToShow);

    return contributions.filter((activity) => {
      const activityDate = new Date(activity.date);
      return activityDate >= startDate && activityDate <= today;
    });
  };

  if (error) {
    return (
      <Link href="https://github.com/mohanedashraf" target="_blank" className="block h-full">
        <Card
          ref={cardRef}
          variant="glass"
          className="relative flex h-full flex-col items-center justify-center"
        >
          <p className="text-center w-48 bento-lg:w-64 text-muted-foreground text-sm">
            This component is down. Please email me!
          </p>
        </Card>
      </Link>
    );
  }

  if (loading || !data) {
    return (
      <Link href="https://github.com/mohanedashraf" target="_blank" className="block h-full">
        <Card
          ref={cardRef}
          variant="glass"
          className="relative flex h-full flex-col items-center justify-center"
        >
          <p className="text-center w-48 bento-lg:w-64 text-muted-foreground text-sm">
            Loading...
          </p>
        </Card>
      </Link>
    );
  }

  return (
    <Link href="https://github.com/mohanedashraf" target="_blank" className="block h-full">
      <Card
        ref={cardRef}
        variant="glass"
        className="relative flex h-full flex-col items-center justify-center"
      >
        <ActivityCalendar
        loading={loading}
        data={selectLastNDays(data?.contributions || [])}
        theme={{
          light: ["#e5e7eb", "#2dd4bf", "#14b8a6", "#fbbf24", "#f59e0b"],
          dark: ["#1f2937", "#2dd4bf", "#14b8a6", "#fbbf24", "#f59e0b"],
        }}
        //@ts-ignore
        colorScheme={theme}
        blockRadius={20}
        maxLevel={4}
        />
      </Card>
    </Link>
  );
}
