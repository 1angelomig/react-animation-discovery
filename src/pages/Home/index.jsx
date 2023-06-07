import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
    const styles = { fontSize: "3rem", display: "flex", justifyContent: "center", alignItems: "center" };

    return (
        <div>
            <Parallax pages={7.5}>
                <ParallaxLayer style={{ backgroundColor: "grey" }} offset={0} speed={0} factor={1.5}>
                    <div style={{ height: "100vh", ...styles }}>Hero</div>
                </ParallaxLayer>
                <ParallaxLayer style={{ backgroundColor: "yellow" }} offset={1.5} speed={0}>
                    <div style={{ height: "100vh", ...styles }}>Open Innovation</div>
                </ParallaxLayer>
                <ParallaxLayer style={{ backgroundColor: "brown" }} offset={2.5} speed={0}>
                    <div style={{ height: "100vh", ...styles }}>Living Lab</div>
                </ParallaxLayer>
                <ParallaxLayer style={{ backgroundColor: "green" }} offset={3.5} speed={0}>
                    <div style={{ height: "100vh", ...styles }}>Nós Alcançamos</div>
                </ParallaxLayer>
                <ParallaxLayer style={{ backgroundColor: "orange" }} offset={4.5} speed={0}>
                    <div style={{ height: "100vh", ...styles }}>Nossas Histórias</div>
                </ParallaxLayer>
                <ParallaxLayer style={{ backgroundColor: "black", color: "white" }} offset={5.5} speed={0}>
                    <div style={{ height: "100vh", ...styles }}>Testemunho</div>
                </ParallaxLayer>
                <ParallaxLayer style={{ backgroundColor: "white" }} offset={6.5} speed={0}>
                    <div style={{ height: "100vh", ...styles }}>Junte-se à Liga</div>
                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 0, end: 6.5 }} style={{ backgroundColor: "red", height: "5rem", ...styles }}>
                    <div>navbar</div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}
