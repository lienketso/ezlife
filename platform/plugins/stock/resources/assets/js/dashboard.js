$(document).ready(function () {
	//Checkout
	const body = $('body');

	body.on('change', '#select_contract_to_withdraw', function () {
		let contractId = $(this).val();
		let url = $('#ajax_get_contract_by_id').val();

		$.ajax({
			url: url,
			type: 'GET',
			data: {
				contract_id: contractId
			},
			success: function( response ) {
				$('#amount-wrapper').html(response.data)
			},
			error: function( err ) {
				console.log('getProvinceError:' , err)
			}
		});
	})
});