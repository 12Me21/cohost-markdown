too tired to write a coherent description, but basically :

the exact npm packages that cohost uses for markdown parsing are:
(determined by deobfuscating / reverse engineering the code. i am 99% confident this list is correct)

- remark-parse — base markdown parser (using micromark)
- remark-gfm — adds github-flavored-markdown features
- remark-rehype — converts markdown AST to html AST
- (custom) — adds `title` attribute to images that have alt text
- (custom) - modifies the output generated by `[^footnote]`s
- rehype-raw — parses any raw html in the input text
- rehype-sanitize — removes unsafe html elements and attributes
- (custom) - remove `position:fixed` from style attributes
- (custom) - remove css `--variables` from style attributes
- rehype-external-links — makes external links open in a new tab
- (custom) - parses `@mention`s
- (custom) — adds Iframely embeds
- (custom) — parses `:emote:`s
- (at this point, cohost uses `rehype-react` to generate the output, but there are several options. e.g. `rehype-stringify` outputs an html string)

missing parts:
- an extra processing step to render the custom components (<CustomEmoji>, <IframelyEmbed>, <Mention>) (very simple, just havent gotten around to it yet)
- options different output formats (DOM etc.)

eventually i'll turn the HTML AST into a DOM tree right after RemarkRehype (and do all the rest of the processing during that step),
that should save a few hundred kB, since i can use the browser's HTML/CSS parsing utilities rather than bundling nodejs libraries for that (ew)

