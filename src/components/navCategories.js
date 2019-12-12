/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "./layout.css"

const NavCategories = () => {
  const data = useStaticQuery(graphql`
    query {
      allCatfanshopCsv {
        distinct(field: Warengruppe)
      }
    }
  `)
  
  const categories = data.allCatfanshopCsv.distinct
  return (
    <div className="p-4">
      <div className="flex flex-wrap -mx-4">
        { categories.map((category) => (
          <div className="flex flex-wrap px-4 my-2 w-full sm:w-1/3 ">
            { <Link to={category.toLowerCase()} className="text-white bg-purple-800 hover:bg-purple-600 rounded p-4 m-auto" >{category}</Link> }
          </div>
        )) }
      </div>
    </div>
  )
}

export default NavCategories
