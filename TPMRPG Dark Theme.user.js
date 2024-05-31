// ==UserScript==
// @name           TPMRPG Dark Theme
// @author         SyndiShanX
// @include        https://pkmneclipse.net/*
// @include        https://eclipserpg.com/*
// ==/UserScript==

var synCss = `
:root {
	--border-primary: #5c5c5c;
	--border-secondary: #222222;
	--selection-background: #265d96;
	--selection-text: #ffffff;
	--scrollbar-width: 8px;
	--bgImage: url('data:image/png;base64,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');
	--bgDarkness1: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGBAMAAACDAP+3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAVUExURRgYGBcXFxUVFRoaGhsbGx0dHRwcHFbDdK8AAAAJcEhZcwAADr8AAA6/ATgFUyQAAAUASURBVEjHTZbBjttIDETZamXOTWmQs+T8QGta67Nm5fgcYIM9ezGz+f9P2FeUjKyBMIZFdReLxeKYpcvc0uBu1YrdajFbzcz/eKSLl3rxOZPjUyKMPEi58kOfWrJstbovxdz1rhv5fMsbTwh76mvZZmvdmIrxPhml8zmNyaxxiFmuydr4NnvmoRdbdEYbfC67nn4Sxhsvvm5+8fEjufsLOXPZAFxelPNhVvqNb0fOTk6piZwqXMvXjVtVWiNYKzaDkFJKx5WFvDSqYKq+WV9tLxmsM4BrKWngZ16YEq/kpVmhLspOOwChyKmC68yW2b3f+KnfKG2tHLG+k3MVmHUH9WiVnMrjsm6ppHsS2WmYfU0+eFMYwTOMgjkm3VWbef8mrImCeqAMdCEotq00bnSYBjMIvFJJ2aGQbCqG3dKygMSnXwRTWHtC5ht5n8KwA9g+lfYBhPIAq+1AzYtyvl0XXv4AGDwnylNOjXpmANc06y4qrwYAepZKo4hLnTjfim7NzY3KVgi0Nb1Wa+lVcigE2i4gSe0XxVRMr4Q91VCkNCGez6A2vzy4ZQVWukL7cF2ePOdOnbefFHTdLaX7Rnn3RC1NuqmRQ5gkz7iGAri4D2Ur5MTzArODhL5bSLlSNc0ry1BnE/tArxcwV7WaoixnRoAwiOKZisWzTop7iv1SlJTzzQekC5hv4vkg8j36I3bRbip5Sz6PpifiGZCzJpNPCHinQqRZ/aKBK/UISXcFgUiZrq9qcw6KU1AMN0ltb4ccLENrbWJXsvwfzxzCFEBxeRHZ13dN3BsBnt1X/s03ieWTXiS/6ry1nuxOEphbDKAu+Qi3EAm5KyfFgjLb0ISmqSZdyU1baj5BsKpZJJ2KLMpCkWLY+kyROQRcnr1+8lxCYqYBLm5/idhgd49vlPcNIaTXh7qQ92qplx7E7gC7PpQgO+sqwQmjSNukw13EYgcTLR/KAjOl4mmiqOn63E1yEExNeibfZIqYDDmHlOcBKQc1dD6oiWa2TbKxB+C//DMPs+bTX0Sf5tNvYk7B7sjQaaoofvJ8nhOaUNOBUv31TRR3gSLHQAl7o9ojWIHiQRDhGbcoS6nzZCUcooatSxeWfhMb4SIv4SDKkWEFz/LefXhSLE8YNWtfRXH/kJfm2h027MeJFlLmcphj1EOGG+z6aRT1CBNQHCAavNDzEsTOMZiZvTGAEyF4LzWswssxQcjBrp8UA1qKGdeNK3f7E9kGxX0XUgZ7Dw7Y5fMLytCz9FAttHtCL4u22kGxTHlTGaWbuoNd4QHZKm9rYXD4kixVEy6ZljotlDTxbtVEIPQyUtxghw1bxv6PZmrF9rxsFRFrYwzyZ/9NMUtIQ9kfFCPZF5Rth6efFB/npNKLXcSVGBgaPi1it2ppnpZBVZt2dMUpYImpiz0IN2Pw3OVYdASKs5/CyhavolhrN1g41Md85pVp+fLrPX5bkEL/dqp4EMXlu0bqX9DZ37Li1Z7shpTdgi9Jr8p6bqeyTwFnYA38LKNgq/YEu3e7xs0O7+M/1aWNKBsJL6EuP6bxNIo+zcep2lDSA6Z168KulXNQTC9G1nPKP5TzIzaNlP2QDwTFKG9wEYsdEdoRXH8gcc4TD0ualZzGTW4Sf1BsU8gbPGPU1Q1SL1VlHbwGk0migDeFw4tL02Zg0ZVylxXfEegsu36Va51uEXr7zpTw+JAy8ib4/h/o4qxp5wlvXAAAAABJRU5ErkJggg==');
}

/* Main Background Image */
body, .active, .tnav_left, .tnav.left, .tnav, .middle_navigation li a:hover:not(.navtitle-link-child), .mine-button, .tnav_battle, .tnav_battle_information, #battlebtn:hover, .forward:hover,
.inputsubmit:hover, .plushies-box.blue, .page-number-link, .page-number-link:hover {
	background-image: var(--bgImage)!important;
	background-clip: border-box!important;
	background-origin: padding-box!important;
	background-attachment: scroll!important;
	background-repeat: repeat!important;
	background-size: auto!important;
	background-position: left top!important;
}

/* Darkness 1 Background Image */
.inside, .sidebar, .tnav_left_information, .tnav_information, .tnav_information.left, #battlebtn, .forward, .inputsubmit, .pickaxe-perk {
	background-image: var(--bgDarkness1)!important;
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
input, input.text, select, textarea {
  background-color: #1a1a1a!important;
  border: 1px solid #666!important;
  color: white!important;
}
.inner-bar {
  background: linear-gradient(#35AFEA, #227198)!important;
}
.tnav_header, .navtitle, .plushies-box-title {
  background: url(https://pokemoncreed.net/styles/4/col2_head.jpg)!important;
  background-image: url(https://pokemoncreed.net/styles/4/col2_head.jpg)!important;
}
#content, .content_header, .inside_header, .inside_footer, #footer, .clear_table td, .message, .label-link {
  background: transparent!important;
}
.inside, .sidebar, .mine-button {
	border-radius: 12px!important;
  border: 1px solid var(--border-primary)!important;
}
.tnav, .tnav.left, .tnav_left, .tnav_left_information, .tnav_information, .tnav_information.left, .plushies-box.blue {
  border: 1px solid var(--border-primary)!important;
}
.plushies-box-title {
  border-bottom: 1px solid var(--border-primary)!important;
}
.middle_navigation li:not(.navtitle):not(.navtitle-link) {
  border-top: 1px solid var(--border-secondary)!important;
  border-bottom: 1px solid var(--border-secondary)!important;
}
.navtitle, .message_side1, .message_side2, .message_side3 {
  border: 0px solid #fff!important;
  margin: 0!important;
}
.active {
  border-top: 1px solid #808080!important;
  border-bottom: 1px solid #808080!important;
  color: #00ffff!important;
}
a:hover:not(.navtitle-link-child) {
  color: #00ffff!important;
}
span, #footer, .tnav_header, .left, .tnav_left_information, .tnav_information, .navtitle-link-child, .mine-button, .clear_table, body, .tnav_left, .tnav, font, .wild-pokemon-message,
.tnav_battle, .tnav_battle_information, #battlebtn, .forward, .inputsubmit, .page-number-link, .profile-party-color, .profile-party-name, .party-pokemon-header, .p_title, #internal_link,
#internal_link_2, .mining-shop-shard {
	color: #fff!important;
}
.p_title {
	background: -webkit-linear-gradient(#fff, #fff)!important;
  -webkit-background-clip: text!important;
  -webkit-text-fill-color: transparent!important;
}
#internal_link, a, .page-number-link.disabled {
  color: #35AFEA!important;
}
.plushie_notice {
  display:none;
}
`

document.getElementById("theme-stylesheet").remove()

var head = document.getElementsByTagName('head')[0];

var default_theme = document.createElement("link");
default_theme.rel = "stylesheet"
default_theme.id = "theme-stylesheet"
default_theme.href = "https://pkmneclipse.net/themes/smoke/stylesheet_theme_smoke.css?657"
head.appendChild(default_theme);

var stylesheet = document.createElement("style");
stylesheet.type = 'text/css'
stylesheet.innerText = synCss
head.appendChild(stylesheet);

//function removeTitles() {
//  if (document.getElementsByClassName('tnav_information').length != 0) {
//  	for (i = 0; i < document.getElementsByClassName('tnav_information').length; i++) {
//  		if (document.getElementsByClassName('tnav_information')[i].align == 'center') {
//  			document.getElementsByClassName('tnav_information')[i].remove()
//  		}
//  	}
//  }
//}
//
//var loop = 10;
//for(var i = 0; i < loop; i++){
//  removeTitles()
//}

