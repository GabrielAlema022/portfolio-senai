import React from "react";
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Construindo experiências Digitais que inspiram</h2>
                <p>
                    Sou Gabriel Oliveira de Paula, e estou me tornando um Desenvolvedor front-end | Transformando ideias em soluções web visualmente impressionantes
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./images/img04.png" alt="" />
                    </div>
                    <img src="./images/img10.png" alt="" />
                </div>

                <div>
                    <div className="tech-icon">
                        <img src="./images/img01.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./images/img02.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./images/img03.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero