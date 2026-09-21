import { useState, useEffect } from "react";

/**
 * Custom hook to track window scroll position
 * @returns {{ scrollY: number, isScrolled: boolean }}
 */
export const useScrollPosition = (threshold = 50) => {
    const [scrollPosition, setScrollPosition] = useState({
        scrollY: 0,
        isScrolled: false,
    });

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollPosition({
                scrollY: currentScrollY,
                isScrolled: currentScrollY > threshold,
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrollPosition;
};

export default useScrollPosition;
