import {createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root{
    --color-lightGray: #E3E3E3;
    --color-mediumGray: #C6C6C1;
    --color-darkGray: #535353;
    --color-lilac: #A6A7D3;
    --color-bgHeader: #0F1096;
    --color-mediumPurple: #585BBA; 
    --color-white: #FFFF;
	--color-red: #E30224;
	--color-green: #22806B;
}
`;