let textarea_resize = (t)=>{
	t.style.height = "0"
	t.parentNode.style.height = `${t.scrollHeight+1}px`
	t.style.height = ""
}

let setup_textarea
{
	let style = document.createElement('style')
	style.textContent = `
textarea-container, textarea-container > textarea {
	display: block;
	box-sizing: content-box;
	min-height: 5em;
	height: 0;
	font: inherit;
}

textarea-container {
	padding: 0.75rem;
}

textarea:focus {
/*	box-shadow:
		inset 4px 0 0 -2px rgb(37,99,235),
		inset -4px 0 0 -2px rgb(37,99,235);*/
}

textarea-container > textarea {
	resize: none;
	overflow-y: scroll;
	margin: 0;
	border: none;
	padding: 0;
	width: 100%;
	height: 100%;
	
	appearance: none;
}
`
	document.head.append(style)
	
	setup_textarea = (textarea, callback)=>{
		textarea_resize(textarea)
		
		let lock = false
		textarea.addEventListener('input', e=>{
			textarea_resize(textarea)
			if (lock)
				return
			lock = true
			window.setTimeout(()=>{
				lock = false
				callback(e)
			})
		}, {passive: true, capture: true})
	}
}
