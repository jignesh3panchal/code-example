(() => {
  console.group("💻 Windows System & Browser Environment Log");

  // 1. Browser Details
  console.log("%c🌐 Browser Information", "font-weight: bold; color: #1a73e8;");
  console.log("User Agent:", navigator.userAgent);
  console.log("Browser Name/Engine:", navigator.appName, `(${navigator.appCodeName})`);
  console.log("Browser Language:", navigator.language);
  console.log("Cookies Enabled:", navigator.cookieEnabled);
  console.log("Online Status:", navigator.onLine ? "Online" : "Offline");

  // 2. OS & Hardware Information
  console.log("%c🖥️ System & Hardware Information", "font-weight: bold; color: #e8710a;");
  
  // Checking User Agent Data for modern browsers (Chrome, Edge, etc.)
  if (navigator.userAgentData) {
    navigator.userAgentData.getHighEntropyValues(["platformVersion", "architecture", "bitness"])
      .then(ua => {
        console.log("Operating System:", navigator.userAgentData.platform);
        console.log("OS Version (High Entropy):", ua.platformVersion);
        console.log("Architecture:", ua.architecture + " (Bit: " + ua.bitness + ")");
      });
  } else {
    // Fallback for older legacy browsers
    console.log("Platform (Legacy):", navigator.platform);
  }
  
  console.log("Logical CPU Cores:", navigator.hardwareConcurrency || "Unknown");
  console.log("Device Memory (~GB):", navigator.deviceMemory || "Unknown");

  // 3. Screen & Display Setup
  console.log("%c📊 Screen & Display Setup", "font-weight: bold; color: #12b886;");
  console.log("Screen Resolution:", `${window.screen.width} x ${window.screen.height}`);
  console.log("Available Screen Space:", `${window.screen.availWidth} x ${window.screen.availHeight}`);
  console.log("Color Depth:", window.screen.colorDepth + "-bit");
  console.log("Device Pixel Ratio (Scale):", window.devicePixelRatio);

  // 4. Session Context
  console.log("%c🕒 Session Context", "font-weight: bold; color: #9c27b0;");
  console.log("Current URL:", window.location.href);
  console.log("Local Time:", new Date().toLocaleString());
  console.log("Timezone Offset (Minutes):", new Date().getTimezoneOffset());

  console.groupEnd();
})();
