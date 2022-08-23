// ==UserScript==
// @name           SyndiShanX's Github Dark
// @author         SyndiShanX
// @include        https://github.com/*
// @version        1.15
// ==/UserScript==
var synCss = `
/**
 * @name Github Dark
 * @description A Custom Dark Theme for Github, meant to be used with Github Dark Mode
 * @author SyndiShanX#4620
 * @version 1.15
*/

:root {
	--theme: Github Dark by SyndiShanX;
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
	/*
		Images are Stored here to improve Loading times, to get the Image Code:
	  Open https://codebeautify.org/image-to-base64-converter in a Browser, Upload the Image,
		Copy the Base64 String, then Replace one of the below Images with url('data:image/png;base64,BASE64_STRING')
	*/
	--bgImage: url('data:image/png;base64,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');
	--bgDarkness1: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURQ8PDw4ODg0NDRAQEBERERISEnwSqd4AAATKSURBVEjHTVZRcuU2DCMt7z8p5wDW2wvQkfuv1N7/znTvf5YClN+mmQnjsSkJBEEoIvpqXau7hJjcYSKniPhfQ19u8fJWkOO7Imz4oCXwYtWuUiTC/TBx51oX5OOpDHxBuHQNG036sqkJ1iPDFm+6qUjHJiIlVPr22bzgo5sc3KNXb3bx642w3Vj4Mfzl26XuviKn2QBgW5mDRFsHnr5zLBQ5QVzHx8CpLK0jSDdpQIhSbMGRhjzdWDCqvmUNuawAawPgMNOK11iwK5aUo4uhLpStFwCCIkcVOE7kaMA18GodKO0MbHF+IeckmPMC6k0COYHPdg41vZVka22OnOqdYQOeuhHmpjwruvj6SayKglhsRReSYhnWcaKDaWAGAg9UYhcoRDYqBrvWC4HkD0hzVu1onHvBE/ISwwXAcjPtAgQbwCoXoJaDOT/PA4svAAPPivKYE1lPA+DQxrNQeQgAoBVqHUW8Ysf+Yjy1dBdUdoJAOfUjpOsH5WAIaDuBKNtPilExekXsGqlIaoI8P4FtZq+VsBCa1/N481wWdl5+swMAq/dIilFLp24icxB2yjOPQQE4eE1lMxTFdwOzlUK/JKUcPDGaHTWakH1AjxcwBw9CUVIKRgChkuKGiskzd8pzgIHxTj17bUnxT4ZJ5Ff2h+xCu2plqLdN+IU8A2TjZOInBXyhQkgz/MWBs5hBeVYSCCmj6yfbXJJiTYrBjbLtfcpBCmiNTnYpy//xjE0wBeM9U1AxlP2JAJ4R8NtSLDdy1E/ud8bD7k6BueQAShJItyAJZbGHYkJpUjvRdNbEI3HS0O47CGY1B6UTkIUdKJIMy1pQZEkB27vXb54tJZaYzOVfEpvsXvnUSDYWfbAcK1eIrtQD2a1g16sl2YVHEU4ahY6dmzuJhR3saHm1A8xYwNNIUefxZdnpIDA16hn5QlOEySBnSrlVSDmpQeeTmmxmH5QNqjb58dVq43z6qu9Aseg9a7qw60mI8eb52Sc1waYDSvjHJyleEkXJgSL2jmpnEAPFlRDBM9zCDou2i6VDRNo6dSH6TWyGF70EG6EcTlNiovde9Q/FtC7OWlK88gmAlmnDPneUlDIOB3MY9ZThALv+GEXMsAOKAwgHL/V8JLEtB7Pg3qjACSH4SjWcxIttkpDJrj8UAzQVs53DOVt/Q7aT4iWlDOwrcMikGJThiXoISe0+0O3grTYppikPlmHLvkx2iQfITnpbT4ODJdFSKT/K1GI/UNKOtcGJgNBtQ3FVpg1Lgf3PZvKKXbFYAiLmjVHpz98qhgnsf4aSNw3Mv7GZ8k3x3EdtJbsQl2Jg0PD9ILvBS/OxDFQ1eEcHnAIsYeryHgQ3W/K8lLzoEFCc/CZW3OJBinntJgtTfZjPcmJaftxf+e6AFNItWF4lxfaLI4WgMGbM4ilvdlPKLskXpRe0nvtR9iPgAlgVr2kUuFVXBLmXi+Mm0/vwh3XxRqSNpJegLp/T+BjFqm3umpa0Mpz3knbNnEkxerHhetbyD3MyTGXTB5JiKK86iYUdIfQZnP8gYZ83HlzSuJJ1G3ST/Idi7Clv4NmyrqVSvaiqcOMzmVSKArwxTC+2zpsBF53Zza7fEGijXX/QtR6jSL39OijgmFLmO3e//gN4DKeB24D0vAAAAABJRU5ErkJggg==');
	--bgDarkness2: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURQ0NDQwMDAsLCw4ODg8PDxAQELrcSGcAAAAJcEhZcwAADr8AAA6/ATgFUyQAAATKSURBVEjHTVZRcuU2DCMt7z8p5wDW2wvQkfuv1N7/znTvf5YClN+mmQnjsSkJBEEoIvpqXau7hJjcYSKniPhfQ19u8fJWkOO7Imz4oCXwYtWuUiTC/TBx51oX5OOpDHxBuHQNG036sqkJ1iPDFm+6qUjHJiIlVPr22bzgo5sc3KNXb3bx642w3Vj4Mfzl26XuviKn2QBgW5mDRFsHnr5zLBQ5QVzHx8CpLK0jSDdpQIhSbMGRhjzdWDCqvmUNuawAawPgMNOK11iwK5aUo4uhLpStFwCCIkcVOE7kaMA18GodKO0MbHF+IeckmPMC6k0COYHPdg41vZVka22OnOqdYQOeuhHmpjwruvj6SayKglhsRReSYhnWcaKDaWAGAg9UYhcoRDYqBrvWC4HkD0hzVu1onHvBE/ISwwXAcjPtAgQbwCoXoJaDOT/PA4svAAPPivKYE1lPA+DQxrNQeQgAoBVqHUW8Ysf+Yjy1dBdUdoJAOfUjpOsH5WAIaDuBKNtPilExekXsGqlIaoI8P4FtZq+VsBCa1/N481wWdl5+swMAq/dIilFLp24icxB2yjOPQQE4eE1lMxTFdwOzlUK/JKUcPDGaHTWakH1AjxcwBw9CUVIKRgChkuKGiskzd8pzgIHxTj17bUnxT4ZJ5Ff2h+xCu2plqLdN+IU8A2TjZOInBXyhQkgz/MWBs5hBeVYSCCmj6yfbXJJiTYrBjbLtfcpBCmiNTnYpy//xjE0wBeM9U1AxlP2JAJ4R8NtSLDdy1E/ud8bD7k6BueQAShJItyAJZbGHYkJpUjvRdNbEI3HS0O47CGY1B6UTkIUdKJIMy1pQZEkB27vXb54tJZaYzOVfEpvsXvnUSDYWfbAcK1eIrtQD2a1g16sl2YVHEU4ahY6dmzuJhR3saHm1A8xYwNNIUefxZdnpIDA16hn5QlOEySBnSrlVSDmpQeeTmmxmH5QNqjb58dVq43z6qu9Aseg9a7qw60mI8eb52Sc1waYDSvjHJyleEkXJgSL2jmpnEAPFlRDBM9zCDou2i6VDRNo6dSH6TWyGF70EG6EcTlNiovde9Q/FtC7OWlK88gmAlmnDPneUlDIOB3MY9ZThALv+GEXMsAOKAwgHL/V8JLEtB7Pg3qjACSH4SjWcxIttkpDJrj8UAzQVs53DOVt/Q7aT4iWlDOwrcMikGJThiXoISe0+0O3grTYppikPlmHLvkx2iQfITnpbT4ODJdFSKT/K1GI/UNKOtcGJgNBtQ3FVpg1Lgf3PZvKKXbFYAiLmjVHpz98qhgnsf4aSNw3Mv7GZ8k3x3EdtJbsQl2Jg0PD9ILvBS/OxDFQ1eEcHnAIsYeryHgQ3W/K8lLzoEFCc/CZW3OJBinntJgtTfZjPcmJaftxf+e6AFNItWF4lxfaLI4WgMGbM4ilvdlPKLskXpRe0nvtR9iPgAlgVr2kUuFVXBLmXi+Mm0/vwh3XxRqSNpJegLp/T+BjFqm3umpa0Mpz3knbNnEkxerHhetbyD3MyTGXTB5JiKK86iYUdIfQZnP8gYZ83HlzSuJJ1G3ST/Idi7Clv4NmyrqVSvaiqcOMzmVSKArwxTC+2zpsBF53Zza7fEGijXX/QtR6jSL39OijgmFLmO3e//gN4DKeB24D0vAAAAABJRU5ErkJggg==');
	--bgDarkness3: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURQoKCgkJCQsLCwwMDGooQ4kAAAQpSURBVEjHXZaBdewqDEQFNCC8DWDcALH77+3dEbD++3NOlI3BMLoaxJqlWju/1Zq5Pc3NLjOr1+ChNway5ngiHAyk3HhQUk+WrTF+utWqd6tpfrM8GCHcqTQf1Xo6khvvM8NZlH/NOouY5ZasHyd7MFjdTq3R2dNvjT6E4+HFz+DZcUtmiTn634vmMNHL4NM7x1tiTpOu8zPYVal1gvWpNfJhS9RYOpQwWT9Wmt2e0VoR3JxRFwnm8ko+uzl5kXa6pZUBsmA7Qza6Bo/KILWrscT1x5xLYq5bukwkG8MOWE9PEmzlozmzAIf0HJJ5JO3VupFtaCUhJasqBGIbUCqjQhrNKKiNTPxGluZUCkDGWULiB2g1Kk3hVFDx8dBwI9geTZPM4Bqf8qk5x3Xy8o0wOCfS05wWWhWCM6V2RCOAUiTvKrHYu7l2zb0amV0AtCt9Gnb4yA4uzjmEJJVfiMmYWkl7auHIzXkFlVm1TpJFEL5zc85ReaBSAcSmZ2zEQbd958iesQ0JsHEJZytkPFFd/pPRbwsrN+3YKrmQoegjvUlz00YkZTlzBAgbcV7BYx80KD7h5434eEH+RX1EF+8mzzp2i26cvXky+QkD32SINRnSgfM2Q+wVALEyVb9U5hyIUyAmJJW9TztYBmvrovs/zizCKRj7TMnFOnGTc734rWGWhzmpXlrvapuuRRuZZQiA6haCICkT8Sp5l5qunLQlO43UxSOyOWUdIfaTJEXYSibJHHR913Fz9rBYaPL6utjvFzYvfZSO57tZKvLDS9cDdtZWkhONIg1tY1Vg40hJzwkZb/Q0IeraPvKyN/CHdGkyzJlWjuax0KwgNn3INmTNWl/EJe0gs6Rn5nSz6iWJ7YfzPNhdRUdKq58zEPtCnAVbIlKZwVyI627SZKOUzKNDtGjr8sWPgXcAQScdj7OFpi/dH8QWiIs+yYOzDde5os1rpIocRz1sOOrbKNoOWBEhOnjh53OCjYOZuTf4N2OEWuSGS3pZ5j9060KMaDnmuLh+OFu/iMPKBR02EbMqn4KuhXeXdD91q03Easpj3gW+6IaezFmjt/VocLQktVQRkU2/ViarCHTtIxrlbMOW69auK7bwsjVMHDeG+vMPYv8eSt00av5ax17Ec53kRXQxV0qyt81Cx9FaLYOshu7oRpWyesm8B4v8E5xzXHQEktO1mOpYPSKuB/u6j/OZL52o5y+enb9WBrHv5pfWbWebblhZHRU1sl5T63mWszdi1ZPHahTcqoXAMrfUmv9YR3fDWL2EvOo8jatRlL1qtKSicD2Lmf24mE3zvmTmbXcE50Cc1RMElnZE6DPUdZ9uPULMrXoMdZP4QjGmRvQc+2AmfYUCcQ0Xk96UW0udHUmQum4GLjr3R2qe3ak/0bWWleNrxCkDt2nl+YWi3v8AS2CCuum8rAsAAAAASUVORK5CYII=')
}

/* Main Background Image */
body, .col-md-8, .col-lg-8, .color-bg-tertiary, .SelectMenu-tab[aria-selected="true"], .commit-ref, .MarketplaceHeader, .MarketplaceBody, .MarketplaceBackground-buffer, pre {
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
.form-control:not(.header-search-input), .SelectMenu-item, .SideNav-item, .flash, .commit-ref, .menu-item {
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