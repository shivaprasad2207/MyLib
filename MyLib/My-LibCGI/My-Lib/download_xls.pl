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
use CGI qw /:standard /;
my $cgi = new CGI;

print $cgi->header(-type=>"application/vnd.ms-excel", -attachment=>"book_info.xls", -Content_length=>" -s book_info.xls");
print $cgi->start_html();
open (FH, "book_info.xls");
print $_ while <FH>;
close (FH);
print $cgi->end_html();