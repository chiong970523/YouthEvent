function onOpen(){

 const ui = SpreadsheetApp.getUi();


 ui.createMenu("🏆 青年相調系統")


 .addItem(
 "初始化系統",
 "initializeSystem"
 )


 .addSubMenu(
 ui.createMenu("📋 報名管理")
 .addItem("建立 Google Form","createGoogleForm")
 .addItem("更新 Dashboard","updateDashboard")
 )


 .addSubMenu(
 ui.createMenu("👥 人員管理")
 .addItem("建立籃球隊伍","createBasketballTeams")
 .addItem("建立羽球配對","createBadmintonPairs")
 .addItem("建立桌球配對","createTableTennisPairs")
 )


 .addSubMenu(
 ui.createMenu("🎫 報到管理")
 .addItem("產生 QR Code","generateQRCodes")
 .addItem("匯出報到名單","exportAttendanceList")
 )


 .addToUi();

}
