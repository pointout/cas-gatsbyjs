import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data, pageContext }) => { 
    const products = data.products
    
    return (
        <Layout>
            <SEO title={ pageContext.Category } />
            <section className="px-4">
                <div className="flex flex-wrap -m-4">
            { products.edges.map(({node}) => (
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
                        <Link to={ pageContext.Category.toLowerCase() + '/' + node.Artikelnummer +'/' }>
                            <h1 className="text-xl my-4 mt-16">{ node.Bezeichnung }</h1>
                        </Link>
                        <Link to={ pageContext.Category.toLowerCase() + '/' + node.Artikelnummer +'/' }>
                            <Img 
                                fluid={node.Bild.childImageSharp.fluid} 
                                alt={ "Produktbild " + node.Bezeichnung }    
                            />
                        </Link>
                        <div>Artikelnr.: { node.Artikelnummer }</div>
                        <div dangerouslySetInnerHTML={{__html: node.Beschreibung}} />
                        <div className="text-lg my-4">Preis: EUR {node.Preis}</div>
                    
                </div>    
            ))}
                </div>
            </section>
            <div className="my-8">
                <Link to="/" className="text-purple-800 underline hover:text-red-900">Home</Link>
            </div>
        </Layout>
    ) 
}
export const query = graphql`
    query($Category: String!) {
        products: allCatfanshopCsv(filter: {Warengruppe: {eq: $Category}}) {
            edges {
                node {
                    Artikelnummer
                    Bezeichnung
                    Bild {
                        childImageSharp {
                            fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    Preis
                } 
            }
        }
    }
`