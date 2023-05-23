const { sendResponse } = require("next/dist/server/image-optimizer");

let scrapeBtn = document.getElementById
('scrapeBtn');
let list = document.getElementById('emailList');


// handler to get emails 
chrome.runtime.onMessage.addListener((requests, 
sender, sendResponse) => {

    // get emails 
    let emails = request.emails;
    
    // display emails on popup 
    if(emails == null || emails.length == 0) {
        //no emails 
        let li = document.createElement('li');
        li.innerText = "no emails found";
        list.appendChild(li);
    }else {
        //display emails 
        emails.array.forEach(element => {
            let li = document.createElement('li');
        li.innerText = email;
        list.appendChild(li);
        });
    }
})
//Buttons click even listener
scrapeBtn.addEventListener("click", async () => {
    // get the current active tab of window 
    let [tab] = await chrome.tabs.query({active:
    true, currentWindow: true});

    //exectue scripts to the parse email on page
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: scrapeEmailsFromPage,
    })
})

// function to scrape emails 
function scrapeEmailsFromPage() {
    // reg ex to parse emails from the httml code 
    const emailsRegEx = /[\w\.=-]+@[\w\.=-]+\.[\w\]{2,3}/
    gim;

    // parse email from the tml of the pag 
    let emails = document.body.innerHTML.match 
    (emailsRegEx);

    //send emails to popup 
    chrome.runtime.sendMessage({emails});

}