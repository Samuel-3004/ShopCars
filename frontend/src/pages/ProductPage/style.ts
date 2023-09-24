import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const BodyContainerHome = styled.body<{ dark?: boolean }>`
  background-color: ${(props) => (props.dark ? "var(--black)" : "white")};
  border: 1px solid transparent;
  font-family: "Open sans", sans-serif;
`;

export const ContainerShop = styled.div`
  padding-top: 4rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    /* height: 85vh; */

    padding: 3rem;
    margin-top: 6rem;
  }
`;

export const ProductMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  @media (min-width: 768px) {
    width: 60%;
    padding: 0;
  }
`;

export const FigureContainer = styled.figure`
  width: 100%;

  border-radius: 10px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  > img {
    width: 100%;

    border-radius: 10px;

    object-fit: cover;
  }

  @media (min-width: 768px) {
    max-width: 100%;

    > img {
      height: 403px;
    }
  }
`;

export const InfoAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 1080px) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`;

export const InfoSection = styled.section<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  padding: 1rem;

  border-radius: 6px;

  background: ${(props) => (props.dark ? "var(--gray)" : "white")};

  > h2 {
    color: ${(props) => (props.dark ? "var(--white)" : "var(--black)")};
    font-size: 0.9rem;
  }

  > button {
    background-color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

    color: var(--white);
    font-weight: 600;
    font-size: 0.9rem;

    padding: 0.7rem;
    width: fit-content;
    transition: 0.2s ease;

    &:hover {
      background-color: var(--primary-color-hover);
    }
  }

  @media (min-width: 768px) {
    padding: 1.6rem;
    gap: 1.4rem;

    width: 55%;

    > h2 {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const KmContainer = styled.div<{ dark?: boolean }>`
  display: flex;
  gap: 1rem;

  > span {
    padding: 0.4rem;

    background: ${(props) => (props.dark ? "var(--black)" : "#f3f3f3")};

    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    font-size: 0.6rem;
    font-weight: 600;

    border-radius: 6px;
  }

  @media (min-width: 768px) {
    > span {
      padding: 0.6rem;

      font-size: 0.74rem;
    }
  }
`;

export const PriceContainer = styled.div<{ dark?: boolean }>`
  > span {
    color: ${(props) => (props.dark ? "var(--white)" : "var(--black)")};
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

export const Description = styled.section<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  border-radius: 6px;

  background: ${(props) => (props.dark ? "var(--gray)" : "var(--white)")};

  > h3 {
    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

    font-size: 1rem;
  }

  > p {
    color: ${(props) => (props.dark ? "var(--white)" : "var(--black)")};

    font-size: 0.8rem;

    line-height: 150%;
  }

  @media (min-width: 768px) {
    padding: 1.6rem;

    width: 45%;

    > p {
      line-height: 180%;

      /* height: 160px; */

      overflow-y: auto;
    }
  }

  @media (max-width: 1080px) {
    width: 100%;
  }
`;

export const PicturesContainer = styled.ul<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  padding: 1rem;

  border-radius: 6px;

  background: ${(props) => (props.dark ? "var(--gray)" : "var(--white)")};

  > h3 {
    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

    font-size: 1rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    > img {
      width: 28%;
      cursor: pointer;
      border-radius: 5px;
    }

    > span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 0.9rem;
      font-style: italic;

      color: var(--light-gray);
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const AdvertiserSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  padding: 1rem;

  border-radius: 6px;

  background: var(--gray);

  > h3 {
    color: var(--light-gray);

    font-size: 1rem;
  }

  > span {
    &:nth-child(1) {
      background: var(--yellow);

      color: var(--black);

      border-radius: 50%;

      padding: 0.4rem 0.7rem;
    }

    &:nth-child(2) {
      color: var(--white);
      font-weight: 600;
      font-size: 1rem;
    }
  }

  > p {
    color: var(--light-gray);

    font-size: 0.8rem;

    line-height: 150%;
  }

  > button {
    background: var(--primary-color);

    color: var(--white);
    font-weight: 600;
    font-size: 0.9rem;

    padding: 0.7rem;
    width: fit-content;
    transition: 0.2s ease;

    &:hover {
      background-color: var(--primary-color-hover);
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CommentsSection = styled.section<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  padding: 1rem;

  border-radius: 6px;

  background: ${(props) => (props.dark ? "var(--gray)" : "var(--white)")};

  > h3 {
    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
  }

  @media (min-width: 768px) {
    gap: 1.7rem;

    padding: 2rem;
  }
`;

export const ListOfComments = styled.ul<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  > h3 {
    font-size: 0.7rem;
    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    opacity: 0.6;
  }
`;

export const CardComment = styled.li<{ dark: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;

  > section {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    > div {
      background: var(--yellow);

      border-radius: 50%;
      border: 0.3px solid var(--black);

      display: flex;
      align-items: center;
      justify-content: center;

      width: 25px;
      height: 25px;

      font-size: 0.7rem;
      font-weight: 600;
    }

    > span {
      &:nth-child(2) {
        font-size: 0.8rem;
        color: ${(props) => (props.dark ? "var(--white)" : "var(--black)")};
        font-weight: 600;
      }

      &:nth-child(3) {
        font-size: 0.8rem;
        color: ${(props) => (props.dark ? "var(--white)" : "var(--black)")};
      }
    }
  }

  > p {
    color: ${(props) => (props.dark ? "var(--white)" : "var(--black)")};
    font-size: 0.8rem;
    line-height: 150%;
  }

  .open_modal_comments {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

export const PostAComment = styled.section<{ dark: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  padding: 1rem;

  border-radius: 6px;

  background: ${(props) => (props.dark ? "var(--gray)" : "var(--white)")};

  > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    :nth-child(1) {
      background: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};

      color: ${(props) => (props.dark ? "var(--gray)" : "var(--white)")};
      font-size: 0.8rem;

      border-radius: 50%;

      padding: 0.4rem 0.7rem;
    }

    :nth-child(2) {
      color: ${(props) => (props.dark ? "var(--white)" : "var(--black)")};
      font-size: 0.8rem;
      font-weight: 600;
    }
  }

  > textarea {
    padding: 0.7rem 1rem;

    border-radius: 8px;
    border: 2px solid
      ${(props) => (props.dark ? "var(--white)" : "var(--light-gray)")};
    outline: none;

    color: var(--light-gray);

    transition: 0.2s ease;

    resize: none;

    background: ${(props) => (props.dark ? "var(--gray)" : "var(--white)")};

    &:focus {
      border: 2px solid var(--primary-color);
    }

    &::placeholder {
      color: var(--light-gray);
    }

    @media (min-width: 768px) {
      padding: 1.4rem;
      height: 140px;
    }
  }

  > form > button {
    // Alterei, era um button
    background-color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

    color: var(--white);
    font-weight: 600;
    font-size: 0.9rem;

    padding: 0.7rem;
    width: fit-content;
    transition: 0.2s ease;

    &:hover {
      background-color: var(--primary-color-hover);
    }
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  width: 440px;
`;

export const PicturesContainerDesktop = styled.ul<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  padding: 2rem;

  border-radius: 6px;

  width: 100%;

  background: ${(props) => (props.dark ? "var(--gray)" : "var(--white)")};

  > h3 {
    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

    font-size: 1rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    > span {
      color: var(--white);
      font-size: 0.9rem;
      font-style: italic;

      display: flex;
      align-items: center;
      gap: 1rem;
    }

    > img {
      width: 28%;
      border-radius: 10px;
      object-fit: contain;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AdvertiserSectionDesktop = styled.section<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  padding: 2rem;

  border-radius: 6px;

  background: ${(props) => (props.dark ? "var(--gray)" : "var(--white)")};

  > h3 {
    color: var(--white);

    font-size: 1rem;
  }

  > span {
    &:nth-child(1) {
      background: var(--yellow);

      color: var(--black);
      font-size: 1.2rem;

      border-radius: 50%;

      width: 60px;
      height: 60px;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:nth-child(2) {
      color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};
      font-weight: 600;
      font-size: 1rem;
    }
  }

  > p {
    color: ${(props) => (props.dark ? "var(--white)" : "var(--gray)")};

    font-size: 0.8rem;

    line-height: 150%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkTag = styled(Link)<{ dark?: boolean }>`
  background: ${(props) =>
    props.dark ? "var(--primary-color)" : "var(--secondary-color)"};

  color: var(--white);
  font-weight: 600;
  font-size: 0.9rem;

  padding: 0.7rem;
  width: fit-content;
  transition: 0.2s ease;

  border-radius: 6px;

  &:hover {
    background-color: var(--primary-color-hover);
  }
`;

export const SchemaMessage = styled.span`
  font-size: 0.6rem;
  color: var(--gray);
`;
