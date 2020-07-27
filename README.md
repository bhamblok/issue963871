
# Chrome bug: css-custom-properties inheritance


## This public repo shows a bug in Chrome.

> INFO: I noticed this bug for a while, already from Chrome v76.0.3796.0, I even posted an issue for it: https://bugs.chromium.org/p/chromium/issues/detail?id=963871

Today I'm posting this issue... again... This time for Chrome v84.0.4147.89, because it exists now on the public/production Chrome channel, with flags like "experimental webplatform features" and "experimental javascript" being **DISABLED**!

## What is the nature of the issue?

When you register some css-custom-properties: "CSS.registerProperty" and use them in a worklet to use the Paint- (or Layout-) API, the inheritance of the values are not matching the correct values.  

This issue only happens when there is are declarations of ***other*** css-custom-properties on the css:root, OR on the body, AND on a container-div of your dom-elements.
(It doesn't matter if this other css-custom-properties have been registered or not)

So... in my minimal test case I included an iframe (fix.html), which is a copy of index.html, but with this "other" css-custom-property on the container being commented out. You can see the code of "fix.html" which should be identical of "index.html", EXCEPT for this one "commented" line, (and yes, another difference in the file is the timeout-duration-value of the worklets being registered, which gives a clearer view of this issue in the console.logs)

## How to reproduce?

Navigate to https://bhamblok.github.io/issue963871/ and
- see the difference in the viewport
- see the logs in the devtools-console (the logs being shown after 500ms, are the logs of the "Fixed" version of the iframe where this one line of CSS-code has been put in comments)
