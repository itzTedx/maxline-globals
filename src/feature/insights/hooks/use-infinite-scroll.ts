"use client";

import { useEffect, useRef, useState } from "react";

interface UseInfiniteScrollProps {
	onLoadMore: () => void;
	hasMore: boolean;
	loading: boolean;
}

export function useInfiniteScroll({
	onLoadMore,
	hasMore,
	loading,
}: UseInfiniteScrollProps) {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const observerRef = useRef<IntersectionObserver | null>(null);
	const loadMoreRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "100px",
				threshold: 0.1,
			}
		);

		observerRef.current = observer;

		if (loadMoreRef.current) {
			observer.observe(loadMoreRef.current);
		}

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, []);

	useEffect(() => {
		if (isIntersecting && hasMore && !loading) {
			onLoadMore();
		}
	}, [isIntersecting, hasMore, loading, onLoadMore]);

	return { loadMoreRef };
}
