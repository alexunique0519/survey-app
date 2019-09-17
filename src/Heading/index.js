import styled from "styled-components";

const Heading = styled.h2`
   font-style: ${props => props.fontStyle || "normal"};
   font-size: ${props=>fontSize || "18px"};
   font-weight: ${props=>fontWeight || "300"};
   line-height: ${props=>lineHeight || "1.2"};
   text-align: ${props=>textAlign || "center"};
   color: ${props=> color || "F1F1F1"}
   `;

export default Heading;