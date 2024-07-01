import {MainBody, SectionProduct, SectionNews, SectionSpecificity, Layout} from '@ui'
export default function Home() {
  return (
    <main
      className={`font-onest `}
    >

      <Layout >     
        <MainBody />
        <SectionProduct />
        <SectionNews />
        <SectionSpecificity />
      </Layout>  
    </main>
  )
}