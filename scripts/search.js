var scroll_site_top = function() {
    $('html,body').animate({
        scrollTop:0
    }, 1000)
};

$('#go_to_top').click(function() {
    scroll_site_top();
});

jQuery(function() {
    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    window.idx = lunr(function() {
        this.field('title', {
            boost: 10
        });
        //this.field('author');
        //this.field('category');
    });

    // Download the data from the JSON file we generated
    window.data = $.getJSON('/search_data.json');

    // Wait for the data to load and add it to lunr
    window.data.then(function(loaded_data) {
        $.each(loaded_data, function(index, value) {
            window.idx.add(
                $.extend({
                    "id": index
                }, value)
            );
        });
    });

    // Event when the form is submitted
    $("#site_search").submit(function(event) {
        event.preventDefault();
        var query = $("#search_box").val(); // Get the value for the text field

        if (query.trim() === '') { return; }

        var results = window.idx.search(query); // Get lunr to perform a search
        display_search_results(results); // Hand the results off to be displayed
    });

    function display_search_results(results) {
        var $search_results = $("#search_results");

        // Wait for data to load
        window.data.then(function(loaded_data) {

            // Are there any results?
            if (results.length) {
                $search_results.empty(); // Clear any old results

                // Iterate over the results

                var appendString = '';
                results.forEach(function(result) {
                    var item = loaded_data[result.ref];

                    // Build a snippet of HTML for this result
                    appendString += '<li><a href="' + item.url + '">' + item.title + '</a></li>';

                });
                // Add it to the results
                var opening_elements = "<div class='inner-search'><h3>Search Results:</h3><ul>";
                var closing_elements = "</ul></div>";
                //$search_results.append();
                $search_results.append(opening_elements + appendString + closing_elements);
                //$search_results.append('</ul></div>');
            } else {
                $search_results.html("<div class='inner-search'><h3>Search Results:</h3><ul><li>No results found</li></ul></div>");
            }
            scroll_site_top();
        });
    }
});