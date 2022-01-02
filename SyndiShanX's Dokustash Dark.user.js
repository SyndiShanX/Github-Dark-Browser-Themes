// ==UserScript==
// @name           SyndiShanX's Dokustash Dark
// @author         SyndiShanX
// @include        https://dokucraft.co.uk/stash/*
// @version        1.15
// ==/UserScript==
var synCss = `
/**
 * @name Dokustash Dark
 * @description A Custom Dark Theme for the Dokustash
 * @author SyndiShanX#4620
 * @version 1.15
*/

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
	--blue-button: #2e3952;
	--blue-button-hover: #3a496b;
	--blue-button-border: #265d96;
	--white-button: #ffffff;
	--white-button-hover: #dedede;
	--white-button-border: #808080;
	--gray-button: #4f545c;
	--gray-button-hover: #646970;
	--gray-button-border: #919599;
	--scrollbar-width: 8px;
	--bg1: rgba(0, 0, 0, 0.5)!important;
	--bg2: rgba(0, 0, 0, 0.5)!important;
	--bg3: rgba(0, 0, 0, 0.5)!important;
	--bg4: rgba(0, 0, 0, 0.5)!important;
	/*
		Images are Stored here to improve Loading times, to get the Image Code:
	  Open https://codebeautify.org/image-to-base64-converter in a Browser, Upload the Image,
		Copy the Base64 String, then Replace one of the below Images with url('data:image/png;base64,BASE64_STRING')
	*/
	--bgImage: url('data:image/png;base64,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');
	--bgDarkness1: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURQ8PDw4ODg0NDRAQEBERERISEnwSqd4AAATKSURBVEjHTVZRcuU2DCMt7z8p5wDW2wvQkfuv1N7/znTvf5YClN+mmQnjsSkJBEEoIvpqXau7hJjcYSKniPhfQ19u8fJWkOO7Imz4oCXwYtWuUiTC/TBx51oX5OOpDHxBuHQNG036sqkJ1iPDFm+6qUjHJiIlVPr22bzgo5sc3KNXb3bx642w3Vj4Mfzl26XuviKn2QBgW5mDRFsHnr5zLBQ5QVzHx8CpLK0jSDdpQIhSbMGRhjzdWDCqvmUNuawAawPgMNOK11iwK5aUo4uhLpStFwCCIkcVOE7kaMA18GodKO0MbHF+IeckmPMC6k0COYHPdg41vZVka22OnOqdYQOeuhHmpjwruvj6SayKglhsRReSYhnWcaKDaWAGAg9UYhcoRDYqBrvWC4HkD0hzVu1onHvBE/ISwwXAcjPtAgQbwCoXoJaDOT/PA4svAAPPivKYE1lPA+DQxrNQeQgAoBVqHUW8Ysf+Yjy1dBdUdoJAOfUjpOsH5WAIaDuBKNtPilExekXsGqlIaoI8P4FtZq+VsBCa1/N481wWdl5+swMAq/dIilFLp24icxB2yjOPQQE4eE1lMxTFdwOzlUK/JKUcPDGaHTWakH1AjxcwBw9CUVIKRgChkuKGiskzd8pzgIHxTj17bUnxT4ZJ5Ff2h+xCu2plqLdN+IU8A2TjZOInBXyhQkgz/MWBs5hBeVYSCCmj6yfbXJJiTYrBjbLtfcpBCmiNTnYpy//xjE0wBeM9U1AxlP2JAJ4R8NtSLDdy1E/ud8bD7k6BueQAShJItyAJZbGHYkJpUjvRdNbEI3HS0O47CGY1B6UTkIUdKJIMy1pQZEkB27vXb54tJZaYzOVfEpvsXvnUSDYWfbAcK1eIrtQD2a1g16sl2YVHEU4ahY6dmzuJhR3saHm1A8xYwNNIUefxZdnpIDA16hn5QlOEySBnSrlVSDmpQeeTmmxmH5QNqjb58dVq43z6qu9Aseg9a7qw60mI8eb52Sc1waYDSvjHJyleEkXJgSL2jmpnEAPFlRDBM9zCDou2i6VDRNo6dSH6TWyGF70EG6EcTlNiovde9Q/FtC7OWlK88gmAlmnDPneUlDIOB3MY9ZThALv+GEXMsAOKAwgHL/V8JLEtB7Pg3qjACSH4SjWcxIttkpDJrj8UAzQVs53DOVt/Q7aT4iWlDOwrcMikGJThiXoISe0+0O3grTYppikPlmHLvkx2iQfITnpbT4ODJdFSKT/K1GI/UNKOtcGJgNBtQ3FVpg1Lgf3PZvKKXbFYAiLmjVHpz98qhgnsf4aSNw3Mv7GZ8k3x3EdtJbsQl2Jg0PD9ILvBS/OxDFQ1eEcHnAIsYeryHgQ3W/K8lLzoEFCc/CZW3OJBinntJgtTfZjPcmJaftxf+e6AFNItWF4lxfaLI4WgMGbM4ilvdlPKLskXpRe0nvtR9iPgAlgVr2kUuFVXBLmXi+Mm0/vwh3XxRqSNpJegLp/T+BjFqm3umpa0Mpz3knbNnEkxerHhetbyD3MyTGXTB5JiKK86iYUdIfQZnP8gYZ83HlzSuJJ1G3ST/Idi7Clv4NmyrqVSvaiqcOMzmVSKArwxTC+2zpsBF53Zza7fEGijXX/QtR6jSL39OijgmFLmO3e//gN4DKeB24D0vAAAAABJRU5ErkJggg==');
	--bgDarkness2: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURQ0NDQwMDAsLCw4ODg8PDxAQELrcSGcAAAAJcEhZcwAADr8AAA6/ATgFUyQAAATKSURBVEjHTVZRcuU2DCMt7z8p5wDW2wvQkfuv1N7/znTvf5YClN+mmQnjsSkJBEEoIvpqXau7hJjcYSKniPhfQ19u8fJWkOO7Imz4oCXwYtWuUiTC/TBx51oX5OOpDHxBuHQNG036sqkJ1iPDFm+6qUjHJiIlVPr22bzgo5sc3KNXb3bx642w3Vj4Mfzl26XuviKn2QBgW5mDRFsHnr5zLBQ5QVzHx8CpLK0jSDdpQIhSbMGRhjzdWDCqvmUNuawAawPgMNOK11iwK5aUo4uhLpStFwCCIkcVOE7kaMA18GodKO0MbHF+IeckmPMC6k0COYHPdg41vZVka22OnOqdYQOeuhHmpjwruvj6SayKglhsRReSYhnWcaKDaWAGAg9UYhcoRDYqBrvWC4HkD0hzVu1onHvBE/ISwwXAcjPtAgQbwCoXoJaDOT/PA4svAAPPivKYE1lPA+DQxrNQeQgAoBVqHUW8Ysf+Yjy1dBdUdoJAOfUjpOsH5WAIaDuBKNtPilExekXsGqlIaoI8P4FtZq+VsBCa1/N481wWdl5+swMAq/dIilFLp24icxB2yjOPQQE4eE1lMxTFdwOzlUK/JKUcPDGaHTWakH1AjxcwBw9CUVIKRgChkuKGiskzd8pzgIHxTj17bUnxT4ZJ5Ff2h+xCu2plqLdN+IU8A2TjZOInBXyhQkgz/MWBs5hBeVYSCCmj6yfbXJJiTYrBjbLtfcpBCmiNTnYpy//xjE0wBeM9U1AxlP2JAJ4R8NtSLDdy1E/ud8bD7k6BueQAShJItyAJZbGHYkJpUjvRdNbEI3HS0O47CGY1B6UTkIUdKJIMy1pQZEkB27vXb54tJZaYzOVfEpvsXvnUSDYWfbAcK1eIrtQD2a1g16sl2YVHEU4ahY6dmzuJhR3saHm1A8xYwNNIUefxZdnpIDA16hn5QlOEySBnSrlVSDmpQeeTmmxmH5QNqjb58dVq43z6qu9Aseg9a7qw60mI8eb52Sc1waYDSvjHJyleEkXJgSL2jmpnEAPFlRDBM9zCDou2i6VDRNo6dSH6TWyGF70EG6EcTlNiovde9Q/FtC7OWlK88gmAlmnDPneUlDIOB3MY9ZThALv+GEXMsAOKAwgHL/V8JLEtB7Pg3qjACSH4SjWcxIttkpDJrj8UAzQVs53DOVt/Q7aT4iWlDOwrcMikGJThiXoISe0+0O3grTYppikPlmHLvkx2iQfITnpbT4ODJdFSKT/K1GI/UNKOtcGJgNBtQ3FVpg1Lgf3PZvKKXbFYAiLmjVHpz98qhgnsf4aSNw3Mv7GZ8k3x3EdtJbsQl2Jg0PD9ILvBS/OxDFQ1eEcHnAIsYeryHgQ3W/K8lLzoEFCc/CZW3OJBinntJgtTfZjPcmJaftxf+e6AFNItWF4lxfaLI4WgMGbM4ilvdlPKLskXpRe0nvtR9iPgAlgVr2kUuFVXBLmXi+Mm0/vwh3XxRqSNpJegLp/T+BjFqm3umpa0Mpz3knbNnEkxerHhetbyD3MyTGXTB5JiKK86iYUdIfQZnP8gYZ83HlzSuJJ1G3ST/Idi7Clv4NmyrqVSvaiqcOMzmVSKArwxTC+2zpsBF53Zza7fEGijXX/QtR6jSL39OijgmFLmO3e//gN4DKeB24D0vAAAAABJRU5ErkJggg==');
	--bgDarkness3: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURQoKCgkJCQsLCwwMDGooQ4kAAAQpSURBVEjHXZaBdewqDEQFNCC8DWDcALH77+3dEbD++3NOlI3BMLoaxJqlWju/1Zq5Pc3NLjOr1+ChNway5ngiHAyk3HhQUk+WrTF+utWqd6tpfrM8GCHcqTQf1Xo6khvvM8NZlH/NOouY5ZasHyd7MFjdTq3R2dNvjT6E4+HFz+DZcUtmiTn634vmMNHL4NM7x1tiTpOu8zPYVal1gvWpNfJhS9RYOpQwWT9Wmt2e0VoR3JxRFwnm8ko+uzl5kXa6pZUBsmA7Qza6Bo/KILWrscT1x5xLYq5bukwkG8MOWE9PEmzlozmzAIf0HJJ5JO3VupFtaCUhJasqBGIbUCqjQhrNKKiNTPxGluZUCkDGWULiB2g1Kk3hVFDx8dBwI9geTZPM4Bqf8qk5x3Xy8o0wOCfS05wWWhWCM6V2RCOAUiTvKrHYu7l2zb0amV0AtCt9Gnb4yA4uzjmEJJVfiMmYWkl7auHIzXkFlVm1TpJFEL5zc85ReaBSAcSmZ2zEQbd958iesQ0JsHEJZytkPFFd/pPRbwsrN+3YKrmQoegjvUlz00YkZTlzBAgbcV7BYx80KD7h5434eEH+RX1EF+8mzzp2i26cvXky+QkD32SINRnSgfM2Q+wVALEyVb9U5hyIUyAmJJW9TztYBmvrovs/zizCKRj7TMnFOnGTc734rWGWhzmpXlrvapuuRRuZZQiA6haCICkT8Sp5l5qunLQlO43UxSOyOWUdIfaTJEXYSibJHHR913Fz9rBYaPL6utjvFzYvfZSO57tZKvLDS9cDdtZWkhONIg1tY1Vg40hJzwkZb/Q0IeraPvKyN/CHdGkyzJlWjuax0KwgNn3INmTNWl/EJe0gs6Rn5nSz6iWJ7YfzPNhdRUdKq58zEPtCnAVbIlKZwVyI627SZKOUzKNDtGjr8sWPgXcAQScdj7OFpi/dH8QWiIs+yYOzDde5os1rpIocRz1sOOrbKNoOWBEhOnjh53OCjYOZuTf4N2OEWuSGS3pZ5j9060KMaDnmuLh+OFu/iMPKBR02EbMqn4KuhXeXdD91q03Easpj3gW+6IaezFmjt/VocLQktVQRkU2/ViarCHTtIxrlbMOW69auK7bwsjVMHDeG+vMPYv8eSt00av5ax17Ec53kRXQxV0qyt81Cx9FaLYOshu7oRpWyesm8B4v8E5xzXHQEktO1mOpYPSKuB/u6j/OZL52o5y+enb9WBrHv5pfWbWebblhZHRU1sl5T63mWszdi1ZPHahTcqoXAMrfUmv9YR3fDWL2EvOo8jatRlL1qtKSicD2Lmf24mE3zvmTmbXcE50Cc1RMElnZE6DPUdZ9uPULMrXoMdZP4QjGmRvQc+2AmfYUCcQ0Xk96UW0udHUmQum4GLjr3R2qe3ak/0bWWleNrxCkDt2nl+YWi3v8AS2CCuum8rAsAAAAASUVORK5CYII=');
  --fileIcon: url('data:image/png;base64,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')
}

/* Main Background Image */
.stash-page-wrapper table:not(.js-rows) tbody tr:nth-child(even) td, .stash-page-wrapper table:not(.js-rows) tbody tr:nth-child(even):hover, .sp-shortcuts-shortcut, .menu,
.sp-details-file-tags, .tags, .sp-details-file-info-right-pane span, .stash-page-content .file.png,.stash-page-content .file.zip:not(.no-thumbnail), .fs-img-container, .ccin-select,
.ccin-wrapper .ccin-menu, .ccin-menu-hint, .stash-page-wrapper textarea, .even .filepath, .even:hover {
	background-image: var(--bgImage)!important;
	background-clip: border-box!important;
	background-origin: padding-box!important;
	background-attachment: scroll!important;
	background-repeat: repeat!important;
	background-size: auto!important;
	background-position: left top!important;
}

/* Darkness 2 Background Image */
body, .sp-search-results-wrapper, .stash-page-wrapper table:not(.js-rows) tbody tr:nth-child(odd) td, .ccin-input:focus, .stash-page-scroller, .even th, .content {
	background-image: var(--bgDarkness2)!important;
	background-clip: border-box!important;
	background-origin: padding-box!important;
	background-attachment: scroll!important;
	background-repeat: repeat!important;
	background-size: auto!important;
	background-position: left top!important;
}

/* Darkness 3 Background Image */
#header-bar, .sidebar, .stash-page-wrapper>.modal>.content.stash-page-wrapper::before, .compact, .tippy-tooltip {
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
::selection {
  color: var(--selection-text)!important;
  background: var(--selection-background)!important;
}

.stash-page-wrapper table.highlight-rows tbody tr:hover>:first-child:not([rowspan])~td:not([rowspan]), .stash-page-wrapper table.highlight-rows tbody tr:hover>[rowspan]:not(:hover)~td:not([rowspan]),
.stash-page-wrapper table.highlight-rows tbody tr:hover>td:first-child:not([rowspan]), .stash-page-content .file .type-indicator {
  background: transparent!important;
}

.stash-page-content .file {
  background-color: transparent!important;
  background-image: var(--fileIcon);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 100%;
}

.tippy-popper[x-placement^=right] .tippy-arrow {
    border-right-color: #0A0A0A;
}

/* Buttons */
/* Gray */
.button:not(.disabled)::before, .sp-shortcuts-wrapper .sp-shortcuts-shortcut:not(.disabled)::before {
	background-color: var(--gray-button)!important;
	border-color: var(--gray-button-border)!important;
	color: #fff!important;
}
`

var head = document.getElementsByTagName('head')[0];
var stylesheet = document.createElement("style");
stylesheet.type = 'text/css'
stylesheet.innerText = synCss
stylesheet.className = 'synCss'
head.appendChild(stylesheet);