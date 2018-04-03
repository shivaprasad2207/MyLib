#!/usr/bin/perl
BEGIN {
   push @INC, "./lib";  
   push @INC, '/home/nnsprasad/perl/usr/lib/perl5';
   push @INC, '/home/nnsprasad/perl/usr/lib/perl5/x86_64-linux-thread-multi';
   require '/home/nnsprasad/public_html/cgi-bin/My-Lib/debug.pl';
   binmode(STDIN );  # Form data
   binmode(STDOUT, ':encoding(UTF-8)');  # HTML
   binmode(STDERR, ':encoding(UTF-8)');  # Error messages
}

use DBI;
use CGI;
use CGI qw(:all -utf8);
use warnings;
use CGI::Session;
use strict;

my $LoginHeader = {
                        
                        -title => 'Technical Community Library',
                        -style=>[ 
                                       { -type =>'text/css', -src=>'/static/styles/My_lib/lib_1.css'},
                                      
                                    ],  
                         -script=>[
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/jquery.js'},
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/jquery.min.js' },
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/pre_logout.js' },
                                     ],
                    };




my $cgi = new CGI;
$cgi->autoEscape(undef);
print $cgi->header(-type=>"text/html", -charset=>"UTF-8");

print $cgi->start_html($LoginHeader); 

if ($cgi->param('status') eq 'error'){
    print '<p style="background-color:red;border-radius: 10px; width:300px;" border="1">Authontication ..ERROR:</p>';
}
if ($cgi->param('status') eq 'logout'){
    
    print '<p style="background-color:yellow;border-radius: 10px; width:300px;" border="1">Logout Successfully</p>';
}
if ($cgi->param('status') eq 'Alogout'){
    print '<p style="background-color:pink;border-radius: 10px; width:300px;" border="1">You have Logout Previously</p>';
}
if ($cgi->param('status') eq 'jslogout'){
    my $sid = $cgi->param('sid');
    my $cookie = $cgi->cookie(
                            -name=>'CGISESSID',
                            -value=>$sid,
                            -expires=>'-1d',
                        );
     $cgi->redirect(-cookie=>$cookie,-location=>"login.pl?status=logout"); 
}

print <<H12;


  <br><br>
    <span align="center" style="
                                 margin-top:70px;  
                                 margin-left:400px;
                                 
                                 background-color:#CEF6F5;
                                 position:relative;
                                 font-family: verdana,arial,sans-serif;
                                 font-size:22px;
                                 text-align: right;
                               " 
            >
            
            Web Based Technical Community Library 
   
   </span>
  
   
<table id="login">
   <tr> <td align="center">
   <div >

<form  action="login_verify.pl" method="get">
 
 <fieldset>
    <legend> Login </legend></b></h><input type="text" name="usr_name" size="30">
 </fieldset>
 
 <fieldset>
    <legend> Password </legend></b></h><input type="password" name="passwd" size="20">
 </fieldset>
     <input type="submit"  name = "submit" value = "Submit" /> &nbsp &nbsp &nbsp
     
</form> <br>

</div>
  </td> </tr>
  
</table>

<br><br>

<span align="center" style="
                                 margin-top:70px;  
                                 position:relative;
                                 font-family: verdana,arial,sans-serif;
                                 font-size:20px;
                                 text-align: right;
                               " 
            >
            Read me Text:
   
   </span>

   <span align="center" style="
                                 margin-top:70px;  
                                 position:relative;
                                 font-family: verdana,arial,sans-serif;
                                 font-size:15px;
                                 text-align: right;
                               " 
            >
            
           <br>
           It is web tool for technical community Library (virtual) to manage its regular work.<br>
           Like, borrowing books, reserving books as user of web tool and member of Library.<br>
           And it is having many books of different category and sub catogory managing them using this tool.<br>
            
   </span>

<span align="center" style="
                                 margin-top:70px;  
                                 position:relative;
                                 font-family: verdana,arial,sans-serif;
                                 font-size:20px;
                                 text-align: right;
                               " 
            >
            <br>Who are the users :
   
   </span>  

<span align="center" style="
                                 margin-top:70px;  
                                 position:relative;
                                 font-family: verdana,arial,sans-serif;
                                 font-size:15px;
                                 text-align: right;
                               " 
            >
            
           <br>
           There are 2 types of user those can use this Library  1. General User  2. Library Admin <br>
           In Short, A General user can be any member whose is registered for tool, having login details<br>
           Library Admin is Librarian who manages Library <br>
   </span>  
 
<span align="center" style="
                                 margin-top:70px;  
                                 position:relative;
                                 font-family: verdana,arial,sans-serif;
                                 font-size:20px;
                                 text-align: right;
                               " 
            >
            <br>General user :
   
   </span>    
<span align="center" style="
                                 margin-top:70px;  
                                 position:relative;
                                 font-family: verdana,arial,sans-serif;
                                 font-size:15px;
                                 text-align: right;
                               " 
            >
            
           <br>
           A general user can be created by Library Admin on by rule agreeing fees, rule and policies by Verbally<br>
           Once user is excepted agreement Librairian provides Login Credentials.i,e Login name and Password (initally it will be same as login name)<br>
           User can Login change his password, he can search book, he can reserve book <br>
           User can Navigate web once he login and see other facility like conference room, stationaries etc, <br>
   </span>     
 
<span align="center" style="
                                 margin-top:70px;  
                                 position:relative;
                                 font-family: verdana,arial,sans-serif;
                                 font-size:20px;
                                 text-align: right;
                               " 
            >
            <br>Library Admin :
   
   </span>

<span align="center" style="
                                 margin-top:70px;  
                                 position:relative;
                                 font-family: verdana,arial,sans-serif;
                                 font-size:15px;
                                 text-align: right;
                               " 
            >
            
           <br>
           A Librarian is manager of Technical community Library <br>
           Some of his roles include. <br>
           1. &nbsp Create/Delete user account and provide login credetial.<br>
           2. &nbsp Add/Delete books.<br>
           3. &nbsp Check reservation voilation, query on reservation, check on User book utilization.<br>
           4. &nbsp Providing convinience to user to read like reading room with other facility.<br>
           5. &nbsp He can provide details of book present in library in xls sheet using this tool.<br>
           6. &nbsp He can upload many book into data base using xls sheet in case lot stock has came.<br>
           <b> Login As Library Admin with username: shiva password: shiva </b> <br> 
   </span>
   
   <span align="center" style="
                                 margin-top:70px;  
                                 position:relative;
                                 font-family: verdana,arial,sans-serif;
                                 font-size:20px;
                                 text-align: right;
                               " 
            >
            <br>A Book :
   
   </span>
   <span align="center" style="
                                 margin-top:70px;  
                                 position:relative;
                                 font-family: verdana,arial,sans-serif;
                                 font-size:15px;
                                 text-align: right;
                               " 
            >
            
           <br>
           A book has many details apart, what book contains.<br>
           Below are the info that Library maintains for manage <br>
           1. &nbsp Book Name.<br>
           2. &nbsp Book Author.<br>
           3. &nbsp Book Publisher.<br>
           4. &nbsp Book Edition.<br>
           5. &nbsp Book ISBN Number.<br>
           6. &nbsp Book Pages and is having CD with it or not.<br>
          <b> 7. &nbsp Book may have many copies each copy is given code with alphanumeric name and is idetifier for that copy. </b> <br>
   </span>
   
    <span align="center" style="
                                 margin-top:70px;  
                                 position:relative;
                                 font-family: verdana,arial,sans-serif;
                                 font-size:20px;
                                 text-align: right;
                               " 
            >
           <b> <br>Plese Explore the Technical Library, it is for you to use</b>
           <br><br> 
  </span>         
           
   
H12


print '<div style="bottom:0px; float:right; padding:10px ">
						<SMALL style="bottom:0px;float:inherit;color:#BC8F8F">
						      <u>Web Site Copyright©<a href="http://www.shivaprasad.co.in" target="_blank"> Author </a></u>
						</SMALL>
          </div>'; 
   
print $cgi->end_html;