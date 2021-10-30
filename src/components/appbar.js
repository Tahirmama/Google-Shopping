import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeIcon from '@mui/icons-material/Home';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import "./App.css"

//for drawer
const drawerWidth = 280;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


// navbarf other functions
const Search = styled('div')(({ theme }) => ({
    position: 'relative',

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    color: "grey",
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '30ch',
        },
    },
}));

export default function Bar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {

        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <AppBar position="static" style={{
                backgroundColor: "white", padding: "15px", boxShadow: "none",
                position: "fixed",
                borderBottom: "1px solid #dadce0",
                display: "flex",
                transition: "boxShadow .2s ease-in-out",
                width: "100%",
                zIndex: "999"
            }}
                open={open}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        style={{ color: "grey" }}
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}

                    >
                        <MenuIcon />
                    </IconButton>
                    <a href="https://shopping.google.com" style={{ display: "inline-flex", textDecoration: "none" }}>
                        <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google"

                            style={{ display: "block " }} />
                        <span style={{
                            font: "400 20px/24px 'Google Sans','GoogleSans-Local','Roboto',sans-serif",
                            color: "rgba(0,0,0,0.541)",
                            marginLeft: " 0.25rem",
                            whiteSpace: "nowrap",
                        }}>
                            Shopping
                        </span>
                    </a>
                    <Search style={{
                        marginLeft: "11%",
                        width: 620,
                        borderRadius: "24px",
                        backgroundColor: "white",
                        outline: "1px solid 	#D3D3D3",
                    }}>
                        <SearchIconWrapper >
                            <SearchIcon style={{ color: "gray" }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            style={{ color: "black" }}
                            placeholder="What are you looking for ?"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" >
                            <Badge >
                                < ShoppingCartOutlinedIcon style={{
                                    color: "rgb(95, 99, 104)",
                                }} />

                            </Badge>
                        </IconButton>
                    </Box>
                    <Button style={{

                        color: "white",
                        backgroundColor: "#1a73e8",
                        textTransform: "none",
                        width: "6.5%",
                    }} >
                       Sign in </Button>

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <a href="https://shopping.google.com" style={{ display: "inline-flex", textDecoration: "none"}}>
                        <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="Google"

                            style={{ display: "block "}} />
                        <span style={{
                            font: "400 20px/24px 'Google Sans','GoogleSans-Local','Roboto',sans-serif",
                            color: "rgba(0,0,0,0.541)",
                            
                            whiteSpace: "nowrap",
                        }}>
                            Shopping
                        </span>
                    </a>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <List style={{ color: "rgba(60,64,67,1)", }}>
                    {['Home', 'Your saved items'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <HomeIcon /> : <BookmarksIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>

        </Box>
    );
}
