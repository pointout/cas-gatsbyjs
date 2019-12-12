import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
/*
export default ({ data }) => {
    const item = data.text
    return (
        <Layout>
            <SEO title={ item.Bezeichnung } keywords={ item.Artikelnummer + ' ' + item.Bezeichnung} description={ item.Beschreibung } />
            <div class="w-full">
                <div class="w-full">
                    <h1 className="text-3xl my-8">{ item.Bezeichnung }</h1>
                </div>
                <div className="flex-none w-full sm:flex-none md:flex lg:flex xl:flex -mx-4">
                    <div className="m-4 w-64">
                        <Img 
                            fluid={data.bild.childImageSharp.fluid} 
                            alt={ "Produktbild " + item.Bezeichnung }    
                        />
                    </div>
                    <div className="m-4">
                        <div>Artikelnr.: { item.Artikelnummer }</div>
                        <div dangerouslySetInnerHTML={{__html: item.Beschreibung}} />
                        <div className="text-lg my-4">Preis: EUR {item.Preis}</div>
                    </div>
                </div>    
            </div>
            <div className="my-8">
                <Link to="/" className="text-purple-800 underline hover:text-red-900">Home</Link>
            </div>
        </Layout>
    )
}
export const query = graphql`
    query($ArtNr: String!,$image: String!) {
        text: catfanshopCsv( Artikelnummer: { eq: $ArtNr } ) {
            Artikelnummer
            Bezeichnung
            Beschreibung
            Preis
        }
        bild: file(relativePath: { eq: $image }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`
*/
export default ({ data, pageContext }) => {
    return (
        <Layout>
            <SEO title={ pageContext.name } description={ pageContext.description } />
            <div class="w-full">
                <div class="w-full">
                    <h1 className="text-3xl my-8">{ pageContext.name }</h1>
                </div>
                <div className="flex-none sm:flex w-full -mx-4">
                    <div className="m-4 w-full">
                        <Img 
                            fluid={data.bild.childImageSharp.fluid} 
                            alt={ "Produktbild " + pageContext.description }    
                        />
                    </div>
                    <div className="m-4 w-full">
                        <div>Artikelnr.: { pageContext.ArtNr }</div>
                        <div dangerouslySetInnerHTML={{__html: pageContext.description}} />
                        <div className="text-lg my-4">Preis: EUR {pageContext.price}</div>
                    </div>
                </div>    
            </div>
            <div className="my-8">
                <Link to="/" className="text-purple-800 underline hover:text-red-900">Home</Link>
            </div>
        </Layout>
    )
}
export const query = graphql`
    query($image: String!) {
        bild: file(relativePath: { eq: $image }) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`