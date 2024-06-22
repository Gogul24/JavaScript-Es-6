$("#myform").validate({
    rules:{
        name:{
            minlenght:2
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlenght:10,
            maxlength:10
        }
    },
    messages:{
        name:{
            required:"Please enter your name",
            minlenght:"Name at least 2 characters"
        },
        email:"Please enter your email",
        phone:"Please enter your phone number",
        subject:"Please enter the subject",
        formmessage:"Please enter the message"

    },
    submitHandler: function(form) {
      form.submit();
    }
   });