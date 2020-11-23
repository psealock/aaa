import { addFilter } from '@wordpress/hooks';
import { getPath } from '@woocommerce/navigation';

addFilter( 'woocommerce_admin_pages_list', 'examples', ( pages ) => {
	console.log( 'Filter is working' );

	return pages;
} );

console.log( getPath() );
