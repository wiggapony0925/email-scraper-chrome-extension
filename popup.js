let scrapeBtn = document.getElementById
('scrapeBtn');

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

    alert(emails);

}