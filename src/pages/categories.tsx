import React, { FC } from "react";

import Layout from "@components/layout";
import CategoriesList from "@components/left-pane/categories-list";

const CategoriesPage: FC<{}> = () => {
  return (
    <Layout aside={<CategoriesList />}>
      <main>
        <h2>Categories</h2>
      </main>
    </Layout>
  );
};

export default CategoriesPage;
