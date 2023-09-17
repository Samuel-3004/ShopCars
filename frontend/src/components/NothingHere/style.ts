import { styled } from "styled-components";

export const NothingHereContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.7rem;

  font-size: 2.9rem;

  padding: 1rem 4rem;
  margin: 0 auto;
  
  color: var(--gray);

  > p {
    color: var(--black);
    font-size: .7rem;
    color: var(--gray);
  }

  @media (min-width: 768px) {
    font-size: 5rem;
    margin: 2rem 4rem;

    > P {
      font-size: 1.4rem;
    }
  }
`