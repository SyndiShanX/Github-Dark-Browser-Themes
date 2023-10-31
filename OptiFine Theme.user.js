// ==UserScript==
// @name           OptiFine Theme
// @description    A style for OptiFine.net that changes the site to a red/gold theme
// @namespace      https://greasyfork.org/users/390290
// @author         SyndiShanX
// @include        https://optifine.net/*
// @version        1.22
// @run-at         document-body
// ==/UserScript==

if (document.getElementById('Download') != null) {
  if (document.getElementById('Download').children[0].tagName == 'IMG') {
    document.getElementById('Download').children[0].src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURQAAAOKfAEQWFgAAANmSGr0AAAAEdFJOU////wBAKqn0AAAAWUlEQVQ4T+2RwQ6AIAxD3fr//yy6groEoR704jttzUtWwoIR3xhmHBpPDHeO5H3DGgx2NKM6XmBQUI1oeu2qG8Dda4OekX/s2BUjU6/NG1vDTOSK0eM3zgAr0LYLyOU1vRwAAAAASUVORK5CYII='
  }
}
if (document.getElementsByClassName('tableDataIcon')[0] != null) {
  if (document.getElementsByClassName('tableDataIcon')[0].tagName == 'IMG') {
    document.getElementsByClassName('tableDataIcon')[0].src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURQAAAOKfAAAAAIu544gAAAADdFJOU///ANfKDUEAAAKkSURBVHhe7Y/RkuMgDATv8v8fffIwsoVBDmQlNlVHP8TMyBadP69f5hsE/obCvcOEC8waxAtMGiQIzBlkCEwZpAjMGKgA48/AJsBigCSB8X1ZAsML0wRGN8YLnBos35AgMGeQITBlkCIwY5AjMGGQJDBukCUwbJAmMGoQL9DAocMCgefdW2ALhAq0vN+9BbbAFtgC3yqA7hP4vdLratYKdFyWCrTztQJVUBYK4Ny84QhEYXbjeFCiskwApwKyskoABwUjskgAz4syBGsE8BCuw8kSAfwKWghlLKwQUKoGQVgocKsY1wmwuRssE2BxwKZUjgC6T+D3Cttbzw7lIgFGhe1R5wqwvG+3g1QBdr6AnDIFWB2wUUzrCESAvQq7gu3yBLD2gu1B1aQJYKtwu0+oc5YAlgrmjL7xSRLATqFKzfkgRwArBUZz63UiKQLYKDAKWujzIkMACwVGwKrADiQIYJ/ASFgesCnEC2CdwHjC+j5wBNANwk8Iy84/6g+iBdgN3x8twGr8/mABNhP3xwqwmLk/VIB56n5P4BOwR2A0uAMhTgBrBEaDOzgIE8AWgdHgDkCUAJYIjAZ3UAgSwA6B0eAOSIwAVgiMBneghAhgg8BocAcnEQJYIDAa3MFFgAC+FxgN7sDwcwF8LjAaOPhIAJ0P3zpg83B/rgCLp/tTBZgf788UYHy+f4EAk0EH5fcJR2AQfPpw/xoBng2oMdCnT4YA2tKfB5cEAZSsr5NHvAA6bc3RIVwA1Vnac59oATRXV4UuwQIoTFWnHrECyLa5xQ6hAoitEc99HAF0Pnyr/xpnoCka4gU4KrTNnXABTkinuhEtwIHS62qCBdifdMsKRyCK97u3wBbYAltgC2yBLbAFvkYgE17VZwtsARH4Xf53gdfrHyvXb2w0FtpvAAAAAElFTkSuQmCC'
  }
}
document.getElementsByTagName('link')[0].href = 'data:image/png;base64,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'

var synCss = `
body {
  background-image:url('') !important;
  background-color: #441616 !important;
}

A, .headerNav A, .footerText A, .headerTitle A {
  color: #E29F00 !important;
  text-shadow: 2px 2px #441616 !important;
}

A:hover, .headerNav A:hover, .footerText A:hover, .headerTitle A:hover {
  color: #BF8200 !important;
  text-shadow: 2px 2px #441616 !important;
  background-color: transparent !important;
}

.tableRoot {
  background-color: #722524 !important;
  box-shadow: 0px 0px 20px #000000 !important;
}

.header, .headerNav, .footer {
  background-color: #601F1F !important;
}

.downloadLine .colDownload A, .downloadButton A {
  border: 1px solid transparent !important;
}

.downloadLinePreview {
  background-color: #BF8200;
}

.colMirror A, .colChangelog A {
	width: 80px;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}

.downloadLine>TD>A {
  border-radius: 4px;
}

tr.downloadLine.downloadLineMore .colDownload  A, tr.downloadLine.downloadLineMore .colMirror A, tr.downloadLine.downloadLineMore .colChangelog A, tr.downloadLine.downloadLineMore .downloadButton A{
  color: #E29F00 !important;
  text-shadow: 2px 2px #441616 !important;
  background-color: transparent !important;
  border: 1px solid transparent !important;
}

tr.downloadLine.downloadLineMore .colDownload A:hover, tr.downloadLine.downloadLineMore .colMirror A:hover, tr.downloadLine.downloadLineMore .colChangelog A:hover, tr.downloadLine.downloadLineMore .downloadButton A:hover{
  background-color: #441616 !important;
}

tr.downloadLine.downloadLinePreview .colDownload  A, tr.downloadLine.downloadLinePreview .colMirror A, tr.downloadLine.downloadLinePreview .colChangelog A, tr.downloadLine.downloadLinePreview .downloadButton A{
  color: #441616 !important;
  text-shadow: 2px 2px transparent !important;
  background-color: #BF8200 !important;
  border: 1px solid #BF8200 !important;
}

tr.downloadLine.downloadLinePreview .colDownload A:hover, tr.downloadLine.downloadLinePreview .colMirror A:hover, tr.downloadLine.downloadLinePreview .colChangelog A:hover, tr.downloadLine.downloadLinePreview .downloadButton A:hover{
  background-color: #E29F00 !important;
}

.downloadLineMain:first-child {
  background-color: #E29F00
}

.downloadLineMain:first-child .colDownload  A, .colMirror A, .colChangelog A, .downloadButton A, input, select{
  color: #441616 !important;
  text-shadow: 2px 2px transparent !important;
  background-color: #E29F00 !important;
  border: 1px solid #E29F00 !important;
}

.downloadLineMain:first-child .colDownload A:hover, .colMirror A:hover, .colChangelog A:hover, .downloadButton A:hover, input:hover, select:hover{
  background-color: #BF8200 !important;
}

.tableData th {
  color: #FFFFFF !important;
  background-color: #E29F00 !important;
}

.tableDataDis, TD .tableDataEditable{
  color: #FFFFFF !important;
  background-color: transparent !important;
}

p, h1, h2, h3, ul, td, tr {
  color: #FFFFFF !important;
}

pre {
  background-color: #722524 !important;
  color: #FFFFFF !important;
}
`

var head = document.getElementsByTagName('head')[0];
var stylesheet = document.createElement("style");
stylesheet.type = 'text/css'
stylesheet.innerText = synCss
head.appendChild(stylesheet);