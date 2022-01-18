import * as React from "react"

import { Link, graphql } from "gatsby"
import Layout from '../components/layout'

const TagsPage  = ({ data }) => {
    return (
        <Layout pageTitle="Tags">
            {
                data.allMdx.group.map(tag => (
                    <li key={tag.fieldValue}>
                        <Link to={`/tags/${tag.fieldValue}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                        </Link>
                    </li>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
    `

export default TagsPage
