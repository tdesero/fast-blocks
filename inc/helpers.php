<?php

/**
 * To be used inside a themes's functions.php to register a block
 * 
 * @param array $settings - Array with all block information
 */
if (!function_exists('add_fast_block')) {
	function add_fast_block( $settings ) {
		fast_blocks_instance()->register_block( $settings );
	}
}

/**
 * CAUTION: following helper functions will be deleted in near future
 */
if (!function_exists('fast_field')) {
	function fast_field( $field_string ) {
		_deprecated_function('fast_field', '5.0', '$block->field()');
		fast_blocks_view_instance()->field( $field_string );
	}
}

if (!function_exists('get_fast_field')) {
	function get_fast_field( $field_string ) {
		_deprecated_function('get_fast_field', '5.0', '$block->field_value()');
		return fast_blocks_view_instance()->field_value( $field_string );
	}
}

if (!function_exists('fast_sub_field')) {
	function fast_sub_field( $sub_field ) {
		_deprecated_function('fast_sub_field', '5.0', '$block->subfield()');
		fast_blocks_view_instance()->sub_field( $sub_field );
	}
}