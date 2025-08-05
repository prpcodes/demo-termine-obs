# demo-termine-obs

## Setup Instructions
1. **Google Sheets Setup**:
   - Clone the provided Google Sheet template.
   - Open the Google Sheet and copy its ID from the URL.
   - Replace `SPREAD_SHEET_ID` in the `Code.gs` file with your copied Google Sheet ID.
   - Ensure the sheet is named "Termine" and has the correct structure:
     - Column A: Name
     - Column B: Location
     - Column C: Date/Time
2. **Google Apps Script**:
   - Download this repository: [main.zip]( https://github.com/prpcodes/demo-termine-obs/archive/refs/heads/main.zip)
   - Open the Google Apps Script editor from the Google Sheet.
   - Replace the default code with the provided `Code.gs` content.
   - Replace `SPREAD_SHEET_ID` in the `Code.gs` file with your copied Google Sheet ID.
   - Save and deploy the script as a web app.
   - Copy the web app URL for later use.
3. **HTML Setup**:
   - Open the `demo-termine-obs.html` file.
   - Replace `YOUR_WEB_APP_URL` with the URL of your deployed Google Apps Script web app.   
   - Save the HTML file.
4. **OBS Studio Setup**:
   - Open OBS Studio.
   - Add a new "Browser" source.
   - Set the URL to the path of your `demo-termine-obs.html` file.
   - Adjust the width (1920px) and click on "OK".