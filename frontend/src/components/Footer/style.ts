import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .7rem;

  padding: 1rem 0rem;

  background: var(--gray);

  > h3, p {
    color: var(--white);
  }

  > h3 {
    font-size: 1rem;
  }

  > p {
    font-size: .7rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem;

    > h3 {
      font-size: 1.4rem;
    }

    > p {
      font-size: .8rem;
    }
  }
`

export const ButtonToBeginning = styled.button`
  color: var(--white);
  font-size: 1.7rem;

  background: transparent;
`