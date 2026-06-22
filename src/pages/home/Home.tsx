import React from 'react'

function Home() {
    return (
        <>
            <div style={{
                background: "#312e81",
                display: "flex",
                justifyContent: "center"
            }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        color: "white",
                        width: "100%",
                        maxWidth: "1280px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: "1rem",
                            paddingBottom: "1rem"
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "3rem",
                                fontWeight: "bold"
                            }}
                        >
                            Seja Bem Vinde!
                        </h2>

                        <p style={{ textAlign: "center", margin: 0 }}>
                            Expresse aqui os seus pensamentos e opiniões!
                        </p>

                        <div
                            style={{
                                borderRadius: "0.5rem",
                                color: "white",
                                border: "2px solid white",
                                padding: "0.5rem 1rem",
                                cursor: "pointer"
                            }}
                        >
                            Nova Postagem
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            style={{
                                width: "66%"
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home