/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {     //  async (input) => { const graphql = input.graphql ...
    const { createPage } = actions  // const createPage = actions.createPage
/*
    // Create Detailpages from CSV 
  const resultPages = await graphql (`
        query {
            allCatfanshopCsv {
                nodes {
                    Artikelnummer
                    Bild
                }      
            }
        }
    `)
    resultPages.data.allCatfanshopCsv.nodes.forEach( node => {
        const category = node.Warengruppe.toLowerCase() + "/"
        createPage({
            // Path for this page — required    
            path: category + node.Artikelnummer,
            component: path.resolve(`./src/templates/catalog-detailpage.js`),
            context: {
                ArtNr: node.Artikelnummer,
                image: "products/" + node.Bild
            }
        })
    }) 
*/
   // Create Detailpages from CSV
    const resultPages = await graphql (`
        query {
            allCatfanshopCsv {
                nodes {
                    Artikelnummer
                    Bezeichnung
                    Bild {
                        relativePath
                    }
                    Beschreibung
                    Warengruppe
                    Preis
                }      
            }
        }
    `)
    resultPages.data.allCatfanshopCsv.nodes.forEach( node => {
        const category = node.Warengruppe.toLowerCase()
        createPage({
            // Path for this page — required    
            path: category + '/' + node.Artikelnummer + "/",
            component: path.resolve(`./src/templates/catalog-detailpage.js`),
            context: {
                ArtNr: node.Artikelnummer,
                name: node.Bezeichnung,
                image: node.Bild.relativePath,
                description: node.Beschreibung,
                group: node.Warengruppe,
                price: node.Preis
            }
        })
    })

    // Create Categrorie pages from CSV
    const resultCategories = await graphql (`
        query {
            allCatfanshopCsv {
                distinct(field: Warengruppe)
            }
        }
    `)
    resultCategories.data.allCatfanshopCsv.distinct.forEach( category => {
        createPage({
            // Path for this page — required    
            path: category.toLowerCase() + '/',
            component: path.resolve(`./src/templates/catalog-categoriepage.js`),
            context: {
                Category: category
            }
        })
    })
}
