import styled from "styled-components";
import useMediaQuery from "../hooks/UseMediaQuery";
type PSImageProps = {
   width: string;
   leftper: string;
   topper: string;
};

const PSImage = styled.img<PSImageProps>`
   width: ${(props) => `${props.width}rem`};
   height: auto;
   position: absolute;
   left: ${(props) => `${props.leftper}%`};
   top: ${(props) => `${props.topper}%`};
   object-fit: cover;
   transform: rotate(-8deg);
`;

const PostCardLocation = () => {
   const { isMobile } = useMediaQuery();

   return (
      <PSImage
         src="https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/pspostcard.png?alt=media&token=813e03dc-4dfe-4a42-aaaa-1fab688359c7"
         alt="Tilted Image"
         width={isMobile ? "8" : "15"}
         leftper={isMobile ? "55" : "60"}
         topper={isMobile ? "15" : "15"}
      />
   );
};

export default PostCardLocation;
