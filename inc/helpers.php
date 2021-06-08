<?php

/**
 * Helpers
 */
function add_fast_block( $settings ) {
	fast_blocks_instance()->register_block( $settings );
}

function fast_field( $field_string ) {
	fast_blocks_view_instance()->field( $field_string );
}

function get_fast_field( $field_string ) {
	return fast_blocks_view_instance()->field_value( $field_string );
}

function fast_sub_field( $sub_field ) {
	fast_blocks_view_instance()->sub_field( $sub_field );
}