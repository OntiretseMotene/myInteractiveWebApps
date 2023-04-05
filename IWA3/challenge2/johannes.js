// johannes.js

// Replace the words "private" and "public" with "let" and "const" respectively
private firstname = "Johannes"
private surname = "Potgieter"
public role = "Intern"

// Replace the word "private" with "let"
private display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display