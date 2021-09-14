<?php
/**
 * Page post type meta fields
 *
 * @package WpsPrime
 */

declare( strict_types=1 );

namespace WpsPrime\MetaFields;

add_action( 'init', __NAMESPACE__ . '\\page_post_meta' );

/**
 * Register custom post meta for page layout control
 *
 * @return void
 */
function page_post_meta():void {
	/**
		* Make meta available in rest data
		*
		* @link https://developer.wordpress.org/reference/functions/register_post_meta/
		*/

	$field_ids = [
		'_wps_prime_hide_title',
		'_wps_prime_page_margin_top_reset',
		'_wps_prime_page_margin_bottom_reset',
		'_wps_prime_hide_footer',
	];

	foreach ( $field_ids as $field_id ) {
		register_post_meta(
			'page',
			$field_id,
			[
				'show_in_rest'  => true,
				'single'        => true,
				'type'          => 'boolean',
				'default'       => false,
				'auth_callback' => function() { // phpcs:ignore NeutronStandard.Functions.TypeHint.NoReturnType
					return current_user_can( 'edit_posts' );
				},
			]
		);
	}
}
