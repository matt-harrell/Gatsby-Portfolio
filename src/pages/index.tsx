import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </main>
    </Layout>
    
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
