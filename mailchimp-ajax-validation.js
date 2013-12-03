$(document).ready(function($) {
	/**
	 * Whatsherface uses ketchup.  I use foundation.  They're both awesome.  Pick your poison!
	 */
	$(document).foundation();
	$("#myForm").submit(function(e){
		if (!isValid) {
			alert('error');
		} else {
			// .preventdefault is needed for ajax to work!
		    e.preventDefault();
		    var postData = $(this).serializeArray();
		    var formURL = $(this).attr("action");
		    $.ajax({
		        url : formURL,
		        type: "POST",
		        data : postData,
		        dataType : "html",
		        success:function(data, textStatus, jqXHR) 
		        {
		            //data: return data from server
		            console.log("success");
		            console.log(data);
		            $("#myForm").html('<p class="thankyou>Thanks for subscribing to my form!</p>');
		        },
		        error: function(jqXHR, textStatus, errorThrown) 
		        {
		           console.log("ERROR");
		           console.log(jqXHR);
		           console.log(textStatus);
		           console.log(errorThrown);
		        }
	    	});
	    	return false;
    	}
	});
});