
import "./Lib.css";
import { Component } from "react";
import { Button, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import Person3Icon from '@mui/icons-material/Person3';


export default class LibHeader extends Component {
  render() {
    return(
      <div className="library-header-container">
        <div className='library-header-search'>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="input search text"
              inputProps={{}}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        <div className="library-header-buttons">
          <Button variant="outlined">新建项目+</Button>
          <Button variant="contained">上传</Button>
          <div className="library-header-user">
            <NotificationsNoneIcon fontSize="large"/>
            <MenuIcon fontSize="large"/>
            <Person3Icon fontSize="large"/>
          </div>
        </div>
      </div>
    )
  }
}