#　 Notion Blog(CMS)
A simple blog application created using Notion and Notion SDK.

## Usage

1. Duplicate Notion template
   Duplicate it and bring it to your Notion environment.
   Click the Duplicate button in the upper right corner to duplicate.

   - [CMS Template](https://www.notion.so/sugimura/Notion-CMS-Template-9229b7d0e883429fa1890db16b475cd4)

2. Get APIKey

- [developers.notion.com](https://developers.notion.com/)

3. Create a development environment

```zsh
git clone https://github.com/YutaSugimura/notion-blog.git
cd notion-blog
cp .env.example .env # Copy the .env file
```

Set it up for your environment.

```txt
NOTION_TOKEN="Internal Integration Token" // https://developers.notion.com/
PARENT_PAGE_ID=9229b7d0e883429fa1890db16b475cd4 // Duplicate https://www.notion.so/sugimura/Notion-CMS-Template-9229b7d0e883429fa1890db16b475cd4
DATABASE_ID=2cd870c27cbf4524b2d478068a0c85de // https://www.notion.so/sugimura/2cd870c27cbf4524b2d478068a0c85de?v=991ec498ab6c4675b08a9822b64b0c40
```

4. Execution

```zsh
  yarn install
  yarn dev
```

## Specifications

### Supported blocks

- text
- Heading 1
- Heading 2
- Heading 3
- Bulleted List
- Numbered List

### Unsupported blocks

- Todo List
- Toggle List

(Not supported by the SDK)

- Quote
- Image
- Code
- Web Bookmark
- Audio
- Video
- File
