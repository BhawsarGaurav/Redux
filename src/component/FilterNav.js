import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { loadProducts } from "../redux/actions";
import { Container } from "react-bootstrap";
const useStyle = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export default function FilterNav() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  const { products } = useSelector((state) => state.products);
  const classe = useStyle();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  function handler(event){
    const pro=event.target;
    const product=products.filter(p=>p.name===pro);
}
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="ALL" {...a11yProps(0)} />
          <Tab label="CAKE" {...a11yProps(1)} />
          <Tab label="CUPCAKES" {...a11yProps(2)} />
          <Tab label="DOUGHNUT" {...a11yProps(3)} />
          
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container spacing={6}>
            {products.map((p) => (
              <Grid item xs={6} md={4}>
                <Card className={classe.root}>
                  <CardActionArea>
                    <CardMedia className={classe.media} image={p.img1} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {p.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid container spacing={6}>
            {products
              .filter((pros) => pros.category === "cake")
              .map((p) => (
                <Grid item xs={6} md={4}>
                  <Card className={classe.root}>
                    <CardActionArea>
                      <CardMedia className={classe.media} image={p.img1} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {p.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Grid container spacing={6}>
            {products
              .filter((pros) => pros.category === "cupcakes")
              .map((p) => (
                <Grid item xs={6} md={4}>
                  <Card className={classe.root}>
                    <CardActionArea>
                      <CardMedia className={classe.media} image={p.img1} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {p.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Grid container spacing={6}>
            {products
              .filter((pros) => pros.category === "doughnut")
              .map((p) => (
                <Grid item xs={6} md={4}>
                  <Card className={classe.root}>
                    <CardActionArea>
                      <CardMedia className={classe.media} image={p.img1} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {p.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </TabPanel>
        
      </SwipeableViews>
    </div>
  );
}
