import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";

export default function Teste() {
    const parallax = useRef(null);
    const [scale, setScale] = useState(0);

    const PAGES = 8;

    useEffect(() => {
        const handleScroll = (e) => {
            const height = parallax.current.space;
            const scrollablePages = PAGES - 1;
            const scrollHeight = height * scrollablePages;

            const scrollTop = e.target.scrollTop;
            const percentScrolled = scrollTop / scrollHeight;
            const currentPage = Math.floor(percentScrolled * scrollablePages);
            const currentPageScrollTop = scrollTop - height * currentPage;
            const currentPagePercent = currentPageScrollTop / height;

            if (currentPage === 0) {
                setScale(currentPagePercent);
            }
        };

        const container = parallax.current.container.current;
        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Parallax ref={parallax} pages={PAGES}>
            <ParallaxLayer sticky={{ start: 0, end: PAGES - 1 }}>
                <div style={{ height: "100vh", backgroundColor: "orange", transform: `scale(${scale * 2})` }} />
            </ParallaxLayer>
            {/* <ParallaxLayer sticky={{ start: 5, end: PAGES - 1 }}>
                <div style={{ height: "100vh", backgroundColor: "orange", transform: `scale(${scale * 2})` }} />
            </ParallaxLayer> */}
        </Parallax>
    );
}
