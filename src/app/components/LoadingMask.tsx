"use client";

import { useEffect, useState } from "react";

interface LoadingMaskProps {
  isLoading: boolean;
}

export default function LoadingMask({ isLoading }: LoadingMaskProps) {
  const [show, setShow] = useState(isLoading);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    if (!isLoading) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(500 - elapsedTime, 0);

      const timeout = setTimeout(() => setShow(false), remainingTime);
      return () => clearTimeout(timeout);
    } else {
      setShow(true);
    }
  }, [isLoading, startTime]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-white z-50 transition-opacity duration-300 flex items-center justify-center
        ${show ? "opacity-100" : "opacity-0"}`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin" />
        <p className="text-lg font-light">Loading gallery...</p>
      </div>
    </div>
  );
}