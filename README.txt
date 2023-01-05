## FOREWORD

I hate parsing markdown, and I hate writing it even more.

## INSTRUCTIONS

### BUILDING:

(requires nodejs + npm)

-[1] install libraries
 - run `npm install` (yes i know it's scary there are a lot of dependencies but half of that is just for the build system)
-[2] build
 - run `rollup -c` (i.e. `./node_modules/rollup/dist/bin/rollup -c`) to generate `_build.js`
 
>[note] this is just necessary to merge everything into a single file that can be easily loaded on a webpage. technically it could run as-is, in node (but the code uses browser APIs so this wouldn't actually work)

### LOADING:

_build.js can be loaded in multiple ways:

- from a module:\
```
<script type=module>
import Markdown from './_build.js'

document.body.append(Markdown("*hello!*"))
</script>
```

- as a regular script (imo this is better, since it can be loaded synchronously):\
```
<script src=_build.js></script>

<body>

<script>
document.body.append(Markdown("*hello!*"))
</script>
```

>[💡tip] do not ask how this is possible

## NOTES

I've specifically disabled micromark-extension-gfm-tagfilter because it's really bad and breaks things

## SECURITY

This package is **not safe for work**.
