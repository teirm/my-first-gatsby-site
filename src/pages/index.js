import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>Using a tutorial :3.</p>
            <StaticImage
                alt="Blahaj out and about"
                src="../images/blahaj.jpg"
            />
        </Layout>
    )
}

export default IndexPage
