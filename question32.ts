let current_users: string[] = ['john', 'alice', 'bob', 'charlie', 'david'];

let new_users: string[] = ['alice', 'peter', 'MIKE', 'sarah', 'David', 'BOB'];
let current_users_lower: string[] = current_users.map(users => users.toLowerCase());

for (let new_user of new_users) {
    let new_user_lower: string = new_user.toLowerCase();

    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username "${new_user}" is not available. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
