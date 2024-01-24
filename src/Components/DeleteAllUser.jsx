import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux";
import { deleteAllUsers } from '../store/action';


export const DeleteAllUser = () => {
    
    const dispatch = useDispatch();

    const DeleteAllUser = () =>{
        dispatch(deleteAllUsers());
    }

  return <Wrapper>


      <button className='btn clear-btn' onClick={DeleteAllUser}>
        clear All Users
      </button>
  </Wrapper>
  
};

const Wrapper = styled.section`
    .clear-btn{
        text-transform: capitalize;
        background-color:#db338a;
        margin-top: 2rem;
    }
`
