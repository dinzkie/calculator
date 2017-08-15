	var button_list = [
	{	text: "CE",
		type: "function",
		value: "reset"
	},
	{	text: "C",
		type: "function",
		value: "reset"
	},
	{	text: "&#60-",
		type: "function",
		value: "backspace"
	},
	{	text: "%",
		type: "operation",
		value: "/"
	},	
	{	text: 7,
		type: "number",
		value: 7
	},
	{	text: 8,
		type: "number",
		value: 8
	},
	{	text: 9,
		type: "number",
		value: 9
	},
	{	text: "x",
		type: "operation",
		value: "x"
	},
	{	text: 4,
		type: "number",
		value: 4
	},
	{	text: 5,
		type: "number",
		value: 5
	},
	{	text: 6,
		type: "number",
		value: 6
	},
	{	text: "-",
		type: "operation",
		value: "-"
	},
	{	text: 1,
		type: "number",
		value: 1
	},
	{	text: 2,
		type: "number",
		value: 2
	},
	{	text: 3,
		type: "number",
		value: 3
	},
	{	text: "+",
		type: "operation",
		value: "+"
	},
	{	text: "+-",
		type: "operation",
		value: "negate"
	},
	{	text: 0,
		type: "number",
		value: 0
	},
	{	text: ".",
		type: "number",
		value: "."
	},
	{	text: "=",
		type: "operation",
		value: "="
	}
	];

function init_buttons()  {
	var result = "<div class=\"button_row row\">";

	for(cnt = 1; cnt <= button_list.length; cnt++) {
		result += "<button class=\"calc_button\" operation=\"" + button_list[cnt-1].type + "\" value=\"" + button_list[cnt-1].value + "\">" + button_list[cnt-1].text + "</button>";
		if(cnt % 4 == 0) result += "</div><div class=\"button_row row\">"
	}
	
	result += "</div>";
	$(".calc_buttons_row").append(result);
	return result;
}

function init_screen() {
	$(".calc_screen_row").append("<div class=\"row\"><input class=\"calc_screen\" type=\"text\"></div>");
	$(".calc_screen").val(0);
}

$(document).ready(function() {
	init_screen();
	init_buttons();
});