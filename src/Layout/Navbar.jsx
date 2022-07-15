import React from 'react';
import {AppBar, Toolbar} from '@mui/material';
import styled from '@emotion/styled';
import {theme} from '../assets/Theme';
import SearchBar from '../components/searchBar/SearchBar';
import Logo from '../components/Logo/Logo';
import NavIconSet from '../components/navIconSet/NavIconSet';
import AdditionIconSet from '../components/additionIconSet/AdditionIconSet';
import UserProfile from '../components/userprofile/UserProfile';

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // width: "100%"
}));
const Navbar = () => {

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Logo/>
                <SearchBar/>
                <NavIconSet />
                <AdditionIconSet />
                <UserProfile />
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar