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

use CGI;
require 'debug.pl';
use CGI qw(:all -utf8);
use CGI::Carp qw(fatalsToBrowser);
require CGI::Session;
use Template;
use lib::Headers;
use strict;
use warnings;
use Data::Dumper;
our $MainPageHeader;

my $cgi = CGI::new;

my %page_function_hash = (
        'MainPage' => {
                        pFunction => \&F_MainPage,
                        pHeader =>  $MainPageHeader,
                        pBody => 'F_MainPageBody',
                        pFooter => 'F_MainPageFooter',
                        
                     },
        'search' => {
                        pFunction => \&F_search,
                        pHeader =>  $MainPageHeader,
                        pBody => 'F_MainPageBody',
                        pFooter => 'F_MainPageFooter',
                        
                     },
        'mail' => {
                        pFunction => \&F_mail,
                        pHeader =>  $MainPageHeader,
                        pBody => 'F_MainPageBody',
                        pFooter => 'F_MainPageFooter',
                        
                     },
         'settings'  => {
                        pFunction => \&F_Settings,
                        pHeader =>  $MainPageHeader,
                        pBody => 'F_MainPageBody',
                        pFooter => 'F_MainPageFooter',
                        
                     },
        'book_search' => {
                        pFunction => \&F_book_search,
                        pHeader =>  $MainPageHeader,
                        pBody => 'F_MainPageBody',
                        pFooter => 'F_MainPageFooter',
                        
                     },
        'book_detail' => {
                        pFunction => \&F_book_detail,
                        pHeader =>  $MainPageHeader,
                        pBody => 'F_MainPageBody',
                        pFooter => 'F_MainPageFooter',
                        
                     },
         'reserved' => {
                        pFunction => \&F_reserved,
                        pHeader =>  $MainPageHeader,
                        pBody => 'F_MainPageBody',
                        pFooter => 'F_MainPageFooter',
                        
                     },
         'user_manage' => {
                        pFunction => \&F_user_manage,
                        pHeader =>  $MainPageHeader,
                        pBody => 'F_MainPageBody',
                        pFooter => 'F_MainPageFooter',
                        
                     },
         'library_manage' => {
                        pFunction => \&F_library_manage,
                        pHeader =>  $MainPageHeader,
                        pBody => 'F_MainPageBody',
                        pFooter => 'F_MainPageFooter',
                     },
);



&AppInit( $cgi ); 

sub AppInit {
    my ($cgi) = @_;
    my $param = $cgi->param('AppParam');
    if (!$param){
        $param = 'MainPage';
    }elsif ($param =~ /\?/){
        my @params = split '\?' , $param;
        $cgi->{code} = $params[1];
        $param = $params[0];
    }
    $cgi->{'AppParam'} = $param  ;
    my $function_ref = $page_function_hash{$param}->{'pFunction'};
    $function_ref->($cgi);
}


sub F_MainPage {
    my ($cgi) = @_;
    my ($user_name,$role) = is_valid_user($cgi);
    my $param = $cgi->{'AppParam'};
    my $PageHeader = $page_function_hash{$param}->{'pHeader'};
    my $sid = $cgi->cookie('CGISESSID');
    print $cgi->header( );
    print $cgi->start_html($PageHeader);
    my $data = {
                 user_name => $user_name,
                 role  =>   $role,
                 sid =>  $sid,
               };
   my $out = ''; 
   my $tt = Template->new;
        $tt->process('main_page.html', $data, \$out)
        || die $tt->error;
   print $out;  
   print $cgi->end_html();
}


sub F_search {
   my ($cgi) = @_;
    my ($user_name,$role) = is_valid_user($cgi);
    my $param = $cgi->{'AppParam'};
    my $PageHeader = $page_function_hash{$param}->{'pHeader'};
    my $sid = $cgi->cookie('CGISESSID');
    print $cgi->header( );
    print $cgi->start_html($PageHeader);
    my $random1 = create_uniq_mail_index_string ( 6 );
    my $random2 = create_uniq_mail_index_string ( 6 );
    my @categories = get_all_category_of_books ( );
    if ( $categories[0] =~ 'FAIL'){ die @categories};
    my @sub_categories = get_all_subcategory_of_books ( );
    if ( $sub_categories[0] =~ 'FAIL'){ die @sub_categories};
   
    my $data = {
                 user_name => $user_name,
                 role  =>   $role,
                 sid =>  $sid,
                 random1=> $random1,
                 random2 => $random2,
                 Category =>  \@categories ,
                 SubCategory => \@sub_categories ,
               };
    
   my $out = ''; 
   my $tt = Template->new;
        $tt->process('search_page.html', $data, \$out)
        || die $tt->error;
   print $out;  
   print $cgi->end_html();   
 
}


sub F_mail {
    my ($cgi) = @_;
    my ($user_name,$role) = is_valid_user($cgi);
    my $param = $cgi->{'AppParam'};
    my $PageHeader = $page_function_hash{$param}->{'pHeader'};
    my $sid = $cgi->cookie('CGISESSID');
    print $cgi->header( );
    print $cgi->start_html($PageHeader);
    my $data = {
                 user_name => $user_name,
                 role  =>   $role,
                 sid =>  $sid,
               };
   my $out = ''; 
   my $tt = Template->new;
        $tt->process('main_page.html', $data, \$out)
        || die $tt->error;
   print $out;
   $data = {
                  'user_name' => $user_name,
               };
   
   $out = ''; 
   $tt = Template->new;
        $tt->process('mail_menu.html', $data, \$out)
        || die $tt->error;
   print $out;
   print $cgi->end_html();
}

sub F_user_manage {
    my ($cgi) = @_;
    my ($user_name,$role) = is_valid_user($cgi);
    my $param = $cgi->{'AppParam'};
    my $PageHeader = $page_function_hash{$param}->{'pHeader'};
    my $sid = $cgi->cookie('CGISESSID');
    print $cgi->header( );
    print $cgi->start_html($PageHeader);
    my $data = {
                 user_name => $user_name,
                 role  =>   $role,
                 sid =>  $sid,
               };
   my $out = ''; 
   my $tt = Template->new;
        $tt->process('main_page.html', $data, \$out)
        || die $tt->error;
   print $out;
   $data = {
                  'user_name' => $user_name,
               };
   
   $out = ''; 
   $tt = Template->new;
        $tt->process('user_manage.html', $data, \$out)
        || die $tt->error;
   print $out;
   print $cgi->end_html();
}


sub F_library_manage {
    my ($cgi) = @_;
    my ($user_name,$role) = is_valid_user($cgi);
    my $param = $cgi->{'AppParam'};
    my $PageHeader = $page_function_hash{$param}->{'pHeader'};
    my $sid = $cgi->cookie('CGISESSID');
    print $cgi->header( );
    print $cgi->start_html($PageHeader);
    my $data = {
                 user_name => $user_name,
                 role  =>   $role,
                 sid =>  $sid,
               };
   my $out = ''; 
   my $tt = Template->new;
        $tt->process('main_page.html', $data, \$out)
        || die $tt->error;
   print $out;
   $data = {
                  'user_name' => $user_name,
               };
   $out = ''; 
   $tt = Template->new;
        $tt->process('lib_manage.html', $data, \$out)
        || die $tt->error;
   print $out;
   undef $out;
   if ( $cgi->param('result')){
      my $result = $cgi->param('result');
      my $count =  $cgi->param('count');
      my %data;
      $data{mesg} = "New $count book added Successfully";
      $tt = Template->new;
        $tt->process('multi_book_add_confrm.html',\%data, \$out)
        || die $tt->error;
      print $out;
   }
   print $cgi->end_html();
}




sub F_Settings {
    my ($cgi) = @_;
    my ($user_name,$role) = is_valid_user($cgi);
    my $param = $cgi->{'AppParam'};
    my $PageHeader = $page_function_hash{$param}->{'pHeader'};
    my $sid = $cgi->cookie('CGISESSID');
    print $cgi->header( );
    print $cgi->start_html($PageHeader);
    my $data = {
                 user_name => $user_name,
                 role  =>   $role,
                 sid =>  $sid,
               };
   my $out = ''; 
   my $tt = Template->new;
        $tt->process('main_page.html', $data, \$out)
        || die $tt->error;
   print $out;
   $data = {
                  'name' => $user_name,
               };
   
   $out = ''; 
   $tt = Template->new;
        $tt->process('setting.html', $data, \$out)
        || die $tt->error;
   print $out;
   print $cgi->end_html();
}



sub F_book_search {
    my ($cgi) = @_;
    my ($user_name,$role) = is_valid_user($cgi);
    my $param = $cgi->{'AppParam'};
    my $PageHeader = $page_function_hash{$param}->{'pHeader'};
    my $sql = $cgi->param('sql');
    my $sid = $cgi->cookie('CGISESSID');
    print $cgi->header( );
    print $cgi->start_html($PageHeader);
    my $data = {
                  'user_name' => $user_name,
                  'role'   => $role, 
               };
    my $out;
    my $tt = Template->new;
        $tt->process('main_page.html', $data, \$out)
        || die $tt->error;
    print $out . "<br><br>";       
   my @searched_books = get_serached_books ( $sql );
   if ( $searched_books[0] =~ 'FAIL'){ die @searched_books};
   $data = {
                  'books' => \@searched_books,
               };
   my $out1;
   $tt = Template->new;
        $tt->process('book_searched.html', $data, \$out1)
        || die $tt->error;
   print $out1 ;
   print $cgi->end_html();
    
}


sub F_reserved {
    my ($cgi) = @_;
    my ($user_name,$role) = is_valid_user($cgi);
    my $param = $cgi->{'AppParam'};
    my $PageHeader = $page_function_hash{$param}->{'pHeader'};
    my $sid = $cgi->cookie('CGISESSID');
    print $cgi->header( );
    print $cgi->start_html($PageHeader);
    my $data = {
                  'user_name' => $user_name,
                   role => $role,
               };
    my $out;
    my $tt = Template->new;
        $tt->process('main_page.html', $data, \$out)
        || die $tt->error;
    print $out . "<br><br>";       
    my $uid = get_user_id_by_name_from_db ( $user_name );
    my @ret = get_all_reserved_books_by_uid ( $uid);
    my %info;
    %info = ( ret => \@ret );
    my $out1;
    $tt = Template->new;
        $tt->process('saved_reservation.html', \%info, \$out1)
        || die $tt->error;
    print $out1;

   print $cgi->end_html();
    
}



sub F_book_detail {
    my ($cgi) = @_;
    my ($user_name,$role) = is_valid_user($cgi);
    my $param = $cgi->{'AppParam'};
    my $PageHeader = $page_function_hash{$param}->{'pHeader'};
    my $sid = $cgi->cookie('CGISESSID');
    
    print $cgi->header( );
    print $cgi->start_html($PageHeader);
    my $data = {
                  'user_name' => $user_name,
                  'role' => $role,
               };
    my $out;
    my $tt = Template->new;
        $tt->process('main_page.html', $data, \$out)
        || die $tt->error;
   print $out . "<br><br>";       
   
   my $book_id = $cgi->param ( 'book_id' );
   my %book_info = get_book_details_by_id ( $book_id  );
   if ( defined $book_info{ERROR}){ die $book_info{ERROR}; }
   my @book_copies = get_book_copies_by_id ( $book_id  );
   if ( $book_copies [0] =~ 'FAIL'){ die @book_copies};
   my $count = @book_copies;
   $book_info{copies} = $count;
   $book_info{book_copies} = \@book_copies;
   my $out1;
   $tt = Template->new;
        $tt->process('show_book_details.html', \%book_info, \$out1)
        || die $tt->error;
   print $out1 ;
   
   
   foreach my $book_copy ( @book_copies ){
      $book_copy =~  s/^\s+//;
      $book_copy =~ s/\s+$//;
      my @res_dates = get_reservation_dates ( $book_copy );
      if ( $res_dates[0] =~ 'FAIL'){ die @res_dates};
      my @res;
      my %data ;
      my $out;
      foreach my $date_slot ( @res_dates ){
         my ($start_date,$end_date ) = split ':' ,  $date_slot;
         my $reservation = "START DATE : &nbsp $start_date  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp END DATE: &nbsp $end_date" . '<br>' ;
         push @res , $reservation ;
      }
      $data{tag} = $book_copy;
      $data{book_id} = $book_id;
      $data{reservation} = \@res;
      $data{user_name} = $user_name;
      my $tt = Template->new;
        $tt->process('book_copy_info.html', \%data, \$out)
        || die $tt->error;
      print $out;   
      undef @res; undef %data; undef $out ;
   }
   print $cgi->end_html();
    
}







