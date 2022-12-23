const FIXED_CUTOFF = +new Date("2022-06-29T18:00Z")
const VAR_CUTOFF = +new Date("2022-11-14T06:00Z")

export default function filterCss({date}) {
	date = +date
	return node=>{
		if (node.nodeType==Node.ELEMENT_NODE) {
			let st = node.style
			if (date >= VAR_CUTOFF)
				for (let prop of st)
					if (prop.startsWith('--'))
						st.removeProperty(prop)
			if (date >= FIXED_CUTOFF)
				if (/fixed/i.test(st.position))
					st.position = 'static'
		}
	}
}
