import { marked } from 'marked'
import { join } from 'path'
import fs from 'fs'
export default async function ResumePage() {
  return <section className="prose" dangerouslySetInnerHTML={{ __html: await getMarkdownContent() }}></section>
}

const filePath = join(process.cwd(), 'data', 'resume.md')

async function getMarkdownContent() {
  const fileContent = fs.readFileSync(filePath, 'utf8')
  return marked.parse(fileContent)
}
