import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import slugify from "slugify";
import styled from "@emotion/styled";

const CategoriesList: FC<{}> = () => {
  const { distinct: categories } = useCategoriesListQuery();

  return (
    <Container>
      <TitleContainer>
        <Title>Categories</Title>
      </TitleContainer>
      <ContentContainer>
        <Categories>
          {categories.map(category => {
            const slug = `/categories/${slugify(category).toLocaleLowerCase()}`;

            return (
              <li key={slug}>
                <Link to={slug}>
                  <strong>{category}</strong>
                </Link>
              </li>
            );
          })}
        </Categories>
      </ContentContainer>
    </Container>
  );
};

const useCategoriesListQuery = () => {
  const { allMdx } = useStaticQuery<GatsbyTypes.CategoriesListQuery>(graphql`
    query CategoriesList {
      allMdx(
        sort: { fields: [frontmatter___category], order: ASC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        distinct(field: frontmatter___category)
      }
    }
  `);

  return allMdx;
};

const Container = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

const TitleContainer = styled.div(() => ({
  height: 35,
  paddingLeft: 8,
  paddingRight: 8,
  lineHeight: "1.4em",
}));

const Title = styled.h3(() => ({
  paddingLeft: 12,
  paddingRight: 12,
  textTransform: "uppercase",
  fontSize: 13,
  lineHeight: "35px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}));

const ContentContainer = styled.div(() => ({
  paddingLeft: 8,
  paddingRight: 8,
  lineHeight: "1.4em",
  height: "100%",
}));

const Categories = styled.ul(() => ({
  paddingLeft: 12,
  paddingRight: 12,
  lineHeight: "1.4em",

  "& > li > a > p": {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default CategoriesList;
