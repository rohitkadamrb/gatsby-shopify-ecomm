import React from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery } from 'components';
import { Grid } from './styles';
export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      id
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default function ProductTemplate(props) {
  return (
    <Layout>
      <Grid>
        {console.log(props)}
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
          <p>{props.data.shopifyProduct.description} </p>
        </div>
        <div>
          <ImageGallery
            images={props.data.shopifyProduct.images}
          ></ImageGallery>
        </div>
      </Grid>
    </Layout>
  );
}
