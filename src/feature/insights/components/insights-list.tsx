'use client'

import { useState } from 'react'

import { useInfiniteScroll } from '../hooks/use-infinite-scroll'
import { InsightCard, InsightCardProps } from './insight-card'

interface InsightsListProps {
  initialInsights: InsightCardProps[]
  pageSize?: number
}

export function InsightsList({
  initialInsights,
  pageSize = 6,
}: InsightsListProps) {
  const [insights, setInsights] = useState<InsightCardProps[]>(initialInsights)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const { loadMoreRef } = useInfiniteScroll({
    onLoadMore: async () => {
      if (loading || !hasMore) return

      setLoading(true)
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // In a real application, you would fetch the next page from your API
        const nextPage = page + 1
        const startIndex = (nextPage - 1) * pageSize
        const endIndex = startIndex + pageSize
        const newInsights = initialInsights.slice(startIndex, endIndex)

        if (newInsights.length === 0) {
          setHasMore(false)
          return
        }

        setInsights((prev) => [...prev, ...newInsights])
        setPage(nextPage)
      } catch (error) {
        console.error('Error loading more insights:', error)
      } finally {
        setLoading(false)
      }
    },
    hasMore,
    loading,
  })

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight) => (
          <InsightCard key={insight.id} {...insight} />
        ))}
      </div>

      {/* Loading indicator */}
      {loading && (
        <div className="flex justify-center py-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}

      {/* Intersection observer target */}
      <div className="h-4" ref={loadMoreRef} />
    </div>
  )
}
