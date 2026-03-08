import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const { pathname, search, hash, state } = useLocation();

    useLayoutEffect(() => {
        if (state?.restoreScroll) {
            const routeKey = `${pathname}${search}${hash}`;
            const savedPosition = Number(sessionStorage.getItem(`celphix:scroll:${routeKey}`) || 0);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    window.scrollTo({ top: Number.isFinite(savedPosition) ? savedPosition : 0, left: 0, behavior: 'instant' });
                });
            });

            return;
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname, search, hash, state]);

    return null;
}

export default ScrollToTop;