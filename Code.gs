function doGet(e) {
  const spreadsheet = SpreadsheetApp.openById('SPREAD_SHEET_ID');
  const sheet = spreadsheet.getSheetByName('Termine');
  const data = sheet.getDataRange().getValues();

  const events = [];
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const name = row[0] ? row[0].toString().trim() : '';
    const location = row[1] ? row[1].toString().trim() : '';
    const datetime = row[2] ? row[2] : '';  // DateTime field

    if (name) {
      events.push({
        name: name,
        location: location,
        datetime: datetime
      });
    }
  }

  return ContentService
    .createTextOutput(JSON.stringify({ events: events }))
    .setMimeType(ContentService.MimeType.JSON);
}