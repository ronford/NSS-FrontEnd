test( "deposit test", function() {
deepEqual(add_deposit(100,20), 120, "Add balance and entered amount" );
});

test( "withdrawal test", function() {
deepEqual(sub_deposit(100,20), 80, "subtract entered amount from balance" );
});
