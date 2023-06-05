import { useRef } from "react";
import { useScroll, animated } from "@react-spring/web";
import styled from "styled-components";

const PAGE_COUNT = 2;

const Body = styled.div`
    background-color: brown;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const FullPage = styled.div`
    width: 100vw;
    height: 100vh;
`;

const AnimatedLayers = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;

    & > * {
        pointer-events: none;
        width: 100%;
        height: 100%;
        position: fixed;
        inset: 0;
    }
`;

const Dot = styled(animated.div)`
    background-color: green;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export default function ZoomIn() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        container: containerRef,
        default: {
            immediate: true,
        },
    });

    return (
        <Body ref={containerRef}>
            <AnimatedLayers>
                <div style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem" }}>Living Lab</div>
                <Dot
                    style={{
                        clipPath: scrollYProgress.to((val) => `circle(${val * 100}%)`),
                    }}
                ></Dot>
            </AnimatedLayers>
            {new Array(PAGE_COUNT).fill(null).map((_, index) => (
                <FullPage key={index} />
            ))}
        </Body>
    );
}
