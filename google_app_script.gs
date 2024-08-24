function doPost() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    var dataRange = sheet.getDataRange().getValues();
    
    const last =  dataRange.length-1
    const response = {
      limit : dataRange.length-1,
      total_name : dataRange[last][0],
      total_total : dataRange[last][1],
      total_finsihed : dataRange[last][2],
      total_percentage : dataRange[last][4],
    };

    for (let i = 1; i < dataRange.length-1; i++) {
      response[`d${i}_name`] = dataRange[i][0];
      response[`d${i}_total`] = dataRange[i][1];
      response[`d${i}_finished`] = dataRange[i][2];
      response[`d${i}_percentage`] = dataRange[i][4];
    }

    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
    // return HtmlService.createHtmlOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON)
}
