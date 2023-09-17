import styled from "styled-components";

export const ModelCarsWrapper = styled.div<{ dark?: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;
  position: relative; 
  
  ::-webkit-scrollbar {
  width: 12px;               
}

::-webkit-scrollbar-track {
  background: transparent;        
}

::-webkit-scrollbar-thumb {
  background-color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
  border-radius: 20px;     
}

  .select-header {
    color: ${(props) =>
      props.dark ? "var(--primary-color)" : "var(--secondary-color)"};
    font-weight: bold;
    font-family: "Lexend", sans-serif;
    font-size: 20px;
    margin: 10px 0;
    position: sticky; 
    top: 0; 
    z-index: 1; 
  }

  .scrollbar-custom {
    ::-webkit-scrollbar {
      width: 3px; 
      height: 3px; 
    }

    
    ::-webkit-scrollbar-thumb {
      background-color: var(
        --light-gray
      ); 
      border-radius: 6px; 
    }

    
    ::-webkit-scrollbar-thumb:hover {
      background-color: var(
        --light-gray
      ); 
    }

    scrollbar-color: var(--light-gray) transparent;
  }

  .options {
    display: flex;
    flex-direction: column;
    font-family: "Lexend", sans-serif;
    overflow-y: auto;
  }

  .option {
    color: #868e96;
    cursor: pointer;
    margin-left: 10px;
    transition: color 0.3s ease;

    &.selected {
      color: #0077b5;
    }
  }
`;
