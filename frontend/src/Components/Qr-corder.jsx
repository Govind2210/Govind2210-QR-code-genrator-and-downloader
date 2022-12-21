import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";

import axios from "axios";


function Qrcorder() {

  const [url, setUrl] = useState("");
  const [qrImage, setQrImage] = useState("");
  const genrtaeQRCode = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/scanQrouter", { url: url })
      .then((res) => {
        console.log(res);
          setQrImage(res.data)
      });
  };

  return (
    <>
      <Container className="conatiner">
        <Card>
          <h2 className="title">Genrating and Downloading QR Code</h2>
          <CardContent>
            <Grid item cl={4} Ig={4} md={6} sm={12} xs={12}>
              <TextField
                label="Enter text here"
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
              <Button
               variant="contained"
                color="primary"
                className="btn"
                onClick={genrtaeQRCode}
              >
                Gentrate QR Code
              </Button>
              <br/>
            </Grid>
            <Grid  item cl={4} Ig={4} md={6} sm={12} xs={12} >
              {
                url.length > 0 && qrImage 
                ?
                <>
                  <a> <img src={qrImage} alt='arimage'/> </a>
                </>
                : 
                null 
              }
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Qrcorder;
