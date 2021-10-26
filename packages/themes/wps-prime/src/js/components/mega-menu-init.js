const megaMenuInit = ($) => {
	// Mega menu

	/* Create sub nav holder node */

	// Help debugging by showing the first mega menu without hover
	const debug = false; // true | false

	const para = $(
		'<div class="site-nav__mega-menu animate animatedduration1 fadeIn"></div>',
	);

	$(para).appendTo('.site-nav-mega-menu');

	// On hover move sub menu to new node
	$('.menu-item').on('mouseenter', () => {
		const target = $('.site-nav__mega-menu');
		target[0].innerHTML = '';
		target.removeClass('show');
	});

	$('.menu-item.mega-menu-enabled').on('mouseenter', function () {
		const target = $('.site-nav__mega-menu');
		const menu = $(this).find('.site-nav__container');

		// Check if has submenu
		if (menu.length > 0) {
			target.addClass('show');
			menu.clone().appendTo(target);
		} else {
			target.removeClass('show');
		}
	});

	// If you leave main site nav close the menu
	$('.site-nav-mega-menu').on('mouseleave', () => {
		if (debug) {
			return;
		}
		const target = $('.site-nav__mega-menu');
		target[0].innerHTML = '';
		target.removeClass('show');
	});

	// Debug
	const debugMegaMenu = () => {
		if (!debug) {
			return;
		}
		const target = $('.site-nav__mega-menu');
		const menuItem = $('.menu-item.mega-menu-enabled');
		const menu = $(menuItem).first().find('.site-nav__container');

		// Check if has submenu
		if (menu.length > 0) {
			target.addClass('show');
			menu.clone().appendTo(target);
		}
	};
	debugMegaMenu();
};
export default megaMenuInit;
