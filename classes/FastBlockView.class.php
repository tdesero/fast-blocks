<?php 

/**
 * Class for views/templates
 * 
 * will be used inside templates e.g. like $block->field();
 */
class FastBlockView {

	/**
	 * @param string $field_string
	 */
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

	/**
	 * @param string $field_string
	 * @return mixed
	 */
	public function field_value( $field_string ) {
		$attributes = fast_blocks_instance()->get_current_attributes();
		fast_blocks_instance()->set_current_field( $field_string );
		$field = $attributes[$field_string];

		return $field;
	}

	/**
	 * @param string $sub_field - information stored inside an associative array
	 */
	public function sub_field( $sub_field ) {
		echo wp_kses_post( $sub_field );
	}
}