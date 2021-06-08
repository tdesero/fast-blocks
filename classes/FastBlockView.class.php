<?php 

/**
 * Static class for views/templates
 */
class FastBlockView {
	public function field( $field_string ) {
		$attributes = fast_blocks_instance()->get_current_attributes();
		$orig_fields = fast_blocks_instance()->get_current_fields();
		fast_blocks_instance()->set_current_field( $field_string );

		if (  isset( $orig_fields[$field_string]['input'] ) &&
          ($orig_fields[$field_string]['input'] === 'image') ) {
			$field = $attributes[$field_string]['url'];
		} else {
			$field = $attributes[$field_string];
		}
		
		echo wp_kses_post( $field );
	}

	public function field_value( $field_string ) {
		$attributes = fast_blocks_instance()->get_current_attributes();
		fast_blocks_instance()->set_current_field( $field_string );
		$field = $attributes[$field_string];

		return $field;
	}

	public function sub_field( $sub_field ) {
		echo wp_kses_post( $sub_field );
	}
}