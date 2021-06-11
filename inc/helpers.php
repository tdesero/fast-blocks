<?php

/**
 * Helpers
 */
function add_fast_block( $settings ) {
	fast_blocks_instance()->register_block( $settings );
}

/**
 * CAUTION: following helper functions will be deleted in near future
 */
function fast_field( $field_string ) {
	_deprecated_function('fast_field', '5.0', '$block->field()');
	fast_blocks_view_instance()->field( $field_string );
}

function get_fast_field( $field_string ) {
	_deprecated_function('get_fast_field', '5.0', '$block->field_value()');
	return fast_blocks_view_instance()->field_value( $field_string );
}

function fast_sub_field( $sub_field ) {
	_deprecated_function('fast_sub_field', '5.0', '$block->subfield()');
	fast_blocks_view_instance()->sub_field( $sub_field );
}