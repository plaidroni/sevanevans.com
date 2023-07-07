import styled from "styled-components";

const StyledImg = styled.img`
   width: 12vw;
   height: auto;
   position: absolute;
   left: 10vw;
   top: 10vh;
   object-fit: cover;
   transform: rotate(-8deg);
`;

const PostCardLocation = () => (
   <StyledImg
      src="https://firebasestorage.googleapis.com/v0/b/bodymx-80bc1.appspot.com/o/pspostcard.png?alt=media&token=813e03dc-4dfe-4a42-aaaa-1fab688359c7"
      alt="Tilted Image"
   />
);

export default PostCardLocation;
