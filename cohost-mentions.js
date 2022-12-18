// this regex is an optimied version of the one that cohost uses
// (which they got from twitter's ‘twitter-text’ library)

const MENTION_REGEX = /(^|[^\w@\\/])([@＠])([a-zA-Z0-9-]{3,})(?![@＠]|[\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0100-\u024F\u0253\u0254\u0256\u0257\u0259\u025B\u0263\u0268\u026F\u0272\u0289\u028B\u02BB\u0300-\u036F\u1E00-\u1EFF]|:[/][/])/g

// due to several mistakes in their modified "preceeding chars" regex:
// /(:^|[^a-zA-Z0-9_!#$%&*@＠\\/]|(?:^|[^a-zA-Z0-9_+~.-\\/]))/,
// it ends up being equivalent to /(^|[^\w@\\/])/

// the list of escaped chars at the end was called ‘latinAccentChars’
// i have no idea how this list was derived

export default function CohostMentions(text) {
	const list = []
	
	void text.replace(MENTION_REGEX, (match, before, at, handle, offset)=>{
		const start = offset + before.length
		const end = start + handle.length + 1
		list.push({handle, start, end})
		return match
	})
	
	if (list.length) {
		const nodes = []
		let last = 0
		list.forEach(({start, end, handle}, i, list)=>{
			nodes.push({type:'text', value:text.slice(last, start)})
			nodes.push({
				type: 'element',
				//tagName: 'Mention',
				tagName: 'a',
				properties: {
					handle,
					class: 'mention',
					href: `https://cohost.org/${handle}`
				},
				children: [{type: 'text', value: `@${handle}`}],
			})
			last = end
			if (i == list.length-1)
				nodes.push({type:'text', value: text.slice(last)})
		})
		return nodes
	}
}
