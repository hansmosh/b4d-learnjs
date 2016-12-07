describe('B4D', function() {

	it('invokes the router when loaded', function() {
		spyOn(b4d, 'showView');
		b4d.appOnReady(); expect(b4d.showView).toHaveBeenCalledWith(window.location.hash);
	});

	it('subscribes to the hash change event', function() { b4d.appOnReady();
	   spyOn(b4d, 'showView');
	   $(window).trigger('hashchange'); expect(b4d.showView).toHaveBeenCalledWith(window.location.hash);
	});

	it('shows the landing page view when there is no hash', function() {
		b4d.showView('');
		expect($('.view-container .landing-view').length).toEqual(1);
	});

	it('can show a book view', function() {
		b4d.showView('#book-1');
		expect($('.view-container .book-view').length).toEqual(1);
	});

	it('passes the hash view parameter to the view function', function() {
		spyOn(b4d, 'bookView');
		b4d.showView('#book-42');
		expect(b4d.bookView).toHaveBeenCalledWith('42');
	});

	describe('book view', function() {
		it('has a title that includes the book number', function() {
			var view = b4d.bookView('1');
			expect(view.text()).toEqual('Book #1');
		});
	});

});
