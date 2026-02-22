'use client';

export function SkeletonCard() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 animate-pulse">
      {/* Header skeleton */}
      <div className="flex items-start justify-between mb-4 gap-4">
        <div className="flex-1 space-y-2">
          <div className="h-6 bg-secondary rounded w-3/4" />
          <div className="h-4 bg-secondary rounded w-1/2" />
        </div>
        <div className="w-5 h-5 bg-secondary rounded flex-shrink-0" />
      </div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-secondary rounded w-full" />
        <div className="h-3 bg-secondary rounded w-5/6" />
      </div>

      {/* Progress skeleton */}
      <div className="space-y-2">
        <div className="flex items-center justify-between mb-2">
          <div className="h-3 bg-secondary rounded w-16" />
          <div className="h-3 bg-secondary rounded w-12" />
        </div>
        <div className="h-2 bg-secondary rounded w-full" />
      </div>

      {/* Footer skeleton */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="h-3 bg-secondary rounded w-2/3" />
      </div>
    </div>
  );
}
