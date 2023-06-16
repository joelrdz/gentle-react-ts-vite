import { AppBar, Toolbar, Typography } from '@mui/material';

export type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = () => {
	return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hapytrak
        </Typography>
      </Toolbar>
    </AppBar>
	);
};

export default Navbar;
