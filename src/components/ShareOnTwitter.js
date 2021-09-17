import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import twitterCircleWhite from "../assets/twitterCircleWhite.svg";

function ShareOnTwitter(props) {

  const urlString = () => {
    var text;
    if (props.inOhmieCard) {
      // text = "When you're ready, come on over at @OlympusDAO and earn rewards every 8 hours. #OHMISBACKED #OHMIECARD"
      text = "Leading up to Fohmo 3 @OlympusDAO is giving away 33 @Ledger wallets to secure your $OHM. To participate share your Ohmie Card on Twitter with the hashtags #OHMISBACKED #OHMIECARD"
    } else {
      // text = "I'm an Ohmie, are you anon? #OHMISBACKED #PROOFOFOHMIE @OlympusDAO";
      text = "Leading up to Fohmo 3 @OlympusDAO is giving away 33 @Ledger wallets to secure your $OHM. To participate share your Proof of Ohmie on Twitter with the hashtags #OHMISBACKED #PROOFOFOHMIE"
    }
    return `https://twitter.com/intent/tweet?url=https%3A%2F%2Fohmie.olympusdao.finance&text=${encodeURIComponent(text)}`;
  }
  
  return (
    <Box display="flex" justifyContent="center">
      <Button
        id="create-pfp-trigger-button"
        variant="contained"
        // color="primary"
        // onClick={handleCompleteAward}
        className="ohmie-button"
        href={urlString()}
        target="_blank"
        data-text="w"
        data-hashtags="olympus"
        // endIcon={<TwitterIcon />}
      >
        <Typography className="btn-text" style={{marginRight: "6px"}}>Share on Twitter</Typography>
        <img alt="test" height="24" src={twitterCircleWhite}/>
      </Button>
    </Box>
  )
}

export default ShareOnTwitter;