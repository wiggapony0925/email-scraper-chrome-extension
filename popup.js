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
