<?php
/*
Plugin Name: CurlyEnc
Version:0.1
Plugin URI: http://www.joahua.com/blog/
Description: CurlyEnc converts already-curly quotation marks to properly encoded HTML entities.
Author: Joshua Street
Author URI: http://www.joahua.com/blog/
*/ 

// the function
function js_curlyenc($text) {
	$text = str_replace('“', '&#8220;', $text);
	$text = str_replace('”', '&#8221;', $text);
	return $text;
}

// apply the function
add_filter('the_content', 'js_curlyenc');

?>
