// this regex is an optimied version of the one that cohost uses
// (which they got from twitter's ‘twitter-text’ library)

const MENTION_REGEX = /(^|[^\w@/\\])([@＠][a-zA-Z0-9-]{3,})(?!:[/][/]|[@＠\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0100-\u024F\u0253\u0254\u0256\u0257\u0259\u025B\u0263\u0268\u026F\u0272\u0289\u028B\u02BB\u0300-\u036F\u1E00-\u1EFF])/g

// due to several mistakes in their modified "preceeding chars" regex:
// /(:^|[^a-zA-Z0-9_!#$%&*@＠\\/]|(?:^|[^a-zA-Z0-9_+~.-\\/]))/,
// it ends up being equivalent to /(^|[^\w@\\/])/

// the list of escaped chars at the end was called ‘latinAccentChars’
// i have no idea how this list was derived

// todo: replicate this bug:
/*
@12-

@12-@12- ← is not parsed because they use a dumb check instead of lookahead

@12-@12-@12-

*/

export default function CohostMentions(_) {
	return node=>{
		if (node.nodeType!=Node.TEXT_NODE)
			return
		let parts = node.data.split(MENTION_REGEX)
		if (parts.length<=1)
			return
		let list = []
		for (let i=0; i<=parts.length-3; i+=3) {
			let text = parts[i]+parts[i+1]
			let mention = parts[i+2]
			let e = document.createElement('a')
			let handle = mention.slice(1)
			e.className = 'mention'
			e.href = `https://cohost.org/${handle}`
			e.textContent = "@"+handle
			list.push(text, e)
		}
		list.push(parts[parts.length-1])
		return list
	}
}
