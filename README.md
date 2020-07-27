
# Chrome bug: css-custom-properties inheritance

> I noticed this bug for a while, already from Chrome v76.0.3796.0, I even posted an issue for it: https://bugs.chromium.org/p/chromium/issues/detail?id=963871

## This public repo shows a bug in Chrome.

Today I'm posting this issue again... This time for Chrome v84.0.4147.89, because it exists now on the public/production Chrome channel, with flags like "experimental webplatform features" and "experimental javascript" being DISABLED!

## What is the nature of the issue?

When you register some css-custom-properties: "CSS.registerProperty" and use them in a worklet like the Paint or Layout API, the inheritance of the values are not matching the correct values. This only happens when there is a declaration of another css-custom-property on a container of your dom-element.
(It doesn't matter if this other css-custom-property has been registered or not)

So... I included an iframe in my minimal test case example, showing exactly the same HTML/CSS/JS, but without this "other" css-custom-property on the container. You can see the code of "fix.html" which should be identical of "index.html", EXCEPT for this one line, which I put in comments, which declares that other css-custom-property on the container-div. (yes, another difference in the file is the timeout-duration-value of the worklets being registered, which gives a clearer view of the issue in the console.logs)

## How to reproduce?

Navigate to https://bhamblok.github.io/issue963871 and
- see the difference in the viewport
- see the logs in the devtools-console
  - the logs being shown after 500ms, are the logs of the "Fixed" version of the iframe, where this one line of CSS-code has been put in comments
