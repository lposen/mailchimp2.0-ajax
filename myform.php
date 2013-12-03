<?php
	/**
	 * Really simple integration, thanks to Drews awesome code!
	 */
	require 'MailChimp.class.php';
	$MailChimp = new MailChimp('YOUR_TOKEN_HERE');
	$email = $_POST['EMAIL'];
	$fname = $_POST['FNAME'];
	$result = $MailChimp->call('lists/subscribe', array(
		'id'                => 'LIST_ID_HERE',
		'email'             => array('email'=>$email),
	    'merge_vars'        => array('FNAME'=>$fname),
		'double_optin'      => false,
		'update_existing'   => true,
		'replace_interests' => false,
		'send_welcome'      => false,
	));
	print_r($result);
?>