const RELAY_BASE = "https://dvn-relay.onrender.com";

async function loadStatus() {
  const el = document.getElementById("status");
  try {
    const res = await fetch(`${RELAY_BASE}/api/status`);
    const data = await res.json();
    el.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    el.textContent = "Error loading status: " + err.message;
  }
}

async function loadBlocks() {
  const el = document.getElementById("blocks");
  try {
    const res = await fetch(`${RELAY_BASE}/api/blocks`);
    const data = await res.json();
    el.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    el.textContent = "Error loading blocks: " + err.message;
  }
}

loadStatus();
loadBlocks();
