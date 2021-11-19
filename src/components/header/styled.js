import styled from 'styled-components';

export const Wrapper = styled.div`
  display:flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;


  input {
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 100%;  
      height: 34px; 
      padding: 4px;
      font-weight: 500;
  }

  button{
      background-color: #225ed8;
      padding: 4px 16px;
      margin: 0 13px;  
      border-radius: 8px;
      font-weight: bold;
      font-size: 18px;
  
  &:hover{
      background-color: #2c5282;
      box-shadow: 3px 1px 3px 1px gray;
  }

   span{
       font-weight: bold;
       color: #ffff;
   }

  }

`;
