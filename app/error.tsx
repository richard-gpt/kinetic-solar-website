"use client";

import { useEffect } from "react";
import { Sun, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-destructive/5 via-background to-accent/5 px-4">
      <Sun className="h-24 w-24 text-destructive/20 mb-8" />
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-muted-foreground text-center max-w-md mb-8">
        We apologize for the inconvenience. Please try again or contact support
        if the problem persists.
      </p>
      <div className="flex gap-4">
        <Button size="lg" onClick={reset}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
        <Link href="/">
          <Button variant="outline" size="lg">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
