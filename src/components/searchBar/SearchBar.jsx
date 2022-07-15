import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const SearchBar = () => {
    const SearchInputStyle = styled(InputBase) (({ theme }) => ({
        color: 'inherit',
        margin: '5px',
        border: '1px solid white',
        borderRadius: '55px',
        transition: '.5s',
        padding: '0 1rem',
        fontSize: '18px',
        "&::placeholder": {
            fontSize: '8px',
        },
        "&:hover": {
            borderRadius: '10px',
        },
    }));
  return (
    <SearchInputStyle
        placeholder="Search…"
        inputProps={{ 'aria-label': 'searchInput' }}
    />
  )
}

export default SearchBar