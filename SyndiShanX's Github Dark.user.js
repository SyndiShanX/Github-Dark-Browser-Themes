// ==UserScript==
// @name           SyndiShanX's Github Dark
// @author         SyndiShanX
// @include        https://github.com/*
// ==/UserScript==
var synCss = `
:root {
	--border-primary: #5c5c5c;
	--border-secondary: #c0c0c0;
	--selection-background: #265d96;
	--selection-text: #ffffff;
	--red-button: #712828;
	--red-button-hover: #973535;
	--red-button-border: #ba1212;
	--green-button: #508055;
	--green-button-hover: #629d68;
	--green-button-border: #00b344;
	--white-button: #ffffff;
	--white-button-hover: #dedede;
	--white-button-border: #808080;
	--gray-button: #4f545c;
	--gray-button-hover: #646970;
	--gray-button-border: #919599;
	--scrollbar-width: 8px;
	--color-primer-border-active: #c0c0c0!important;
	--color-border-default: #5c5c5c!important;
	--color-border-muted: #5c5c5c!important;
	--color-canvas-subtle: #1a1a1a!important;
	--color-canvas-default: #1a1a1a!important;
	--bgImage: url('data:image/png;base64,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');
	--bgDarkness1: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAVUExURRgYGBcXFxUVFRoaGhsbGx0dHRwcHFbDdK8AAAAJcEhZcwAADr8AAA6/ATgFUyQAAAUASURBVEjHTZbBjttIDETZamXOTWmQs+T8QGta67Nm5fgcYIM9ezGz+f9P2FeUjKyBMIZFdReLxeKYpcvc0uBu1YrdajFbzcz/eKSLl3rxOZPjUyKMPEi58kOfWrJstbovxdz1rhv5fMsbTwh76mvZZmvdmIrxPhml8zmNyaxxiFmuydr4NnvmoRdbdEYbfC67nn4Sxhsvvm5+8fEjufsLOXPZAFxelPNhVvqNb0fOTk6piZwqXMvXjVtVWiNYKzaDkFJKx5WFvDSqYKq+WV9tLxmsM4BrKWngZ16YEq/kpVmhLspOOwChyKmC68yW2b3f+KnfKG2tHLG+k3MVmHUH9WiVnMrjsm6ppHsS2WmYfU0+eFMYwTOMgjkm3VWbef8mrImCeqAMdCEotq00bnSYBjMIvFJJ2aGQbCqG3dKygMSnXwRTWHtC5ht5n8KwA9g+lfYBhPIAq+1AzYtyvl0XXv4AGDwnylNOjXpmANc06y4qrwYAepZKo4hLnTjfim7NzY3KVgi0Nb1Wa+lVcigE2i4gSe0XxVRMr4Q91VCkNCGez6A2vzy4ZQVWukL7cF2ePOdOnbefFHTdLaX7Rnn3RC1NuqmRQ5gkz7iGAri4D2Ur5MTzArODhL5bSLlSNc0ry1BnE/tArxcwV7WaoixnRoAwiOKZisWzTop7iv1SlJTzzQekC5hv4vkg8j36I3bRbip5Sz6PpifiGZCzJpNPCHinQqRZ/aKBK/UISXcFgUiZrq9qcw6KU1AMN0ltb4ccLENrbWJXsvwfzxzCFEBxeRHZ13dN3BsBnt1X/s03ieWTXiS/6ry1nuxOEphbDKAu+Qi3EAm5KyfFgjLb0ISmqSZdyU1baj5BsKpZJJ2KLMpCkWLY+kyROQRcnr1+8lxCYqYBLm5/idhgd49vlPcNIaTXh7qQ92qplx7E7gC7PpQgO+sqwQmjSNukw13EYgcTLR/KAjOl4mmiqOn63E1yEExNeibfZIqYDDmHlOcBKQc1dD6oiWa2TbKxB+C//DMPs+bTX0Sf5tNvYk7B7sjQaaoofvJ8nhOaUNOBUv31TRR3gSLHQAl7o9ojWIHiQRDhGbcoS6nzZCUcooatSxeWfhMb4SIv4SDKkWEFz/LefXhSLE8YNWtfRXH/kJfm2h027MeJFlLmcphj1EOGG+z6aRT1CBNQHCAavNDzEsTOMZiZvTGAEyF4LzWswssxQcjBrp8UA1qKGdeNK3f7E9kGxX0XUgZ7Dw7Y5fMLytCz9FAttHtCL4u22kGxTHlTGaWbuoNd4QHZKm9rYXD4kixVEy6ZljotlDTxbtVEIPQyUtxghw1bxv6PZmrF9rxsFRFrYwzyZ/9NMUtIQ9kfFCPZF5Rth6efFB/npNKLXcSVGBgaPi1it2ppnpZBVZt2dMUpYImpiz0IN2Pw3OVYdASKs5/CyhavolhrN1g41Md85pVp+fLrPX5bkEL/dqp4EMXlu0bqX9DZ37Li1Z7shpTdgi9Jr8p6bqeyTwFnYA38LKNgq/YEu3e7xs0O7+M/1aWNKBsJL6EuP6bxNIo+zcep2lDSA6Z168KulXNQTC9G1nPKP5TzIzaNlP2QDwTFKG9wEYsdEdoRXH8gcc4TD0ualZzGTW4Sf1BsU8gbPGPU1Q1SL1VlHbwGk0migDeFw4tL02Zg0ZVylxXfEegsu36Va51uEXr7zpTw+JAy8ib4/h/o4qxp5wlvXAAAAABJRU5ErkJggg==');
	--bgDarkness2: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURRQUFBMTExISEhYWFhgYGBcXFzQNGvwAAAAJcEhZcwAADr8AAA6/ATgFUyQAAASVSURBVEjHTZbBbiM5DESp1vhOSph7y/kBykzfBwj27oU3//8rW0XJ2Q0GHMPNloqPJcoi5T6iNDNxUQlXkRAR+3yWu6nfbVTk2FkQOh6U6viilihSxd1sqpjxXRPk41PFP4ZAqvqQOHpRwfvI0MNG6QV7YBEs40WiP4ZVPDSVyTWi2VBqqC+EHnixu92tv4qZ3ZAz1CFYbztHsZnsnECOekGOU9f87diVpQWChMqAQpSiB7ZU5JXOgrNqatYKrQOCXbU0fI0XzoJX6kQW6iqsHQKByFAFthOZw6ySHOsBQywREzkXxURAdRdHjuOx8nG5CmGXNgyC2wodelqnzF64l4dYfVBrQUHk1dCFRCyugR0X7IACc1SC71CzkjOyNSqF5F+dlEmtFFzxCXmvpQGPX0x7QYI+jVWxnMmcj2smYi0IqNyZ41nPgGAvg3uhchcIQM+gAUXc/cT6oty1Ql4n/jqxWact0g6KgLZTSGH7idjZddoLFacj6Qly3oFtvj2xS0BWuYC9XT+c68HOyxcKuuCZctGTV0Et9IR55iCctGdugwKynXQ2Qy14rqDYaHQaBnRXGDobrEz6kO53aM5WV/KpOAIIjYjHQsyguY/KNyOtDBRtJL4Pcl4gpywXw+RRCrpebHThEyZC5LCsW7aBURVOld154NRXyL0SYLoY7qmshohLIgYbOqiEbD8Aqwfp0pb/47wWAWK9cVPQxYl7IOQnOnlEmgWZxS6uF77pnjSYSR5AyRxOC0Koh27ElDKkBdXEmjRELNCMxoysZtI6DlvoRJEkDLoosqaB9d3rN2dNiyUgNfki2KQb+QnlfQBZ6U92oQZkV/qBdBvoWtOEXbkV5eSgKH5ycSNYjIMTLW86QUadbl+cUcNxcoJgqNHPyOcZ4ZBBzrLyaLByokHnE002M8i5yhPif/092qjJmfhYlPHd1asL6/BgEfGb815H3uuw5dYfRHykimw+5wZeBLUMUF4wWDmkT8wN04nRfIrmhPAc6+T8MyPe4c5ZgoWgZg8LCc7eFZaLOQnw9DcR16fkHDzWGLa1oqSVc1YAUR5zmA5P9qDwFU5+u89c+nkm2JEHs2JuNOiEEYyBhKss7xZbdG0jtuWYHvwUAgMvxPQNrNxSF+ni7xvI6GdYAXcFvbul61w3IhFzKDvL0OM8Fl3qgbKgYzLwfHGk8lzTpurnRElnjmtPoysW8SZvuhj/q5m8YivpAo3yxmicz/YfYlxCPJR1IYZlb3C2rJm+Ea91MEHy6sQnIELDz0m6zktzjwxPFyfifUPnPQg2PTkfNS86BHrwi1qR40ScU1l+3Df3ifr1PfO7CSvUx3ZxI2L95JH6B+rkrxzF8qabVjZJXrSeJ+ft7G3gClktuxy8VSubcR3B4yZr9uE/1uXvMZKhcnik1d+DYqxV81Amn4gjx3X+3kjE6AXuM2D4w5w/edPQ2U/OgUQM06E8VpUhVqC1uM5bDy7pvOOc++QPCj/T3tDTs66j0b38jcSF8yzglwDlsmDbs1h5xyVivXIUw1WD47pzau1pkX77xCmRzPnmd7wMLf4FRkih2/FxJ/YAAAAASUVORK5CYII=');
	--bgDarkness3: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURQ8PDw4ODg0NDRAQEBERERISEnwSqd4AAAAJcEhZcwAADr8AAA6/ATgFUyQAAATKSURBVEjHTVZRcuU2DCMt7z8p5wDW2wvQkfuv1N7/znTvf5YClN+mmQnjsSkJBEEoIvpqXau7hJjcYSKniPhfQ19u8fJWkOO7Imz4oCXwYtWuUiTC/TBx51oX5OOpDHxBuHQNG036sqkJ1iPDFm+6qUjHJiIlVPr22bzgo5sc3KNXb3bx642w3Vj4Mfzl26XuviKn2QBgW5mDRFsHnr5zLBQ5QVzHx8CpLK0jSDdpQIhSbMGRhjzdWDCqvmUNuawAawPgMNOK11iwK5aUo4uhLpStFwCCIkcVOE7kaMA18GodKO0MbHF+IeckmPMC6k0COYHPdg41vZVka22OnOqdYQOeuhHmpjwruvj6SayKglhsRReSYhnWcaKDaWAGAg9UYhcoRDYqBrvWC4HkD0hzVu1onHvBE/ISwwXAcjPtAgQbwCoXoJaDOT/PA4svAAPPivKYE1lPA+DQxrNQeQgAoBVqHUW8Ysf+Yjy1dBdUdoJAOfUjpOsH5WAIaDuBKNtPilExekXsGqlIaoI8P4FtZq+VsBCa1/N481wWdl5+swMAq/dIilFLp24icxB2yjOPQQE4eE1lMxTFdwOzlUK/JKUcPDGaHTWakH1AjxcwBw9CUVIKRgChkuKGiskzd8pzgIHxTj17bUnxT4ZJ5Ff2h+xCu2plqLdN+IU8A2TjZOInBXyhQkgz/MWBs5hBeVYSCCmj6yfbXJJiTYrBjbLtfcpBCmiNTnYpy//xjE0wBeM9U1AxlP2JAJ4R8NtSLDdy1E/ud8bD7k6BueQAShJItyAJZbGHYkJpUjvRdNbEI3HS0O47CGY1B6UTkIUdKJIMy1pQZEkB27vXb54tJZaYzOVfEpvsXvnUSDYWfbAcK1eIrtQD2a1g16sl2YVHEU4ahY6dmzuJhR3saHm1A8xYwNNIUefxZdnpIDA16hn5QlOEySBnSrlVSDmpQeeTmmxmH5QNqjb58dVq43z6qu9Aseg9a7qw60mI8eb52Sc1waYDSvjHJyleEkXJgSL2jmpnEAPFlRDBM9zCDou2i6VDRNo6dSH6TWyGF70EG6EcTlNiovde9Q/FtC7OWlK88gmAlmnDPneUlDIOB3MY9ZThALv+GEXMsAOKAwgHL/V8JLEtB7Pg3qjACSH4SjWcxIttkpDJrj8UAzQVs53DOVt/Q7aT4iWlDOwrcMikGJThiXoISe0+0O3grTYppikPlmHLvkx2iQfITnpbT4ODJdFSKT/K1GI/UNKOtcGJgNBtQ3FVpg1Lgf3PZvKKXbFYAiLmjVHpz98qhgnsf4aSNw3Mv7GZ8k3x3EdtJbsQl2Jg0PD9ILvBS/OxDFQ1eEcHnAIsYeryHgQ3W/K8lLzoEFCc/CZW3OJBinntJgtTfZjPcmJaftxf+e6AFNItWF4lxfaLI4WgMGbM4ilvdlPKLskXpRe0nvtR9iPgAlgVr2kUuFVXBLmXi+Mm0/vwh3XxRqSNpJegLp/T+BjFqm3umpa0Mpz3knbNnEkxerHhetbyD3MyTGXTB5JiKK86iYUdIfQZnP8gYZ83HlzSuJJ1G3ST/Idi7Clv4NmyrqVSvaiqcOMzmVSKArwxTC+2zpsBF53Zza7fEGijXX/QtR6jSL39OijgmFLmO3e//gN4DKeB24D0vAAAAABJRU5ErkJggg==');
}

/* Main Background Image */
body, .col-md-8, .col-lg-8, .color-bg-tertiary, .SelectMenu-tab[aria-selected="true"], .commit-ref, .MarketplaceHeader, .MarketplaceBody, .MarketplaceBackground-buffer, pre, code {
	background-image: var(--bgImage)!important;
	background-clip: border-box!important;
	background-origin: padding-box!important;
	background-attachment: scroll!important;
	background-repeat: repeat!important;
	background-size: auto!important;
	background-position: left top!important;
}

/* Darkness 1 Background Image */
.Box, .Box-row:not(.pl-0), .markdown-body img, .SideNav-item.selected, .color-bg-primary:not(.MarketplaceHeader), .color-bg-secondary {
	background-image: var(--bgDarkness1)!important;
	background-clip: border-box!important;
	background-origin: padding-box!important;
	background-attachment: scroll!important;
	background-repeat: repeat!important;
	background-size: auto!important;
	background-position: left top!important;
}

/* Darkness 2 Background Image */
#repository-container-header, .jump-to-suggestions-path, .tabnav-tab.selected, .menu-item.selected {
	background-image: var(--bgDarkness2)!important;
	background-clip: border-box!important;
	background-origin: padding-box!important;
	background-attachment: scroll!important;
	background-repeat: repeat!important;
	background-size: auto!important;
	background-position: left top!important;
}

/* Darkness 3 Background Image */
.Header, .Box-header, .header-logged-out, .team-left-column:not([aria-label="Explore"]), .form-control, .dropdown-menu:not(.flex-items-center), .jump-to-suggestions-path:hover,
.SelectMenu-modal, .SelectMenu-item, .SelectMenu-message, .SideNav-item:not(.selected), .flash, .hook-item, .form-select, .menu-item {
	background-image: var(--bgDarkness3)!important;
	background-clip: border-box!important;
	background-origin: padding-box!important;
	background-attachment: scroll!important;
	background-repeat: repeat!important;
	background-size: auto!important;
	background-position: left top!important;
}

/* Scrollbar */
::-webkit-scrollbar {
	border: none!important;
	width: 8px!important;
}
::-webkit-scrollbar-track {
	background: 0 0!important;
	border: none!important;
}
::-webkit-scrollbar-track-piece {
	background: 0 0!important;
	border: none!important;
}
::-webkit-scrollbar-thumb {
	background: rgba(55, 55, 55, 0.5)!important;
	border-radius: 20px!important;
	border: none!important;
}
::-webkit-scrollbar-thumb:hover {
	background: rgba(75, 75, 75, 1)!important;
}

/* Main Tweaks */
.form-control:not(.header-search-input), .SelectMenu-item, .SideNav-item, .flash, .commit-ref, .menu-item, pre, p>code {
	border: 1px solid var(--border-primary)!important;
}
.form-control:not(.header-search-input):hover, .SelectMenu-item:hover, .SideNav-item:hover, .SideNav-item.selected, .menu-item.selected:hover, .menu-item.selected {
	border: 1px solid var(--border-secondary)!important;
}
::selection {
  color: var(--selection-text)!important;
  background: var(--selection-background)!important;
}
#merge_types_rebase {
	background-color: #fff;
	color: #fff;
}
.Box-row {
	margin-top: 0px;
}
.hook-item {
	border-radius: 5px;
}
.h1, .text-mono, .filter-item, .color-text-secondary, .mb-3, .color-text-tertiary, .Label--secondary {
	color: #fff!important;
}

/* Buttons */
/* Hover Color Change: -23, -50, -31 */

/* Gray */
.btn-sm, .btn, .social-count {
	background-color: var(--gray-button)!important;
	border-color: var(--gray-button-border)!important;
	color: #fff!important;
}
.btn-sm:hover, .btn:hover, .social-count:hover {
	background-color: var(--gray-button-hover)!important;
	border-color: var(--gray-button-border)!important;
}

/* Red */
.btn-danger {
	background-color: var(--red-button)!important;
	border-color: var(--red-button-border)!important;
	color: #fff!important;
}
.btn-danger:hover {
	background-color: var(--red-button-hover)!important;
	border-color: var(--red-button-border)!important;
}

/* Green */
.btn-primary {
	background-color: var(--green-button)!important;
	border-color: var(--green-button-border)!important;
	color: #fff!important;
}
.btn-primary:hover {
	background-color: var(--green-button-hover)!important;
	border-color: var(--green-button-border)!important;
}

/* White */
.btn-mktg {
	background-color: var(--white-button)!important;
	border-color: var(--white-button-border)!important;
}
.btn-mktg:hover {
	background-color: var(--white-button-hover)!important;
	border-color: var(--white-button-border)!important;
}
`

var head = document.getElementsByTagName('head')[0];
var stylesheet = document.createElement("style");
stylesheet.type = 'text/css'
stylesheet.innerText = synCss
head.appendChild(stylesheet);