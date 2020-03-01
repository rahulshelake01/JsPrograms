var paragraph = `   It    will   depend on what you consider to be empty for example, if you were dealing with strings, the above function wouldn't remove elements that are an empty string. One typical pattern that I see often used is to remove elements that are falsy, which include an empty string undefined and false.`

// #1. get the count of each word
var word_array = paragraph.split(" ").filter(w=>w)
var word_count_obj = {}
for(let w of word_array) {
    word_count_obj[w] = (word_count_obj[w] == undefined) ? 1 : word_count_obj[w] + 1
}
console.log(word_count_obj)


// #2. Remove extra space from paragraph
var lines_array = paragraph.split(".").filter(l=>l)
var stripped_lines = []
for(let line of lines_array) {
    stripped_lines.push(line.split(" ").filter(w=>w).join(" "))
}
console.log(stripped_lines.join(". ") + ".")


// #3. Reverse string withour using new string var
// 1. Using array
var my_str = "Welcome to home"
var words = []
for(let w of my_str) words.unshift(w)
console.log(words.join(""))

// 2. Without using any extra var
var my_str = "Welcome to home"
for(let w of my_str) {
    my_str = w+my_str.slice(0, -1)
}
console.log(my_str)
