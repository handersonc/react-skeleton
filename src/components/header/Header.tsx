// react imports
import * as React from "react"
import { css } from "@emotion/react"
import styled from "@mui/styled-engine"

// MUI components imports
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"

// icon imports
import MoreVert from "@mui/icons-material/MoreVert"
import AccountCircle from "@mui/icons-material/AccountCircle"
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite"

// custom
import logo from "assets/img/logo-white.png"
import { theme } from "../../theme"

const FlexGlow = css({
  flexGrow: 1,
})

const DesktopMenu = styled("div")({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
})

const MobileMenu = styled("div")({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
})

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement>()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<HTMLElement>()

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(undefined)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(undefined)
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = "primary-search-account-menu"

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  )

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="start tasks" color="inherit">
          <PlayCircleFilledWhiteIcon />
        </IconButton>
        <p>Start Tasks</p>
      </MenuItem>
      <MenuItem onClick={handleMenu}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="primary"
        style={{ background: "primary", boxShadow: "none" }}
        data-testid="header"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <img src={logo} height="45px" alt="logo" />
          <div css={FlexGlow}></div>

          <DesktopMenu>
            <IconButton aria-label="show play button" color="inherit">
              <PlayCircleFilledWhiteIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </DesktopMenu>

          <MobileMenu>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </MobileMenu>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}

export default Header
