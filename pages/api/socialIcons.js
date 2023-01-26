import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';


export default function social() {
    return (
      <div>
        <h1>Get connected with me!</h1>
        <LinkedinShareButton
          url={'https://www.linkedin.com/in/yufan-derrick-xu-02372814b/'} >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    )
  }