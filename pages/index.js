import Head from 'next/head'
import { marked } from 'marked'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const placeholder = `
  # welcome to the sea
## remeber the sky is blue
[title](https://www.example.com)
here is some \`code\`
\`\`\`
a code block
\`\`\`
*this is italic*
- list a
- list b 
> blockquote
![alt text](image.jpg)
**this is bold** 
`

  // const [rawMark, setRawMark] = useState("
  const [rawMark, setRawMark] = useState(placeholder)
  //")
  const [parser, setParser] = useState(<h3>Welcome to the sea</h3>)

  // let mark = marked.parse(rawMark)
  useEffect(
    () => setParser(marked.parse(rawMark)),
    [rawMark])

    console.log(parser)

  let mark = parser

  const handleChange = (e) => {
    setRawMark(e.target.value)
  }

  function convertToHtml() {
    return { __html: mark };
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Markdown Preveiwer</title>
        <meta name="description" content="markdown previewer" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1>Markdown Preview</h1>
        <i id='instructor'>write your markdown in the editor on the left and watch your magic on the right</i>
        <div className="markdown-window">
          <textarea
            value={rawMark}
            onChange={handleChange}
            id="editor" />

          <div id="preview">
            <p className="" dangerouslySetInnerHTML={convertToHtml()} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Developed by Praise oyegoke
      </footer>
    </div>
  )
}


