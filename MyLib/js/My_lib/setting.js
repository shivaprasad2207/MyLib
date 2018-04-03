var user_role ;

function settings ( name , flag){
    
    switch (flag){
        
        case 'USER_DETAILS':       settings_user_details ( name , flag );                                
                                    break;
        
        case 'CHANGE_PASSWD':       settings_change_passwd ( name , flag );
                                    break;
        
        case 'CHANGE_LOGIN':        settings_change_login ( name , flag );
                                    break;
        
        case 'EDIT_USER_DETAILS':   settings_edit_user_details ( name , flag );
                                    break;                       
    }
}



function select_this_user (){
    document.getElementById("selected_uname").value = document.getElementById("search_uname").value;
}



function search_user_info_by_fields (){
    var form_params = $("#search_by_form").serialize();
    $("#search_by_load_disp").html('<img src="/static/images/My_lib/1.gif" />');  
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'SEARCH_BY_USER_FIELDS_PARAMS&' + form_params;
    $("#search_by_form").html('');
    
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                 $("#search_by_load_disp").html('');
				 document.getElementById("search_by_mesg").style.visibility = 'visible';
			          $("#search_by_mesg_disp").html(data);
                        },
        "html"
    );    
}

function search_by_user_fields ( name , flag  ){
    $("#load_disp").html('<img src="/static/images/My_lib/1.gif" />');  
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'SEARCH_BY_USER_FIELDS';
    $("#setting_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_disp").html('');
				$("#setting_box_disp").html(data);
			    
                        },
        "html"
    );    
  
}

function search_user_by_admin ( name , flag  ){
    $("#load_disp").html('<img src="/static/images/My_lib/1.gif" />');  
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'USER_SEARCH_BY_ADMIN';
    $("#setting_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_disp").html('');
				$("#setting_box_disp").html(data);
			    
                        },
        "html"
    );    
 
}

 function show_users_by_role ( name , flag ){
    $("#load_disp").html('<img src="/static/images/My_lib/1.gif" />');  
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'USER_CATEGORY_BY_ROLES';
    $("#setting_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_disp").html('');
				$("#setting_box_disp").html(data);
			    
                        },
        "html"
    );    
    
 }

 
 function get_info_of_this_shop_admin ( user_name){
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'GET_INFO_BY_LOGIN_NAME_SHOP_ADMIN' + '&user_name=' + user_name;
    var load_disp = '#' + 'load_disp_' + user_name;
    $(load_disp).html('<img src="/static/images/My_lib/1.gif" />');
    var title = '<b style="\
                                                    background-image:url(/static/images/My_lib/oinfo_title_bar.png); \
                                                    height:15px; \
                                                    width:200px; color:white;padding:0px"> \
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    User Information \
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                </b>';
    $.ajax({
            url : url,
            type: 'GET',
            async: true,
            dataType: "html",
            context: document.body,
            processData:true,
            cache:false,
            global:true,
            traditional:true,
            success: function(data, textStatus, jqXHR) {
                        $(load_disp).html(data).dialog({
                                modal: true,
                                title: title,
                                hide:"explode",
                                open: function(event, ui) {  
                                        $('.ui-dialog-titlebar-close')
                                        .removeClass("ui-dialog-titlebar-close")
                                        .html('<img src="/static/images/My_lib/closebutton.png" width="25" height="25" style="padding:1px">');
                                        $('.ui-widget-overlay').css('width','100%');
                                },  
                                
				width: 800,
                                height: 700,
				
                                close: function(event, ui){
                                                    $('body').css('overflow','auto');
                                                    $(load_disp).html('');
						   
                                                    
                                       } 
                               
                              }).dialog('open');                
        }
   });  
}
 

function get_info_of_this_user ( user_name){
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'GET_INFO_BY_LOGIN_NAME' + '&user_name=' + user_name;
    var load_disp = '#' + 'load_disp_' + user_name;
    $(load_disp).html('<img src="/static/images/My_lib/1.gif" />');
    var title = '<b style="\
                                                    background-image:url(/static/images/My_lib/oinfo_title_bar.png); \
                                                    height:15px; \
                                                    width:200px; color:white;padding:0px"> \
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    User Information \
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                </b>';
    $.ajax({
            url : url,
            type: 'GET',
            async: true,
            dataType: "html",
            context: document.body,
            processData:true,
            cache:false,
            global:true,
            traditional:true,
            success:function(data, textStatus, jqXHR) {
                        $(load_disp).html(data).dialog({
                                title: title,
                                open: function(event, ui) {  
                                        $('.ui-dialog-titlebar-close')
                                        .removeClass("ui-dialog-titlebar-close")
                                        .html('<img src="/static/images/My_lib/closebutton.png" width="25" height="25" style="padding:1px">');
                                        $('.ui-widget-overlay').css('width','100%');
                                },  
                                
				width: 800,
                                height: 700,
				              
                                close: function(event, ui){
                                                    $('body').css('overflow','auto');
                                                    $(load_disp).html('');
						   
                                                    
                                       } 
                               
                              }).dialog('open');                
        }
    });  
    
}

function delete_this_user_by_admin ( name){
  $("#user_prom_disp").html('<img src="/static/images/My_lib/1.gif" />');   
  var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'DELETE_THIS_USER' + '&name=' + name;  
  $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#user_prom_disp").html('');
                                document.getElementById("admin_mesg_table").style.visibility = 'visible';                                
				$("#admin_mesg").html(data);
                        },
        "html"
    );      
}



function promote_de_this_user_by_admin ( user_name) {
    $("#user_prom_disp").html('<img src="/static/images/My_lib/1.gif" />');
    
    var x= document.getElementById("my_selected").selectedIndex;
    var y = document.getElementById("my_selected").options;
    var text = y[x].text;
    var is_shop_admin = new RegExp(/Shop Admin/i);
    var is_biz_admin = new RegExp(/Biz Admin/i);
    var is_user = new RegExp(/User/i);
    var role ;
    if ( is_shop_admin.test(text) ){
        role = 'shop_admin';
    }
    else if ( is_biz_admin.test(text) ){
        role = 'biz_admin';
    }
    else if ( is_user.test(text) ){
        role = 'user'; 
    }
    else{
        role = 'Admin';   
    }
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'CHANGE_USER_ROLE_BY_NAME' + '&role=' + role + '&name=' + user_name;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#user_prom_disp").html('');
                                document.getElementById("admin_mesg_table").style.visibility = 'visible';                                
				$("#admin_mesg").html(data);
                        },
        "html"
    );    
}

function show_users_of_this_role (){
    $("#category_load_disp").html('<img src="/static/images/My_lib/1.gif" />');
    var x= document.getElementById("myselected").selectedIndex;
    var y = document.getElementById("myselected").options;
    var text = y[x].text;
    var is_shop_admin = new RegExp(/shop/i);
    var is_biz_admin = new RegExp(/biz/i);
    var is_Admin = new RegExp(/Admin/i);
    var is_user = new RegExp(/user/i);
    var role ;
    if ( is_shop_admin.test(text) ){
        role = 'shop_admin';
    }
    else if ( is_biz_admin.test(text) ){
        role = 'biz_admin';
    }
    else if ( is_Admin.test(text) ){
        role = 'Admin';
    }
    else{
       role = 'user';
    }
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'GET_USER_BY_ROLES' + '&role=' + role;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#category_load_disp").html('');
                                document.getElementById("category_info_table").style.visibility = 'visible';                                
				$("#category_info_disp").html(data);
			    
                        },
        "html"
    );    
}
 
function create_new_user ( name , flag ){
    $("#load_disp").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'CREATE_NEW_USER';
    $("#setting_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_disp").html('');
				$("#setting_box_disp").html(data);
			    
                        },
        "html"
    );    
    $("#setting_box_disp").html( name + ' ' + flag );    
}


function manage_shop_admin ( name , flag ){
    $("#load_disp").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'MANAGE_SHOP_ADMIN';
    $("#setting_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_disp").html('');
				$("#setting_box_disp").html(data);
			    
                        },
        "html"
    );    
    $("#setting_box_disp").html( name + ' ' + flag );    
}


function submit_new_user_create (
                                 create_form,
                                 edit_load_disp,
                                 create_mesg_table,
                                 create_mesg_disp
                                 ) {
 
    var jq_form             = "#" + create_form;
    var jq_load_disp        = "#" + edit_load_disp;
    var jq_mesg_disp        = "#" + create_mesg_disp;
  
    $(jq_load_disp ).html('<img src="/static/images/My_lib/1.gif" />'); 
    var form_params = $(jq_form).serialize();  
    $(jq_form).remove();
    document.getElementById(create_mesg_table).style.visibility = 'visible';
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'SUBMIT_CREATE_NEW_USER&' + form_params;
    
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $(jq_load_disp ).html('');
				$(jq_mesg_disp).html(data);
			    
                        },
        "html"
    );        
}


function promote_user_new_role () {
    
    var x= document.getElementById("myselected").selectedIndex;
    var y = document.getElementById("myselected").options;
    var text = y[x].text;
    var is_shop_admin = new RegExp(/shop/i);
    var is_biz_admin = new RegExp(/biz/i);
    var is_Admin = new RegExp(/Admin/i);
    var is_user = new RegExp(/user/i);
    var user =  document.getElementById("selected_user").value;
    var mesg;
    if ( is_shop_admin.test(text) ){
        mesg = user + '  will be promoted to Shop Admin';
    }
    else if ( is_biz_admin.test(text) ){
        mesg = user + '  will be promoted to Biz Admin';
    }
    else if ( is_Admin.test(text) ){
        mesg = user + ' will be promoted to Admin';
    }
    else if ( is_user.test(text) ){
        mesg = user + ' will be demoted to General User';
    }
    document.getElementById("summury_box").value = mesg;
    
}

function get_form_to_promote_diff_roles( name , flag ) {
    $("#load_disp").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'PROMOTE_ROLES';
    $("#setting_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_disp").html('');
				$("#setting_box_disp").html(data);
			    
                        },
        "html"
    );
    
    
    $("#setting_box_disp").html( name + ' ' + flag );    
    
}


$("#search_ing").live("keydown",my_auto_complete);

function my_auto_complete () {
            
            $("#search_ing").autocomplete({
               source: "return_user_names.pl",
               minLength: 1,
               select: function(event, ui) {
                                $('#search_ing').val(ui.item.id);
                        }
           });
}


function de_promote_user_to_shop_amin( name , flag ) {
   $("#shop_de_admin_load_disp").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'DE_PROMOT_SHOP_ADMIN';
    $("#setting_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#shop_de_admin_load_disp").html('');
				$("#setting_box_disp").html(data);
			    
                        },
        "html"
    );    
    $("#setting_box_disp").html( name + ' ' + flag );    
    
}

function depromote_shop_admin (){
    var select_ing = document.getElementById("search_ing").value;
    document.getElementById("selected_user").value = select_ing;
    document.getElementById("search_ing").value = "";
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'DE_PROMOTED_USER_DETAILS' + '&promoted_user=' + select_ing;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#shop_admin_load_disp").html('');
				$("#promoted_user_info").html(data);
			    
                        },
        "html"
    );

}


function submit_de_promot_user ( name){
    
    $("#shop_admin_deform").html('');
    $("#shop_de_admin_load_disp").html('');
    $("#shop_admin_info_tab").html('');
    document.getElementById("shop_de_admin_mesg").style.visibility = 'visible';
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'COMMIT_DEPROMOTED_USER' + '&promoted_user=' + name;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#shop_de_admin_mesg_disp").html(data);
                        },
        "html"
    );
    
}


function get_details_of_user_for_roles () {
    
    var select_ing = document.getElementById("search_ing").value;
    document.getElementById("selected_user").value = select_ing;
    document.getElementById("search_ing").value = "";
    $("#shop_admin_load_disp").html('<img src="/static/images/My_lib/1.gif" />' );
    
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'GET_USER_ROLE' + '&promoted_user=' + select_ing;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                document.getElementById("role_disp").style.visibility = 'visible';
				$("#role_disp_str").html(data);
			    
                        },
        "html"
    );

    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'USER_DETAILS_FOR_NEW_ROLE' + '&promoted_user=' + select_ing;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#shop_admin_load_disp").html('');
				$("#promoted_user_info").html(data);
			    
                        },
        "html"
    );
}


function promote_shop_admin () {
    
    var select_ing = document.getElementById("search_ing").value;
    document.getElementById("selected_user").value = select_ing;
    document.getElementById("search_ing").value = "";
    $("#shop_admin_load_disp").html('<img src="/static/images/My_lib/1.gif" />' );
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'PROMOTED_USER_DETAILS' + '&promoted_user=' + select_ing;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#shop_admin_load_disp").html('');
				$("#promoted_user_info").html(data);
			    
                        },
        "html"
    );
}

function submit_promot_user (  user_name ,shop_admin_form, shop_admin_load_disp, shop_admin_info_tab, shop_admin_mesg){
    $("#shop_admin_load_disp").html('');
    $("#shop_admin_form").html('');
    $("#shop_admin_info_tab").html('');
    document.getElementById(shop_admin_mesg).style.visibility = 'visible';
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'COMMIT_PROMOTED_USER' + '&promoted_user=' + user_name;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#shop_admin_mesg_disp").html(data);
                        },
        "html"
    ); 
}
function submit_promot_user_role (user_name ){
    
    var x= document.getElementById("myselected").selectedIndex;
    var y = document.getElementById("myselected").options;
    var role = y[x].text;

    $("#admin_form").html('');
    $("#shop_admin_load_disp").html('');
    $("#user_info" ).html('');
    document.getElementById("shop_admin_mesg").style.visibility = 'visible';
    var url = '/cgi-bin/My-Lib/setting.pl?flag='  +  'COMMIT_ROLE_TO_USER' +  '&promoted_user='  + user_name + '&role=' + role;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#shop_admin_mesg_disp").html(data);
                        },
        "html"
    ); 
  
}

function remove_setting_box_disp ( id ){
    id = '#' + id;
    $(id).remove();
}

function promote_user_to_shop_amin( name , flag ) {
   $("#load_disp").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'PROMOT_SHOP_ADMIN';
    $("#setting_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_disp").html('');
				$("#setting_box_disp").html(data);
			    
                        },
        "html"
    );
    
    
    $("#setting_box_disp").html( name + ' ' + flag );    
    
}

function settings_user_details ( name , flag ){
    $("#load_disp").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'USER_DETAILS';
    $("#setting_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_disp").html('');
				$("#setting_box_disp").html(data);
			    
                        },
        "html"
    );
    $("#setting_box_disp").html( name + ' ' + flag );
}

function remove_setting_disp (id){
    var disp = "#" + id ;
    $(disp).remove ();
}

function settings_change_passwd ( name , flag ){
     $("#load_disp").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'CHANGE_PASSWD';
    $("#setting_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_disp").html('');
				$("#setting_box_disp").html(data);
			    
                        },
        "html"
    );
  
    $("#setting_box_disp").html( name + ' ' + flag );
   
}
function settings_change_login ( name , flag ){
     $("#setting_box_disp").html( name + ' ' + flag );
    
}

function settings_edit_user_details ( name , flag ){
     $("#load_disp").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'EDIT_USER_DETAILS';
    $("#setting_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_disp").html('');
				$("#setting_box_disp").html(data);
			    
                        },
        "html"
    );
    
    
    $("#setting_box_disp").html( name + ' ' + flag );
    
}


function submit_user_edit (  ){
    var form_params = $("#edit_form").serialize();
    $("#edit_load_disp").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'SUBMIT_USER_DETAILS&' + form_params;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#edit_load_disp").html('');
                                $("#edit_form").remove();
                                $("#log").html(data);
                        },
        "html"
    );
}


function submit_user_passwd ( ){
    var form_params = $("#passwd_form").serialize();
    $("#p_load_disp").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'CHANGE_PASSWD_SUBMIT&' + form_params;
    
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#p_load_disp").html('');
                                $("#passwd_form").remove(); 
                                $("#log_1").html(  data );
                        },
        "html"
    );
}

$("#search_uname").live("keydown",search_uname_auto_complete);
function search_uname_auto_complete ( ) {
            $("#search_uname").autocomplete({
               source: "user_search_by_id.pl?id_x=uname",
               minLength: 1,
               select: function(event, ui) {
                                $("#search_uname").val(ui.item.id);
                        }
           });
}

$("#search_fname").live("keydown",search_fname_auto_complete);
function search_fname_auto_complete ( ) {
            $("#search_fname").autocomplete({
               source: "user_search_by_id.pl?id_x=fname" ,
               minLength: 1,
               select: function(event, ui) {
                                $("#search_fname").val(ui.item.id);
                        }
           });
}

$("#search_lname").live("keydown",search_lname_auto_complete);
function search_lname_auto_complete ( ) {
            $("#search_lname").autocomplete({
               source: "user_search_by_id.pl?id_x=lname",
               minLength: 1,
               select: function(event, ui) {
                                $("#search_lname").val(ui.item.id);
                        }
           });
}

$("#search_adress").live("keydown",search_adress_auto_complete);
function search_adress_auto_complete ( ) {
            $("#search_adress").autocomplete({
               source: "user_search_by_id.pl?id_x=adress",
               minLength: 1,
               select: function(event, ui) {
                                $("#search_adress").val(ui.item.id);
                        }
           });
}

$("#search_dadress").live("keydown",search_dadress_auto_complete);
function search_dadress_auto_complete ( ) {
            $("#search_dadress").autocomplete({
               source: "user_search_by_id.pl?id_x=dadress",
               minLength: 1,
               select: function(event, ui) {
                                $("#search_dadress").val(ui.item.id);
                        }
           });
}

$("#search_phone").live("keydown",search_phone_auto_complete);
function search_phone_auto_complete ( ) {
            $("#search_phone").autocomplete({
               source: "user_search_by_id.pl?id_x=phone",
               minLength: 1,
               select: function(event, ui) {
                                $("#search_phone").val(ui.item.id);
                        }
           });
}

$("#search_email").live("keydown",search_email_auto_complete);
function search_email_auto_complete ( ) {
            $("#search_email").autocomplete({
               source: "user_search_by_id.pl?id_x=email",
               minLength: 1,
               select: function(event, ui) {
                                $("#search_email").val(ui.item.id);
                        }
           });
}

function auto_populate_form ( id ){
    
    var is_uname = new RegExp(/uname/);
    var is_fname = new RegExp(/fname/);
    var is_lname = new RegExp(/lname/);
    var is_adress = new RegExp(/adress/i);
    var is_dadress = new RegExp(/search_dadress/i);
    var is_phone = new RegExp(/phone/);
    var is_email = new RegExp(/email/);
    var param;
    if ( is_uname.test(id) ){
        param = 'field=uname&fval=' + document.getElementById(id).value ;
    }else if ( is_fname.test(id) ){
        param = 'field=fname&fval=' + document.getElementById(id).value ;      
    }else if ( is_lname.test(id) ){
        param = 'field=lname&fval=' + document.getElementById(id).value ;      
    }else if ( is_adress.test(id) ){
        param = 'field=adress&fval=' + document.getElementById(id).value ;      
    }else if ( is_dadress.test(id) ){
        param = 'field=dadress&fval=' + document.getElementById(id).value ;      
    }else if ( is_phone.test(id) ){
        param = 'field=phone&fval=' + document.getElementById(id).value ;      
    }else if ( is_email.test(id) ){
        param = 'field=email&fval=' + document.getElementById(id).value ;      
    }
    
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'USER_SEARCH_BY_FIELD&' + param;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                
                                $("#search_uname").val(data.search_uname);  
                                $("#search_fname").val(data.search_fname);
                                $("#search_lname").val(data.search_lname);
                                $("#search_adress").val(data.search_adress);  
                                $("#search_dadress").val(data.search_dadress);
                                $("#search_phone").val(data.search_phone);
                                $("#search_email").val(data.search_email);
                                
                        },
        "json"
    );
  
    var user_login_name  =  document.getElementById("search_uname").value;
    var param = '&promoted_user=' + user_login_name;
    
    url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'GET_USER_ROLE&' + param;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                          
                         
                         $.get( 
                                '/cgi-bin/My-Lib/setting.pl?flag=' + 'GET_EXTRA_USER_FILED&user_role=' + data + param ,
                                function(data, textStatus, jqXHR) {
                                                    $("#disp_user_search_info").html(data);                                      
                            },
                            "text"
                         );
        },
        "text"
    );    
}

function change_user_role_by_search_admin ( name){
    var x= document.getElementById("myselected_2").selectedIndex;
    var y = document.getElementById("myselected_2").options;
    var text = y[x].text;   
    var is_shop_admin = new RegExp(/Promote to Shop Admin/i);
    var is_biz_admin = new RegExp(/Promote to Biz Admin/i);
    var is_Admin = new RegExp(/Promote to Admin/i);
    var is_user = new RegExp(/Promote to General User/i);
    
     var role ;
    if ( is_shop_admin.test(text) ){
        role = 'shop_admin';
    }
    else if ( is_biz_admin.test(text) ){
        role = 'biz_admin';
    }
    else if ( is_Admin.test(text) ){
        role = 'Admin';
    }
    else{
       role = 'user';
    }
    var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'CHANGE_USER_ROLE_ADMIN_SEARCH' + '&role=' + role + '&name=' + name ;
    $.get(
         url,
         function(data, textStatus, jqXHR ){
                                $("#promoted_mesg").html(data);			    
                        },
        "html"
    );        
}

function delete_user_search_admin ( name){
    //alert ( name);
     var url = '/cgi-bin/My-Lib/setting.pl?flag=' + 'DELETE_THIS_USER' + '&name=' + name;  
     $.get(
         url,
         function(data, textStatus, jqXHR) {                          
				$("#del_mesg").html(data);
                        },
        "html"
    );      
    
}