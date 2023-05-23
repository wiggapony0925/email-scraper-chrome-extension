# My Chrome Extension

This repository contains the code for a Chrome extension that allows you to scrape emails from web pages.

## Installation

To install the extension, follow these steps:

1. Clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable the "Developer mode" toggle switch in the top right corner.
4. Click on the "Load unpacked" button and select the cloned repository folder.
5. The extension should now be installed and visible in your extensions list.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. The popup will display a "Scrape Emails" button.
3. Click on the "Scrape Emails" button to execute the scraping process on the currently active tab.
4. A notification will be shown with the scraped emails.

## Project Structure

The project structure is as follows:

.
├── images/
│ ├── icon16.png
│ ├── icon48.png
│ └── icon128.png
├── popup.html
├── popup.js
├── content.js
├── styles.css
└── manifest.json

- The `images/` directory contains the icon files used for the extension.
- `popup.html` is the HTML file that represents the extension's popup.
- `popup.js` contains the JavaScript code for handling user interactions in the popup.
- `content.js` includes the scraping logic to be executed on web pages.
- `styles.css` contains the CSS styles for the popup.
- `manifest.json` is the manifest file that provides necessary details and permissions for the extension.

Feel free to explore the code and customize it according to your requirements.

## Contributing

Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork this repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
