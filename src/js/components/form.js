function formSubmit(actionStatus) {
  $('form').submit(function(e) {
    e.preventDefault(); 
    let form = $(this);
    let m_method='POST'; 
    let m_action=$(this).attr('action'); 
    let formStatus = 1;
    let fieldStatus = 1;
    let $fields = form.find('.js-form-field');
    $fields.parent().removeClass('error-field ');

    $fields.each(function() {
      var $this = $(this);
      validateInput($this);
    });

    if(fieldStatus === 0) {
      formStatus = 0;
    };


    if(formStatus === 1) {


      let m_data = $(this).serialize();
      $.ajax({
      	type: m_method,
      	url: m_action,
      	data: m_data,
      	success: function(result) { 
      		console.log('success');
          
          $fields.parent().removeClass('error-field');
          form.find('input, textarea').val('');
          $('.js-form-link').trigger('click');

        }
      }); 

    };

    function validateInput(input) {

    	var val = input.val();
    	var nameStr = input.attr('name');


    	switch (nameStr) {
    		case 'name':
    		if(!isValidGeneral(val)) {
    			input.parent().addClass('error-field');
    			fieldStatus = 0;
    		} break;
    		case 'email':
    		if(!isValidEmail(val)) {
    			input.parent().addClass('error-field');
    			fieldStatus = 0;
    		} break;
    		case 'phone':
    		if(!isValidPhope(val)) {
    			input.parent().addClass('error-field');
    			fieldStatus = 0;
    		} break;
    		default: ;
    	};
    };
    function isValidGeneral(val) {
    	if(val.length >= 2) return 1;
    	return 0;
    };
    function isValidPhope(phone) {
    	var regExp = new RegExp(/((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}/);
    	return regExp.test(phone);
    };
    function isValidEmail(email) {
    	var regExp = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    	return regExp.test(email);
    };

  });
};
module.exports = formSubmit;
