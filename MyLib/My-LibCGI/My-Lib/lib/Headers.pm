package lib::Headers;
require(Exporter);
use warnings;
use strict;
our @ISA = qw(Exporter);
our @EXPORT    = qw (
                      $MainPageHeader
                    );

our $MainPageHeader = {
                        -title => 'Technical Community Library',
                        -style=>[ 
                                       #{ -type =>'text/css', -src=>'/static/styles/My_lib/lib_1.css'},
                                       { -type =>'text/css', -src=>'/static/styles/My_lib/dr0.css'},
                                       { -type =>'text/css', -src=>'/static/styles/My_lib/style.css'},
                                       { -type =>'text/css', -src=>'/static/styles/My_lib/jquery-ui-1.8.18.custom.css'},
                                       
                                    ],  
                         -script=>[
                                        
                                
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/jquery.min.js'},
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/jquery.ui.core.js' },
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/jquery-ui-1.8.18.custom.min.js' },
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/jquery.dropdownPlain.js'},
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/pre_logout.js'},
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/mail.js'},
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/book.js'},
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/setting.js'},
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/user_manage.js'},
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/lib_manage.js'},
                                        { -type => 'text/javascript', -src => '/static/js/My_lib/core.js'},
                                     ],
                    };
                       
1
;


                                       
                                       
                                       
                                        