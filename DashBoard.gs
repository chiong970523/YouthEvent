/**
 * 建立 Dashboard
 */
function setupDashboardSheet(ss) {

  const sheet = ss.getSheetByName(CONFIG.SHEET.DASHBOARD);

  sheet.clear();

  sheet.getRange("A1").setValue("青年相調 Dashboard");

  sheet.getRange("A3").setValue("活動名稱");
  sheet.getRange("B3").setValue(CONFIG.EVENT.NAME);

  sheet.getRange("A4").setValue("活動日期");
  sheet.getRange("B4").setValue(CONFIG.EVENT.DATE);

  sheet.getRange("A5").setValue("活動地點");
  sheet.getRange("B5").setValue(CONFIG.EVENT.LOCATION);

}
