import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

	* {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
		color: inherit;
    }

    html {
        font-size: 100%;
        line-height: 1.2;

		@media (max-width: 920px) {
            font-size: 93.75%;
        }

        @media (max-width: 414px) {
            font-size: 87.5%;
        }
    }

	ul, li {
		list-style: none;
	}

    a {
        text-decoration: none;
		text-decoration-color: #000000;
        color: inherit;
    }

    button, input, select, option {
        display: inline-block;
        background-color: transparent;
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
    }

	button {
		border: 1px solid #333333;
		outline: none;
		padding: 5px 10px;
	}

    body {
        font-family: 'Montserrat', sans-serif;
		color: #333333;
    }

`;

const theme = {
    colors: {
        branco: '#ffffff',
        preto: '#121212',
        primeiro: "#100D02",
        secundo: "#F9BA0D",
        terceiro: "#ffffff",
        quarta: '#232324',
        textoBranco: "#ffffff",
        textoPreto: "#444444",
        textoCinza: "#dddddd",
        tituloBranco: "#ffffff",
        tituloPreto: "#444444"
    }
}

export {
    GlobalStyle,
    theme
}
