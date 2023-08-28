import React from 'react'
import './Leftsidebar.css'
import Leftsidebaroption from './Leftsidebaroption';
import TwitterIcon from "@material-ui/icons/Twitter";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
function Leftsidebar() {
  return (
    <div className='leftsidebar'>
      <TwitterIcon className="leftsidebar__twitterIcon" />
        {/* <MailOutlineIcon/> */}
        <Leftsidebaroption active Icon={HomeIcon} text="Home"/>
        <Leftsidebaroption Icon={SearchIcon} text="Explore"/>
        <Leftsidebaroption Icon={NotificationsNoneIcon} text="Notifications"/>
        <Leftsidebaroption Icon={MailOutlineIcon} text="Messages"/>
        <Leftsidebaroption Icon={BookmarkBorderIcon} text="Bookmarks"/>
        <Leftsidebaroption Icon={ListAltIcon} text="Lists"/>
        <Leftsidebaroption Icon={PermIdentityIcon} text="Profile"/>
        <Leftsidebaroption Icon={MoreHorizIcon} text="More"/>
        {/* Button -> Tweet */}
      <Button variant="outlined" className="tweet_button" fullWidth>
        Tweet
      </Button>
    </div>
  )
}

export default Leftsidebar