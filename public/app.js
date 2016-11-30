'use string';

var b4d = {};

b4d.bookView = function(bookNumber) {
	return $('<div class="book-view">').text('Book #' + bookNumber);
}

b4d.showView = function(hash) {
	var routes = {
		'#book': b4d.bookView
	};
	var hashParts = hash.split('-');
	var viewFn = routes[hashParts[0]];
	if (viewFn) {
		$('.view-container').empty().append(viewFn(hashParts[1]));
	}
}
