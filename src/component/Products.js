import React from "react";
import { Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { loadProducts } from "../redux/actions";
import Button from "@material-ui/core/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyle = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 180,
    width: 250,
    margin: "auto",
    marginTop: 15,
  },
});
const Products = () => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const searchRef = useRef();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  const { products } = useSelector((state) => state.products);
  let product = products;
  const Csearch = () => {
    product = products.filter((ele) => {
      if (
        ele.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
      ) {
        return ele;
      }
    });

    searchRef.current.value = "";
    console.log(product);
  };
  const classe = useStyle();
  return (
    <div style={{ backgroundColor: "lightsteelblue" }}>
      <div>
        <input
          type="text"
          ref={searchRef}
          placeholder="search..."
          style={{ width: "300px", margin: "10px" }}
        />{" "}
        <Button onClick={() => Csearch()}>Search</Button>
      </div>
      <div>
        <Button onClick={() => setCategory("")}>ALL</Button>
        <Button onClick={() => setCategory("cupcakes")}>CupCakes</Button>
        <Button onClick={() => setCategory("doughnut")}>Doughnuts</Button>
        <Button onClick={() => setCategory("cake")}>Cakes</Button>{" "}
      </div>

      <Container className="mt-5">
        <Grid container spacing={6}>
          {product
            .filter((ele) => {
              if (category === "") {
                return ele;
              } else if (ele.category === category) {
                return ele;
              }
            })
            .map((p) => (
              <Grid item xs={6} md={4}>
                <Card className={classe.root}>
                  <CardActionArea>
                    <Carousel>
                      <CardMedia className={classe.media} image={p.img1} />
                      <CardMedia className={classe.media} image={p.img2} />
                      <CardMedia className={classe.media} image={p.img3} />
                    </Carousel>

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
      </Container>
    </div>
  );
};

export default Products;
