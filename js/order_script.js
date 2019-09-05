function isEmpty(temp) {
    if (temp == "" || temp == " ")
        return false;
    else
        return true;
}

function check(form) {

    var fail = false; /** if something wrong */

    var name = form.name.value; /** name */
    var mail = form.mail.value; /** e-mail */
    var comment = form.comment.value; /** comment to order */

    if (!isEmpty(name) && !isEmpty(mail))
        fail = "You must fill the form!";
            else if (!isEmpty(name))
            fail = "Write the correct name please";
                    else if (!isEmpty(mail))
                    fail = "Write the correct email please";

    if(fail) {
        alert(fail);
        return false;
    }

    if(mail) {
        res = window.confirm("Your name: " + name + 
                            "\nClient e-mail: " + mail +
                            "\nComment: " + comment +
                            "\nAre you shure to make this order?");
        
        if (res) {
            /*confirm and refresh the page for new order */
            alert("Your order has been send.");
            window.location = URL('order_form.html');
        }
        else
            return false;    
    }

}