var current_users = ['john', 'alice', 'bob', 'charlie', 'david'];
var new_users = ['alice', 'peter', 'MIKE', 'sarah', 'David', 'BOB'];
var current_users_lower = current_users.map(function (users) { return users.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var new_user_lower = new_user.toLowerCase();
    if (current_users_lower.includes(new_user_lower)) {
        console.log("Sorry, the username \"".concat(new_user, "\" is not available. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username \"".concat(new_user, "\" is available."));
    }
}
