export default function CohostImageTitles(elem) {
	if (elem.tagName=='img') {
		if (elem.properties?.alt)
			elem.properties.title = elem.properties.alt
	}
}
