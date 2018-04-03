function ask_librarian (){
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'ASK_LIBRARIAN';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );    
}


function visitor_notes (){
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'VISITOR_NOTES';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );    
}

function research_paper (){
    clear();
   $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'RESEARCH_PAPER';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );      
    
}

function need_lib_perm (){
    alert ( 'Need Librarian permission' );
}

function xerox(){
    clear();
   $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'XEROX';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );       
    
}



function scan(){
    clear();
   $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'SCAN';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );       
    
}

function print(){
    clear();
   $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'PRINT';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );       
    
}

function conference_room (){
    clear();
  $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'CONFERENCE_ROOM';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );         
}

function stationaries(){
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'STATIONARIES';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );         
  
}

function book_delivery (){
    clear();
   $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'BOOK_DELIVERY';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );          
  
}


function learing_center (){
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'LEARNING_CENTER';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );          
 
}

function lib_management (){
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'LIB_MANGEMENT';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );          
 
}

function announcement() {
    clear();
   $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'ANNOUNCEMENT';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );           

}

function calender_events() {
    clear();
  $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'CALENDER_EVENTS';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );           
    
}

function sponsered_events() {
  clear();
  $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'SPONCER_EVENTS';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );           
    
}



function gallery() {
   clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'GALLERY';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );           
}

function timings() {
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'TIMINGS';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );               
}

function lib_map() {
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'LIB_MAP';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );               
    
    
}

function staff_dirs() {
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'PAGE_UNDER_CONSTUCTION';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );               
    
    
}

function employment() {
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'PAGE_UNDER_CONSTUCTION';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );               
    
    
}

function funds_contribution() {
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'FUND_CONTRIBUTION';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );               
    
}

function rules_and_guidelines (){
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'RULES_GUIDELINES';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );                 
    
}

function borrowing_guidelines (){
   clear();
   $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'BORROWING_RULES';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );                  
}

function fees_and_fines (){
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'FEES_FINES';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );                   
}


function material_donation (){
    clear();
    $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'MATRIEAL_DONATION';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );                
}

function monetory_donation (){
   clear();
   $("#core_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/core.pl?flag=' + 'MONETORY_DONATION';
    $("#core_msg").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#core_load").html('');
				$("#core_msg").html(data);
			    
                        },
        "html"
    );                 
       
}

function clear(){
    $("#user_manage").remove();
    $("#lib_manage").remove();
    $("#setting").remove();
    $("#reservation_saved").remove();
    $("#mail_menu").remove();
    $("#book_details_in_dialog").remove();
    $("#local_dialog_box").remove();

}




function get_param_new_book_add ( ) {

    var form_params = $("#add_new_book").serialize();
    $("#load_image").html('<img src="/static/images/My_lib/1.gif" />');
    
    var book_cd;
    var x= document.getElementById("form_cd").selectedIndex;
    var y = document.getElementById("form_cd").options;
    var book_cd = y[x].text;
    
    var category_opt;
    var x= document.getElementById("category").selectedIndex;
    var y = document.getElementById("category").options;
    var category_opt = y[x].text;
    
    var subcategory_opt;
    var x= document.getElementById("subcategory").selectedIndex;
    var y = document.getElementById("subcategory").options;
    var subcategory_opt = y[x].text;
   
    form_params = form_params + '&category_opt='+category_opt + '&subcategory_opt='+subcategory_opt + '&book_cd='+book_cd;
    var url = '/cgi-bin/My-Lib/lib_manage.pl?flag=' + 'ADD_NEW_BOOK_PARAMS&' + form_params;
    $("#search_by_form").html('');
    
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                  $("#load_image").html('');
			          $("#user_manage_box_disp").html(data);
                        },
        "html"
    );    

}
function add_multiple_new_book ( name , flag ){
    $("#load_image").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/lib_manage.pl?flag=' + 'ADD_MULTIPLE_BOOKS';
    $("#user_manage_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_image").html('');
				$("#user_manage_box_disp").html(data);
			    
                        },
        "html"
    );    
}

function post_file_upload_function ( ){
   var form_params = $("#my_upload_form").serialize(); 
   $("#load_image").html('<img src="/static/images/My_lib/1.gif" />');  
   var url = '/cgi-bin/My-Lib/lib_manage.pl?' + form_params ;
   $("#user_manage_box_disp").html('');
   $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_image").html('');
				$("#user_manage_box_disp").html(data);
			    
                        },
        "html"
    );      
    
}

function redirect_to_lib_manage (){
    window.location = "index.pl?AppParam=library_manage";
}


function show_sample_xls_sheet ( ){
 
    var load_disp = "#load" ;
    $("#book_details_in_dialog").remove();
    $("#local_dialog_box").remove();
    $(load_disp).html('<img src="/static/images/My_lib/1.gif" />'); 
     var url = '/cgi-bin/My-Lib/lib_manage.pl?flag=SAMPLE_XLS' ;
    var tag = $('<div  id="local_dialog_box" style="overflow:scroll"> </div>');
    var title = '<b style="\
                                                    background-image:url(/static/images/My_lib/oinfo_title_bar.png); \
                                                    height:15px; \
                                                    width:200px; color:white;padding:0px"> \
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    Sample Xsl Sheet \
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                </b>' ;
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
                       tag.html(data).dialog({
                                modal: true,
                                title: title,
                                hide:"explode",
                                open: function(event, ui) {  
                                        $('.ui-dialog-titlebar-close')
                                        .removeClass("ui-dialog-titlebar-close")
                                        .html('<img src="/static/images/My_lib/closebutton.png" width="25" height="25" style="padding:1px">');
                                        $('.ui-widget-overlay').css('width','100%');
                                },  
				width: 900,
                                height: 400,              
                                close: function(event, ui){
                                                    $('body').css('overflow','auto');
                                                    $(load_disp).html('');
						   
                                                    
                                       } 
                               
                              }).dialog('open');                
	 }
    
       }); 
   }

function show_book_search_tmplt () {
   $("#load_image").html('<img src="/static/images/My_lib/1.gif" />');
   var url = '/cgi-bin/My-Lib/lib_manage.pl?flag=' + 'SHOW_BOOK_SERACH_TMPLT';
   $("#user_manage_box_disp").html('');
   $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_image").html('');
				$("#user_manage_box_disp").html(data);
			    
                        },
        "html"
    );      
}


function search_book_with_param_adm ( random1 , random2){
    var form_params = $("#search_book").serialize();
    var param;
    var book_name = document.getElementById("book_name").value;
    var book_name_flag = 1 ;
    if (book_name.length == 0){
        book_name_flag = 0;   
    }else{
        param = '&book_name=' + book_name ;
    }
    
    var book_publisher = document.getElementById("book_publisher").value;
    var book_publisher_flag = 1 ;
    if (book_publisher.length == 0){
        book_publisher_flag = 0;   
    }else{
        param = param + '&book_publisher=' + book_publisher ;
        
    }
    
    var book_author = document.getElementById("book_author").value;
    var book_author_flag = 1 ;
    if (book_author.length == 0){
        book_author_flag = 0;   
    }else{
        param = param + '&book_author=' + book_author ;
        
    }
    
    var book_isbn = document.getElementById("book_isbn").value;
    var book_isbn_flag = 1 ;
    if (book_isbn.length == 0){
        book_isbn_flag = 0;   
    }else{
        param = param + '&isbn_num=' + isbn_num ;    
        
    }
    
    var x= document.getElementById("category").selectedIndex;
    var y = document.getElementById("category").options;
    var category = y[x].text;
    var category_flag = 1 ;
    if (category.length == 0){
        category_flag = 0;
    }else{
        param = param + '&category=' + category ;    
    }
    
    var x= document.getElementById("subcategory").selectedIndex;
    var y = document.getElementById("subcategory").options;
    var subcategory = y[x].text;
    var subcategory_flag = 1 ;
    if (subcategory.length == 0){
        subcategory_flag = 0;
    }else{
        param = param + '&subcategory=' + subcategory ;
        
    }
    if ( book_name_flag || book_publisher_flag || book_author_flag || book_isbn || category_flag || subcategory_flag){
        
        var url = '/cgi-bin/My-Lib/book.pl?flag='+'SEARCH_WITH_PARAM'+ param;
	var sql;
        $.get(
            url,
            function(data, textStatus, jqXHR) {
                      sql = data.toString();
		      url = '/cgi-bin/My-Lib/lib_manage.pl?flag=BOOKS_SEARCH_QUERY'+ '&sql=' + sql; 
		      $.get(
			    url,
			    function(data, textStatus, jqXHR) {
				    $("#sql").html(data);
			    },
			    "html"
		    );     
	    },
        "text"
        );
        

    }else{
           alert ( 'Need at-least One search Parameter');     
        
    }

}


function add_book_copies_to_book ( book_id){
    var count =  document.getElementById("copies_to_add").value;
    $("#dialog_load").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/lib_manage.pl?flag=ADD_BOOK_COPY' + '&book_id=' + book_id + '&count=' + count;
    $.get(
         url,
         function(data, textStatus, jqXHR) {
				$("#dialog_load").html(data);
                        },
        "html"
    );         
}






function modify_book_info ( book_id ){
    var load_disp = "#load" ;
    $("#book_details_in_dialog").remove();
    $("#local_dialog_box").remove();
    $("#load_image").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/lib_manage.pl?flag=SHOW_BOOK_INFO_MODIFY' + '&book_id=' + book_id;
    var tag = $('<div  id="local_dialog_box" style="overflow:scroll"> </div>');
    var title = '<b style="\
                                                    background-image:url(/static/images/My_lib/oinfo_title_bar.png); \
                                                    height:15px; \
                                                    width:200px; color:white;padding:0px"> \
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    Book Details \
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\
                                                </b>' ;
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
                       tag.html(data).dialog({
                                modal: true,
                                title: title,
                                hide:"explode",
                                open: function(event, ui) {  
                                        $('.ui-dialog-titlebar-close')
                                        .removeClass("ui-dialog-titlebar-close")
                                        .html('<img src="/static/images/My_lib/closebutton.png" width="25" height="25" style="padding:1px">');
                                        $('.ui-widget-overlay').css('width','100%');
                                },  
				width: 900,
                                height: 900,              
                                close: function(event, ui){
                                                    $('body').css('overflow','auto');
						    $("#load_image").html('');
						   
                                                    
                                       } 
                               
                              }).dialog('open');                
	 }
    
       }); 
   }


function out_put_speard_sheet () {
    $("#load_image").html('<img src="/static/images/My_lib/1.gif" />');
    var url = '/cgi-bin/My-Lib/lib_manage.pl?flag=' + 'OUT_PUT_XLS';
    $("#user_manage_box_disp").html('');
    $.get(
         url,
         function(data, textStatus, jqXHR) {
                                $("#load_image").html('');
				$("#user_manage_box_disp").html(data);
			    
                        },
        "html"
    );       
    
    
    
}