/**
 * Created by hackywit on 2017/8/31.
 */
var f = function() {
    var greet = document.createElement('div');
    greet.textContent = "Hi there and greetings!";
    return greet;
};
document.querySelector("#root").appendChild(f());