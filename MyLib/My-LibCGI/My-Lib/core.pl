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

use warnings;
use strict;
use CGI;
require CGI::Session;
use Data::Dumper;
require ("debug.pl");
use CGI::Carp qw(fatalsToBrowser);
use JSON;
our  $MainPageHeader;
use Time::Local;
use Date::Manip;


my $cgi = CGI->new();
my $flag = $cgi->param('flag');



if ( $flag eq 'ASK_LIBRARIAN' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_ask_librarian.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'VISITOR_NOTES' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_visitor_notes.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'RESEARCH_PAPER' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_research_papers.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'XEROX' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_xerox.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'SCAN' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_scan.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'PRINT' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_print.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'CONFERENCE_ROOM' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_conference_room.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'STATIONARIES' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_stationaries.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'BOOK_DELIVERY' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_book_delivery.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'LEARNING_CENTER' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_learning_center.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'LIB_MANGEMENT' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_lib_management.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'ANNOUNCEMENT' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_announcemnet.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'CALENDER_EVENTS' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_calender_events.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'SPONCER_EVENTS' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_sponcer_events.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'GALLERY' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_gallery.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'TIMINGS' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_timings.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'LIB_MAP' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_page_under_construction.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'PAGE_UNDER_CONSTUCTION' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_page_under_construction.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'FUND_CONTRIBUTION' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_fund_contribution.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'RULES_GUIDELINES' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_rules_guidelines.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'BORROWING_RULES' ){
   my $out;
    my $tt = Template->new;
        $tt->process('c_borrowing.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'FEES_FINES' ){
   my $out;
    my $tt = Template->new;
        $tt->process('fee_fines.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'MATRIEAL_DONATION' ){
   my $out;
    my $tt = Template->new;
        $tt->process('material_donation.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}elsif ( $flag eq 'MONETORY_DONATION' ){
   my $out;
    my $tt = Template->new;
        $tt->process('monetory_donation.html', undef, \$out)
        || die $tt->error;
   print "Content-type: text/plain; charset=iso-8859-1\n\n";
   print $out;   
}







1
;