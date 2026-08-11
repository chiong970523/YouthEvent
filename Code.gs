/**
 * ============================================
 * 青年相調系統
 * 自訂選單
 * ============================================
 */

function onOpen() {

  const ui =
    SpreadsheetApp.getUi();


  // ==========================================
  // 建立「青年相調系統」主選單
  // ==========================================

  ui.createMenu("青年相調系統")


    // ========================================
    // 報名系統
    // ========================================

    .addSubMenu(

      ui.createMenu("📝 報名系統")

        .addItem(
          "建立 Google Form",
          "createRegistrationForm"
        )

        .addItem(
          "設定報名 Trigger",
          "setupRegistrationTrigger"
        )

    )


    // ========================================
    // Dashboard
    // ========================================

    .addItem(
      "📊 更新 Dashboard",
      "updateDashboard"
    )


    // ========================================
    // 球類配對
    // ========================================

    .addSubMenu(

      ui.createMenu("🏆 球類配對")

        .addItem(
          "🏀 建立籃球隊伍",
          "createBasketballTeams"
        )

        .addItem(
          "🏸 建立羽球配對",
          "createBadmintonPairs"
        )

        .addItem(
          "🏓 建立桌球配對",
          "createTableTennisPairs"
        )

    )


    // ========================================
    // 報到
    // ========================================

    .addSubMenu(

      ui.createMenu("📱 報到系統")

        .addItem(
          "產生 QR Code",
          "generateQRCode"
        )

        .addItem(
          "匯出報到名單",
          "exportAttendanceList"
        )

    )


    // ========================================
    // 完成建立
    // ========================================

    .addToUi();

}
