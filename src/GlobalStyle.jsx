import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
   box-sizing: border-box;
}


body {
   margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
   margin-block: 0;
}

button,
input[type='submit'] {
   cursor: pointer;
}

:root {
}

@media (prefers-color-scheme: dark) {
   :root {}
}
`;
