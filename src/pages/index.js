import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavCategories from "../components/navCategories"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-3xl my-8">Catfan Goodies</h1>
    <NavCategories />
    <h2 className="text-lg">Willkommen zu unserem neuen Catfan Goodies Katalog!</h2>

    <div className="my-8">
      <p>Das ist ein Beispiel zur Erstellung eines Online Catalogs unter Verwendung einer csv-Datei.</p>
      <p>Diese Seiten wurden für einen Vortrag bei einem Contao Austria Stammtisch erstellt. Die Produkte sind rein fiktiv.</p>
    </div>
  </Layout>
)

export default IndexPage
