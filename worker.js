addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const indexHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GEO - PROJECT | WEB</title>

  <!-- Font & CSS -->
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

  <!-- Open Graph Meta Tags (Telegram, Facebook, dll) -->
  <meta property="og:title" content="Desbar Browser - Daftar Proxy Aman & Cepat" />
  <meta property="og:description" content="Akses berbagai proxy VLESS, Trojan, dan Shadowsocks dengan mudah dan cepat." />
  <meta property="og:image" content="https://raw.githubusercontent.com/jaka2m/mau/refs/heads/kepo/a.png" />
  <meta property="og:url" content="https://cobay.vercel.app/" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Desbar Browser - Daftar Proxy Aman & Cepat">
  <meta name="twitter:description" content="Akses berbagai proxy VLESS, Trojan, dan Shadowsocks dengan mudah dan cepat.">
  <meta name="twitter:image" content="https://raw.githubusercontent.com/jaka2m/mau/refs/heads/kepo/a.png">

  <!-- Favicon -->
  <link rel="icon" href="https://raw.githubusercontent.com/jaka2m/mau/refs/heads/kepo/G.png" type="image/x-icon" />
  <style>
    :root {
    --primary: #00ff88;
    --secondary: #00ffff;
    --accent: #ff00ff;
    --dark: #080c14;
    --darker: #040608;
    --light: #e0ffff;
    --card-bg: rgba(8, 12, 20, 0.95);
    --glow: 0 0 20px rgba(0, 255, 136, 0.3);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
}

body {
  background: url('https://raw.githubusercontent.com/jaka2m/mau/refs/heads/kepo/backround.png') no-repeat center center fixed;
  background-size: cover;
  justify-content: center;
  align-items: center;
  background-size: 300% 300%; /* Untuk animasi gradient */
  color: #fff; /* Teks putih agar kontras */
  margin: 0;
  font-family: Arial, sans-serif; /* Font sederhana dan bersih */
  animation: rainbowBackground 10s infinite; /* Animasi bergerak */
}

/* Animasi untuk background */
@keyframes rainbowBackground {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes moveColors {
  100% {
    background-position: -200%; /* Mulai dari luar kiri */
  }
  0% {
    background-position: 200%; /* Bergerak ke kanan */
  }
}

h2 {
    font-family: "Orbitron", sans-serif;
  color: #00ff00;
  text-align: center;
  margin: 0;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  animation: titlePulse 3s ease-in-out infinite;
}

h1 {
      font-family: "Orbitron", sans-serif;
      padding-top: 10px;
      margin-top: 10px;
      color: black;
            text-align: center;
            font-size: 5vw;
            font-weight: bold;
            text-shadow:
                0 0 5px rgba(0, 123, 255, 0.8),
                0 0 10px rgba(0, 123, 255, 0.8),
                0 0 20px rgba(0, 123, 255, 0.8),
                0 0 30px rgba(0, 123, 255, 0.8),
                0 0 40px rgba(0, 123, 255, 0.8);

         background: linear-gradient(45deg, var(--primary), var(--secondary), var(--dark));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 0 30px #000;
        position: relative;
        animation: titlePulse 3s ease-in-out infinite;
    }

      footer {
      box-sizing: border-box;
      background-color: ;
      color: white;
      text-align: center;
      border-radius: 10px;
      padding: 0 20px;
      position: fixed;
      width: 100%;
      left: 0;
      right: 2px;
      pointer-events: none;
      z-index: 10;
    }

    footer {
      bottom: 0;
    }

.table-container {
  background: linear-gradient(135deg, rgba(0, 255, 0, 0.15), rgba(0, 100, 0, 0.25));
  border-radius: 16px;
  overflow-x: auto;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 255, 0, 0.2);
}

table.dataTable {
    background-color: rgba(20, 40, 60, 0.2);
    border-collapse: collapse;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    color: #e0f7ff;
}

table.dataTable thead th {
    background-color: rgba(50, 80, 120, 0.4);
    color: #aeeeff;
    text-align: ;
    padding: 12px;
    backdrop-filter: blur(5px);
}

table.dataTable tbody td {
    background-color: rgba(30, 60, 90, 0.2);
    color: #eaf6ff;
    text-align: center;
    padding: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.status-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
}

.status {
    font-weight: bold;
    font-size: 14px;
    text-align: center;
}

.status.active {
    color: #00ff66;
}

.status.inactive {
    color: #ff4d4d;
}

.status.error {
    color: #ffcc00;
}

.status i {
    font-size: 24px;
    display: block;
    text-align: center;
    margin: 0 auto;
}

.delay {
    font-size: 12px;
    color: #ccc;
    text-align: center;
}

.modal {
    display: none;
    position: fixed;
    z-index: 99;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;

}

.modal.show {
    display: flex;

}

.modal-content {
  background: rgba(255, 255, 255, 0.05); /* transparan */
  color: #ffffff;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  border-radius: 16px;

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.4),
    inset 0 0 10px rgba(255, 255, 255, 0.05);

  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideIn 0.3s ease forwards;
  transition: all 0.3s ease;
}

.modal-content.hide {
  animation: slideOut 0.3s ease forwards;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideOut {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(-100%);
    }
}

.modal-header {
  font-size: 18px;
  margin-bottom: 10px;
  color: #00ff00; /* hijau neon */
  font-weight: bold;
  text-align: center;
  background: rgba(0, 255, 0, 0.05); /* latar hijau sangat transparan */
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(0, 255, 0, 0.4);
  font-family: 'Courier New', monospace;
}

.config-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 15px;
  background: rgba(0, 255, 0, 0.05); /* hijau transparan */
  border: 1px solid rgba(0, 255, 0, 0.2); /* garis hijau tipis */
  border-radius: 12px;
  padding: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 16px rgba(0, 255, 0, 0.2); /* glow hijau */
  color: #00ff00;
  font-family: 'Courier New', monospace;
}

.config-buttons button {
  padding: 8px 16px;
  background: rgba(0, 255, 0, 0.1); /* hijau transparan */
  color: #00ff00;
  border: 1px solid rgba(0, 255, 0, 0.4);
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 14px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(0, 255, 0, 0.2);
  transition: background 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Courier New', monospace;
}

.config-buttons button:hover {
  background: rgba(0, 255, 0, 0.2);
  box-shadow: 0 0 12px rgba(0, 255, 0, 0.5);
}

.close {
    float: right;
    font-size: 20px;
    cursor: pointer;
}

    button {
    padding: 6px 12px;
    margin: 4px;
    border: none;
    border-radius: 6px;
    background-color: #00ff00;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    font-family: 'Courier New', Courier, monospace;
}

button:hover {
    background-color: #00cc00;
    }

button:disabled {
    opacity: 0.6;
    background-color: #444;
    cursor: not-allowed;
    box-shadow: none;
}

.swal2-dark.compact-popup {
    font-size: 13px;
    line-height: 1.2;
}

.swal2-small-title {
    font-size: 14px !important;
}

.quantum-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 2rem;
    perspective: 1000px;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
    .quantum-container {
        padding: 0.5rem;
        margin: 0.5rem;
    }

    .quantum-table {
        width: 100%;
        min-width: 800px;
        border-collapse: separate;
        border-spacing: 0 8px;
    }

    th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #444;  /* Garis horizontal */
  border-right: 1px solid #444;   /* Garis vertikal */
}

th:last-child, td:last-child {
  border-right: none; /* Hilangkan garis di paling kanan */
}

    .quantum-table th {
        background: rgba(0, 255, 136, 0.1);
        color: var(--primary);
        padding: 1.2rem;
        font-family: 'Rajdhani', sans-serif;
        font-weight: 600;
        font-size: 1.1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-bottom: 2px solid var(--primary);
        white-space: nowrap;
        position: sticky;
        top: 0;
        z-index: 10;
    }

    .quantum-table td {
        padding: 1rem;
        background: rgba(0, 255, 136, 0.03);
        border: none;
        transition: all 0.3s ease;
    }

    .quantum-table tr {
        transition: all 0.3s ease;
    }

    .quantum-table tr:hover td {
        background: rgba(0, 255, 136, 0.08);
        transform: scale(1.01);
        box-shadow: 0 5px 15px rgba(0, 255, 136, 0.1);
    }

    .check-btn {
        padding: 6px 12px;
        background-color: #00ff9f;
        color: #000;
        border: none;
        cursor: pointer;
        font-size: 14px;
    }

  .status-block .spinner {
  width: 30px;
  height: 30px;
  border: 4px solid rgba(0, 255, 0, 0.1); /* hijau transparan */
  border-top: 4px solid #00ff00; /* hijau neon */
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;
  display: inline-block;
  vertical-align: middle;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

    .status {
        position: relative;
    }

    .status button.check-btn {
        display: inline-block;
    }

    .status .spinner {
        display: none;
    }
}

.delay {
  font-size: 10px;
  color: yellow;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
    filter: drop-shadow(0 0 5px lime);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
    filter: drop-shadow(0 0 15px lime);
  }
}

.status.active {
  color: #00ff00; /* Hijau terang */
  animation: pulse 1s infinite;
}

#bugSelect {
  background-color: rgba(0, 255, 0, 0.05); /* hijau transparan */
  border: 1px solid rgba(0, 255, 0, 0.4);  /* hijau neon semi transparan */
  color: #00ff00; /* hijau neon */
  border-radius: 6px;
  padding: 8px;
  font-size: 14px;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow: 0 0 6px rgba(0, 255, 0, 0.2);
}

#bugSelect option {
  background-color: rgba(0, 50, 0, 0.8); /* hijau gelap */
  color: #00ff00; /* hijau neon */
}

.status-box {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;

  color: #0f0;
  flex-wrap: wrap;
  text-align: center;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.status-item {
  min-width: 90px;
  padding: 0.5rem;
  border: 1px solid rgba(0, 255, 0, 0.6);
  border-radius: 6px;

  margin: 0.25rem;
  transition: background-color 0.3s ease;
}

.status-item:hover {
  box-shadow: inset 0 0 8px #0f0, 0 0 10px #0f0;
}

.status-item div {
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.8;
}

.status-item h3 {
  font-size: 1.1rem;
  margin-top: 0.2rem;
}

.close {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 24px;
  height: 24px;
  background-color: rgba(0,0,0,0.15);
  border-radius: 50%;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  z-index: 1001;
  padding: 0;
  margin: 0;
}

.close:hover {
  background-color: #ff4444;
  color: white;
  transform: scale(1.2);
}

/* Styling tombol Oke ala Matrix hijau */
.swal2-confirm-custom {
  background: #0f380f; /* hijau gelap */
  color: #00ff00; /* hijau neon terang */
  font-weight: 700;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  padding: 10px 24px;
  border-radius: 6px;
  border: 2px solid #00ff00;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  user-select: none;
  text-shadow:
    0 0 5px #00ff00,
    0 0 10px #00ff00;
}

.swal2-confirm-custom:hover {
  box-shadow:
    0 0 10px #00ff00,
    0 0 20px #00ff00,
    0 0 30px #00ff00,
    0 0 40px #00ff00;
  transform: scale(1.05);
}


  </style>
</head>
<body>
  <footer class="footer">
    <h1>&copy; 2025 FREE VPN CF</h1>
  </footer>
  <div class="quantum-container">
    <h2>GEO PROJECT</h2>
    <div class="status-box">
      <div class="status-item">
        <div>Total</div>
        <h3 id="total">0</h3>
      </div>
      <div class="status-item">
        <div>Active</div>
        <h3 id="active">0</h3>
      </div>
      <div class="status-item">
        <div>Dead</div>
        <h3 id="dead">0</h3>
      </div>
    </div>

    <div class="table-container">
      <table id="proxyTable" class="display">
        <thead>
          <tr>
            <th>IP PORT</th>
            <th>STATUS</th>
            <th>COUNTRY</th>
            <th>ISP</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    <br>

    <!-- Modal Protokol -->
<div id="protocolModal" class="modal">
  <div class="modal-content">
    <i class="fa-solid fa-xmark close" onclick="closeModal('protocolModal')"></i>
    <div class="modal-header">Pilih Protokol</div>
    <div class="config-buttons" style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 10px;">
      <button onclick="selectProtocol('vless')">VLESS</button>
      <button onclick="selectProtocol('trojan')">TROJAN</button>
      <button onclick="selectProtocol('ss')">SHADOWSOCKS</button>
    </div>
  </div>
</div>

    <!-- Modal Bug Selection -->
    <div id="bugModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModal('bugModal')">&times;</span>
        <div class="modal-header">Pilih Bug Mode dan Bug Host</div>
        <div style="margin-bottom: 15px;">
          <label><input type="radio" name="bugMode" value="normal" checked> Normal</label>
          <label style="margin-left: 20px;"><input type="radio" name="bugMode" value="wildcard"> Wildcard</label>
        </div>
        <select id="bugSelect" style="width:100%;padding:8px;font-size:14px;">
          <option value="business.blibli.com">business.blibli.com</option>
                    <option value="ava.game.naver.com">ava.game.naver.com</option>
                    <option value="graph.instagram.com">graph.instagram.com</option>
                    <option value="quiz.int.vidio.com">quiz.int.vidio.com</option>
                    <option value="live.iflix.com">live.iflix.com</option>
                    <option value="support.zoom.us">support.zoom.us</option>
                    <option value="blog.webex.com">blog.webex.com</option>
                    <option value="investors.spotify.com">investors.spotify.com</option>
                    <option value="cache.netflix.com">cache.netflix.com</option>
                    <option value="zaintest.vuclip.com">zaintest.vuclip.com</option>
                    <option value="ads.ruangguru.com">io.ruangguru.com</option>
                    <option value="api.midtrans.com">api.midtrans.com</option>
                    <option value="investor.fb.com">investor.fb.com</option>
                    <option value="bakrie.ac.id">bakrie.ac.id</option>
        </select>
        <div style="text-align: right; margin-top: 15px;">
          <button onclick="confirmBugSelection()">Pilih</button>
        </div>
      </div>
    </div>

    <!-- Modal TLS -->
    <div id="tlsModal" class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModal('tlsModal')">&times;</span>
        <div class="modal-header">Pilih TLS / Non-TLS</div>
        <div class="config-buttons">
          <button onclick="copyConfig('tls')">Copy TLS</button>
          <button onclick="copyConfig('nontls')">Copy NTLS</button>
        </div>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
    <script>
 let total = 0, active = 0, dead = 0;
let currentConfigType = {};

async function checkStatus(ip, port, container) {
  const url = '/check?ip=' + ip + ':' + port;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response not ok');
    const data = await response.json();
    const status = data.status === 'ACTIVE' ? 'active' : 'inactive';
    const icon = status === 'active' ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>';
    const delay = data.delay || 0;

    container.innerHTML = `<div class="status ${status}">${icon}</div><span class="delay">(${delay})</span>`;

    if (status === 'active') active++;
    else dead++;
    updateStatusCount();
  } catch (error) {
    console.error('Error checking status:', error);
    container.innerHTML = `<div class="status error">&#10007; DEAD</div>`;
    dead++;
    updateStatusCount();
  }
}

function updateStatusCount() {
  $('#total').text(total);
  $('#active').text(active);
  $('#dead').text(dead);
}

async function loadProxies() {
  try {
    const url = 'https://raw.githubusercontent.com/jaka2m/botak/refs/heads/main/cek/proxyList.txt';
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch proxy list');
    const text = await res.text();
    const lines = text.trim().split('\n');

    const countryMap = {
  AF: "Afghanistan", AL: "Albania", DZ: "Algeria", AS: "American Samoa", AD: "Andorra",
  AO: "Angola", AI: "Anguilla", AQ: "Antarctica", AG: "Antigua and Barbuda", AR: "Argentina",
  AM: "Armenia", AW: "Aruba", AU: "Australia", AT: "Austria", AZ: "Azerbaijan",
  BS: "Bahamas", BH: "Bahrain", BD: "Bangladesh", BB: "Barbados", BY: "Belarus",
  BE: "Belgium", BZ: "Belize", BJ: "Benin", BM: "Bermuda", BT: "Bhutan",
  BO: "Bolivia", BA: "Bosnia and Herzegovina", BW: "Botswana", BR: "Brazil", BN: "Brunei",
  BG: "Bulgaria", BF: "Burkina Faso", BI: "Burundi", KH: "Cambodia", CM: "Cameroon",
  CA: "Canada", CV: "Cape Verde", KY: "Cayman Islands", CF: "Central African Republic", TD: "Chad",
  CL: "Chile", CN: "China", CO: "Colombia", KM: "Comoros", CG: "Congo (Brazzaville)",
  CD: "Congo (Kinshasa)", CR: "Costa Rica", HR: "Croatia", CU: "Cuba", CY: "Cyprus",
  CZ: "Czech Republic", DK: "Denmark", DJ: "Djibouti", DM: "Dominica", DO: "Dominican Republic",
  EC: "Ecuador", EG: "Egypt", SV: "El Salvador", GQ: "Equatorial Guinea", ER: "Eritrea",
  EE: "Estonia", ET: "Ethiopia", FJ: "Fiji", FI: "Finland", FR: "France",
  GA: "Gabon", GM: "Gambia", GE: "Georgia", DE: "Germany", GH: "Ghana",
  GR: "Greece", GD: "Grenada", GT: "Guatemala", GN: "Guinea", GW: "Guinea-Bissau",
  GY: "Guyana", HT: "Haiti", HN: "Honduras", HK: "Hong Kong", HU: "Hungary",
  IS: "Iceland", IN: "India", ID: "Indonesia", IR: "Iran", IQ: "Iraq",
  IE: "Ireland", IL: "Israel", IT: "Italy", JM: "Jamaica", JP: "Japan",
  JO: "Jordan", KZ: "Kazakhstan", KE: "Kenya", KI: "Kiribati", KP: "North Korea",
  KR: "South Korea", KW: "Kuwait", KG: "Kyrgyzstan", LA: "Laos", LV: "Latvia",
  LB: "Lebanon", LS: "Lesotho", LR: "Liberia", LY: "Libya", LI: "Liechtenstein",
  LT: "Lithuania", LU: "Luxembourg", MO: "Macao", MK: "North Macedonia", MG: "Madagascar",
  MW: "Malawi", MY: "Malaysia", MV: "Maldives", ML: "Mali", MT: "Malta",
  MH: "Marshall Islands", MR: "Mauritania", MU: "Mauritius", MX: "Mexico", FM: "Micronesia",
  MD: "Moldova", MC: "Monaco", MN: "Mongolia", ME: "Montenegro", MA: "Morocco",
  MZ: "Mozambique", MM: "Myanmar", NA: "Namibia", NR: "Nauru", NP: "Nepal",
  NL: "Netherlands", NZ: "New Zealand", NI: "Nicaragua", NE: "Niger", NG: "Nigeria",
  NO: "Norway", OM: "Oman", PK: "Pakistan", PW: "Palau", PS: "Palestine",
  PA: "Panama", PG: "Papua New Guinea", PY: "Paraguay", PE: "Peru", PH: "Philippines",
  PL: "Poland", PT: "Portugal", QA: "Qatar", RO: "Romania", RU: "Russia",
  RW: "Rwanda", KN: "Saint Kitts and Nevis", LC: "Saint Lucia", VC: "Saint Vincent and the Grenadines", WS: "Samoa",
  SM: "San Marino", ST: "Sao Tome and Principe", SA: "Saudi Arabia", SN: "Senegal", RS: "Serbia",
  SC: "Seychelles", SL: "Sierra Leone", SG: "Singapore", SK: "Slovakia", SI: "Slovenia",
  SB: "Solomon Islands", SO: "Somalia", ZA: "South Africa", SS: "South Sudan", ES: "Spain",
  LK: "Sri Lanka", SD: "Sudan", SR: "Suriname", SE: "Sweden", CH: "Switzerland",
  SY: "Syria", TW: "Taiwan", TJ: "Tajikistan", TZ: "Tanzania", TH: "Thailand",
  TL: "Timor-Leste", TG: "Togo", TO: "Tonga", TT: "Trinidad and Tobago", TN: "Tunisia",
  TR: "Turkey", TM: "Turkmenistan", TV: "Tuvalu", UG: "Uganda", UA: "Ukraine",
  AE: "United Arab Emirates", GB: "United Kingdom", US: "United States", UY: "Uruguay", UZ: "Uzbekistan",
  VU: "Vanuatu", VE: "Venezuela", VN: "Vietnam", YE: "Yemen", ZM: "Zambia",
  ZW: "Zimbabwe"
};

    // Reset status counters
    total = lines.length;
    active = 0;
    dead = 0;

    // Simpan lines global untuk event handler tombol Config (lebih aman daripada onclick inline)
    window.proxyLines = lines;

    const rows = lines.map((line, index) => {
      const parts = line.split(',');
      if (parts.length < 4) {
        // Jika format salah, isi default agar tidak error
        return ['Invalid data', '-', '-', '-', '-'];
      }

      const [ip, port, countryCode, isp] = parts;
      const code = countryCode?.trim().toUpperCase() || '-';
      const countryName = countryMap[code] || code;
      const flag = code && code !== '-'
        ? `<img src="https://flagcdn.com/w40/${code.toLowerCase()}.png" style="height:16px; margin-right:5px;">`
        : '';

      return [
        `${ip}:${port}`,
        `<div class="status-block" data-checked="false"><div class="spinner"></div></div>`,
        `${flag} ${countryName}`,
        isp || '-',
        `<button class="config-btn" data-index="${index}">Config</button>`
      ];
    });

    // Inisialisasi atau update DataTable
    const table = $('#proxyTable').DataTable();
    table.clear();
    table.rows.add(rows);
    table.draw();

    updateStatusCount();

    // Cek keberadaan fungsi checkVisibleRows sebelum panggil
    if (typeof checkVisibleRows === 'function') {
      checkVisibleRows();
      table.off('draw').on('draw', () => {
        checkVisibleRows();
      });
    }

  } catch (error) {
    console.error('Failed to load proxies:', error);
    alert('Gagal memuat daftar proxy.');
  }
}

// Event delegation untuk tombol Config agar tidak pakai onclick inline
$('#proxyTable tbody').on('click', '.config-btn', function () {
  const index = $(this).data('index');
  if (typeof window.proxyLines === 'undefined' || !window.proxyLines[index]) {
    console.error('Data proxy tidak ditemukan untuk index:', index);
    return;
  }
  const [ip, port, countryCode, isp] = window.proxyLines[index].split(',');
  const code = countryCode?.trim().toUpperCase() || '-';
  openProtocolModal(ip, port, code, isp);
});

function openProtocolModal(ip, port, country, isp) {
  currentConfigType = { ip, port, country, isp };
  openModal('protocolModal');
}

function selectProtocol(protocol) {
  currentConfigType.protocol = protocol;
  closeModal('protocolModal');
  openModal('bugModal');
}

function confirmBugSelection() {
  const bugMode = document.querySelector('input[name="bugMode"]:checked');
  const bugSelect = document.getElementById('bugSelect');
  if (!bugMode || !bugSelect) {
    alert('Mohon pilih opsi bug dengan benar.');
    return;
  }
  currentConfigType.bugMode = bugMode.value;
  currentConfigType.selectedBug = bugSelect.value;
  closeModal('bugModal');
  openModal('tlsModal');
}

function copyConfig(tlsType) {
  const { ip, port, country, isp, protocol, bugMode = 'normal', selectedBug = '' } = currentConfigType;
  const uuid = 'f282b878-8711-45a1-8c69-5564172123c1';
  const baseDomain = 'joss.krikkrik.tech';

  const standardPort = tlsType === 'tls' ? 443 : 80;
  const displayPort = standardPort;
  const path = `/Free-VPN-CF-Geo-Project/${ip}=${port}`;

  const tag = `${country} - ${isp}`.replace(/ /g, '%20');
  const tlsLabel = tlsType === 'tls' ? 'TLS' : 'NTLS';
  const tlsValue = tlsType === 'tls' ? 'tls' : 'none';

  let address = baseDomain;
  let host = baseDomain;
  let sni = baseDomain;

  if (bugMode === 'wildcard' && selectedBug) {
    address = selectedBug;
    host = `${selectedBug}.${baseDomain}`;
    sni = `${selectedBug}.${baseDomain}`;
  }

  let config = '';

  switch (protocol) {
    case 'vmess':
      const vmessJSON = {
        v: "2",
        ps: `${country} - ${isp} [VMess-${tlsLabel}]`,
        add: address,
        port: displayPort,
        id: uuid,
        aid: "0",
        net: "ws",
        type: "none",
        host: host,
        path: path,
        tls: tlsValue,
        sni: sni,
        scy: "zero"
      };
      config = "vmess://" + btoa(JSON.stringify(vmessJSON));
      break;

    case 'vless':
      config = `vless://${uuid}@${address}:${displayPort}?encryption=none&security=${tlsValue}&type=ws&host=${encodeURIComponent(host)}&path=${encodeURIComponent(path)}&sni=${encodeURIComponent(sni)}#${tag}%20[VLESS-${tlsLabel}]`;
      break;

    case 'trojan':
      config = `trojan://${uuid}@${address}:${displayPort}?security=${tlsValue}&type=ws&host=${encodeURIComponent(host)}&path=${encodeURIComponent(path)}&sni=${encodeURIComponent(sni)}#${tag}%20[Trojan-${tlsLabel}]`;
      break;

    case 'ss':
      const ssBase64 = btoa(`none:${uuid}`);
      config = `ss://${ssBase64}@${address}:${displayPort}?encryption=none&type=ws&host=${encodeURIComponent(host)}&path=${encodeURIComponent(path)}&security=${tlsValue}&sni=${encodeURIComponent(sni)}#${tag}%20[SS-${tlsLabel}]`;
      break;
  }

  // Buat QR code dalam canvas tersembunyi
const tempDiv = document.createElement('div');
tempDiv.style.display = 'none';
document.body.appendChild(tempDiv);

const qr = new QRCode(tempDiv, {
  text: config,
  width: 400,
  height: 400,
  correctLevel: QRCode.CorrectLevel.H
});

setTimeout(() => {
  const canvas = tempDiv.querySelector('canvas');
  if (!canvas) {
    Swal.fire('Gagal', 'QR Code gagal dibuat.', 'error');
    return;
  }

  const dataURL = canvas.toDataURL("image/png");
  document.body.removeChild(tempDiv); // hapus elemen setelah selesai

  // Tampilkan Swal dan tombol download QR dengan tombol Oke yang custom
  Swal.fire({
    icon: 'success',
    background: 'rgba(0, 40, 0, 0.7)',
    color: 'white',
    title: 'Copied!',
    html: `
      <textarea style="
  width: 100%;
  height: 150px;
  padding: 10px;
  font-size: 14px;
  background: rgba(0, 40, 0, 0.7);
  color: #00ff00;
  border: 1.5px solid #00ff00;
  border-radius: 8px;
  resize: none;
  outline: none;
  font-family: 'Courier New', Courier, monospace;
  text-shadow: 0 0 5px #00ff00;
" readonly>${config}</textarea>
<div style="margin-top: 15px; text-align: center;">
<button id="downloadQRBtn" style="
  background: #0f380f;
  color: #00ff00;
  font-weight: 700;
  font-family: 'Courier New', Courier, monospace;
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 6px;
  border: 2px solid #00ff00;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  user-select: none;
  text-shadow:
    0 0 5px #00ff00,
    0 0 10px #00ff00;
" >
  Download QR Code
</button>
</div>
    `,
    width: 300,
    confirmButtonText: 'Oke',
    customClass: {
      confirmButton: 'swal2-confirm-custom'
    },
    didOpen: () => {
      const btn = document.getElementById('downloadQRBtn');
      btn.addEventListener('mouseenter', () => {
        btn.style.background = 'linear-gradient(135deg, #00cc7a, #009955)';
        btn.style.transform = 'scale(1.05)';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.background = 'linear-gradient(135deg, #00ff9f, #00cc7a)';
        btn.style.transform = 'scale(1)';
      });
      btn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = `qr-${protocol}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    }
  });
}, 200);

// Salin ke clipboard
navigator.clipboard.writeText(config).catch(() => {
  // fallback
  const textarea = document.createElement("textarea");
  textarea.value = config;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
  } catch {}
  document.body.removeChild(textarea);
});

closeModal('tlsModal');
}


      function checkVisibleRows() {
    const table = $('#proxyTable').DataTable();
    table.rows({ page: 'current' }).every(function () {
      const row = $(this.node());
      const ipPort = row.find('td').eq(0).text().split(':');
      const ip = ipPort[0], port = ipPort[1];
      const statusCell = row.find('.status-block');

      if (!statusCell.data('checked')) {
        statusCell.html('<div class="spinner"></div>');
        checkStatus(ip, port, statusCell[0]);
        statusCell.data('checked', true);
      }
    });
  }

      function openModal(id) {
        document.getElementById(id).classList.add('show');
      }

      function closeModal(id) {
        const modal = document.getElementById(id);
        const content = modal.querySelector('.modal-content');
        content.classList.add('hide');
        setTimeout(() => {
          modal.classList.remove('show');
          content.classList.remove('hide');
        }, 300);
      }

      window.onclick = function (e) {
        ['protocolModal', 'bugModal', 'tlsModal'].forEach(id => {
          const modal = document.getElementById(id);
          if (e.target === modal) closeModal(id);
        });
      }

      $(document).ready(function () {
        $('#proxyTable').DataTable({
          drawCallback: function () {
            checkVisibleRows();
          }
        });

        loadProxies().then(() => checkVisibleRows());
      });
    </script>
</body>
</html>`;

const checkerHtml = `<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Matrix Proxy Checker</title>
    <style>
        /* Basic Reset & Font */
        body {
            margin: 0;
            padding: 0;
            overflow: scroll;
            font-family: 'Share Tech Mono', monospace;
            background-color: #0a0a0a;
            color: #00ff41;
        }

        /* Matrix Canvas Overlay */
        #matrixCanvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
            opacity: 0.6;
        }

        /* Main Content Container */
        .container {
            position: relative;
            z-index: 1;
            padding: 20px;
            max-width: 900px;
            margin: 20px auto;
            background-color: rgba(10, 10, 10, 0.85);
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
            border: 1px solid #004d00;
        }

        h2 {
            color: #00ff41;
            margin-bottom: 15px;
            text-align: center;
            text-shadow: 0 0 8px rgba(0, 255, 65, 0.7);
            letter-spacing: 2px;
        }

        textarea,
        input[type="file"] {
            background-color: #001a00;
            color: #00ff41;
            border: 1px solid #004d00;
            border-radius: 6px;
            padding: 12px;
            width: 100%;
            font-size: 15px;
            box-sizing: border-box;
            resize: vertical;
            font-family: 'Courier New', monospace;
            box-shadow: inset 0 0 5px rgba(0, 255, 65, 0.2);
        }

        /* --- Modifikasi CSS Tombol Dimulai Di Sini --- */
        .controls {
            display: flex;
            flex-direction: column; /* Tetap kolom untuk susunan baris 1-2-2 */
            gap: 10px; /* Jarak antar baris (misal: antara baris 1 dan baris 2) */
            margin-top: 20px;
            align-items: center; /* Pusatkan baris */
        }

        .controls .row {
            display: flex;
            flex-wrap: wrap; /* Izinkan tombol pecah baris jika tidak muat */
            justify-content: center; /* Pusatkan tombol dalam baris */
            gap: 10px; /* Jarak antar tombol di dalam satu baris */
            width: 100%; /* Pastikan baris mengambil lebar penuh */
        }

        button {
            background-color: #006633;
            border: none;
            color: white;
            padding: 10px 12px; /* Ukuran padding lebih kecil */
            font-size: 14px; /* Ukuran font lebih kecil */
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.1s ease, box-shadow 0.3s ease;
            min-width: 0;
            font-family: 'Share Tech Mono', monospace;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 0 10px rgba(0, 255, 65, 0.4);
            flex: 1 1 auto; /* Default fleksibilitas: bisa menyusut/membesar, basis auto */
            max-width: 170px; /* Batasi lebar maksimum per tombol */
        }

        /* Override untuk tombol 'Mulai Cek' agar lebih lebar di desktop */
        .controls .row.full button {
            max-width: 350px; /* Lebih lebar untuk tombol tunggal */
        }

        button:hover {
            background-color: #008040;
            transform: translateY(-2px);
            box-shadow: 0 0 15px rgba(0, 255, 65, 0.6);
        }

        button:active {
            transform: translateY(0);
            box-shadow: 0 0 5px rgba(0, 255, 65, 0.2);
        }
        /* --- Modifikasi CSS Tombol Berakhir Di Sini --- */


        .stats {
            margin-top: 25px;
            font-size: 17px;
            text-align: center;
            color: #00ff41;
            text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
        }

        .stats b {
            color: #00e676;
        }

        .table-container {
            overflow-x: auto;
            margin-top: 25px;
            border: 1px solid #004d00;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background-color: #001a00;
            min-width: 800px;
            margin: 0 auto;
        }

        th {
            background-color: #003300;
            color: #ccffcc;
            padding: 12px;
            text-align: left;
            border-bottom: 2px solid #006600;
            font-size: 15px;
            letter-spacing: 0.5px;
        }

        td {
            padding: 10px;
            border-bottom: 1px dashed #004d00;
            color: #00e676;
            font-size: 14px;
        }

        td:last-child {
            border-bottom: none;
        }

        .green {
            color: #a7ffeb;
            font-weight: bold;
            text-shadow: 0 0 3px rgba(167, 255, 235, 0.7);
        }

        .red {
            color: #ff5252;
            font-weight: bold;
            text-shadow: 0 0 3px rgba(255, 82, 82, 0.7);
        }

        ::file-selector-button {
            background: #004d00;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        ::file-selector-button:hover {
            background: #006600;
        }

        /* Custom Notification Styling */
        .custom-notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: rgba(0, 51, 0, 0.9);
            color: #00ff41;
            padding: 15px 25px;
            border-radius: 8px;
            border: 1px solid #008040;
            box-shadow: 0 0 15px rgba(0, 255, 65, 0.7);
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: opacity 0.4s ease-out, transform 0.4s ease-out, visibility 0.4s;
            font-family: 'Share Tech Mono', monospace;
            font-size: 16px;
            letter-spacing: 0.5px;
        }

        .custom-notification.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .container {
                margin: 10px;
                padding: 15px;
            }

            h2 {
                font-size: 24px;
            }

            /* --- Modifikasi Responsive Tombol Dimulai Di Sini --- */
            /* Di layar kecil, tombol akan tetap mencoba berjejer 2,
               tetapi akan turun ke baris baru jika tidak muat.
               Max-width per tombol akan membatasi agar tidak terlalu kecil atau terlalu besar. */
            button {
                flex: 1 1 45%; /* Setiap tombol akan mencoba mengambil 45% lebar baris,
                                  menyisakan ruang untuk gap 10px di antaranya.
                                  Ini memungkinkan 2 tombol per baris. */
                max-width: 100%; /* Batalkan max-width global untuk tombol */
            }

            /* Tombol 'Mulai Cek' di baris penuh akan mengambil 100% di HP */
            .controls .row.full button {
                flex: 1 1 100%;
                max-width: 100%;
            }

            /* Jarak antar baris */
            .controls {
                gap: 8px;
            }

            /* --- Modifikasi Responsive Tombol Berakhir Di Sini --- */

            th,
            td {
                padding: 8px;
                font-size: 13px;
            }

            .stats {
                font-size: 15px;
            }

            .custom-notification {
                bottom: 10px;
                right: 10px;
                left: 10px;
                width: auto;
                font-size: 14px;
                padding: 10px 15px;
            }
        }
    </style>
</head>

<body>
    <canvas id="matrixCanvas"></canvas>

    <div id="customNotification" class="custom-notification">
        <span id="notificationMessage"></span>
    </div>

    <div class="container">
        <h2>Matrix Proxy Checker</h2>

        <textarea id="input" rows="6" placeholder="Masukkan proxy manual, contoh: IP:PORT\n..."></textarea>
        <input type="file" id="fileInput" multiple accept=".txt" />

        <div class="controls">
            <div class="row full">
                <button onclick="startCheck()">Mulai Cek</button>
            </div>
            <div class="row half">
                <button onclick="loadFromFiles()">Gabungkan Dari File</button>
                <button onclick="copyToClipboard()">Salin Proxy Aktif</button>
            </div>
            <div class="row half">
                <button onclick="copyIpPort()">Salin IP:Port Aktif</button>
                <button onclick="downloadTxt()">Unduh .txt</button>
            </div>
        </div>

        <div class="stats" id="stats">
            <b>Total:</b> <span id="total">0</span> |
            <b>Active:</b> <span id="active">0</span> |
            <b>Inactive:</b> <span id="inactive">0</span>
        </div>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>IP</th>
                        <th>Port</th>
                        <th>Status</th>
                        <th>Country</th>
                        <th>ISP</th>
                        <th>Protocol</th>
                        <th>Delay</th>
                    </tr>
                </thead>
                <tbody id="result"></tbody>
            </table>
        </div>
    </div>

    <script>
        // --- Matrix Effect JavaScript ---
        const canvas = document.getElementById('matrixCanvas');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-+=[]{}|;:\'",.<>/?`~';
        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const drops = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = 1; // Start each column at the top
        }

        function drawMatrix() {
            // Semi-transparent black background to create trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Matrix green color for characters
            ctx.fillStyle = '#00ff41';
            ctx.font = `${fontSize}px Share Tech Mono`; // Use the same font as body

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Send the drop back to the top randomly
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Increment y-coordinate
                drops[i]++;
            }
        }

        setInterval(drawMatrix, 33); // Approximately 30 frames per second

        // Adjust canvas size on window resize
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Re-initialize drops for new width
            const newColumns = canvas.width / fontSize;
            drops.length = 0; // Clear existing drops
            for (let x = 0; x < newColumns; x++) {
                drops[x] = 1;
            }
        });

        // --- Existing Proxy Checker JavaScript (mostly unchanged) ---
        window.onload = () => {
            // Load custom font for a more hacker-like look
            const link = document.createElement('link');
            link.href = 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap';
            link.rel = 'stylesheet';
            document.head.appendChild(link);

            const saved = localStorage.getItem('proxy_results');
            if (saved) document.getElementById('result').innerHTML = saved;
            const stats = JSON.parse(localStorage.getItem('proxy_stats') || '{}');
            document.getElementById('total').textContent = stats.total || 0;
            document.getElementById('active').textContent = stats.active || 0;
            document.getElementById('inactive').textContent = stats.inactive || 0;
        };

        function saveResultsToLocalStorage() {
            localStorage.setItem('proxy_results', document.getElementById('result').innerHTML);
            localStorage.setItem('proxy_stats', JSON.stringify({
                total: document.getElementById('total').textContent,
                active: document.getElementById('active').textContent,
                inactive: document.getElementById('inactive').textContent
            }));
        }

        async function loadFromFiles() {
            const files = document.getElementById('fileInput').files;
            if (!files.length) return alert('Pilih minimal 1 file .txt');
            let allText = document.getElementById('input').value.trim();
            for (const file of files) {
                const text = await file.text();
                allText += '\n' + text.trim();
            }
            document.getElementById('input').value = allText.trim();
            alert('Semua isi file berhasil digabung ke dalam textarea!');
        }

        async function startCheck() {
            const inputEl = document.getElementById('input');
            const result = document.getElementById('result');
            const stats = { total: 0, active: 0, inactive: 0 };

            const lines = Array.from(new Set(
                inputEl.value.trim().split('\n').map(x => x.trim()).filter(Boolean)
            ));
            inputEl.value = lines.join('\n');
            result.innerHTML = '';
            stats.total = lines.length;
            document.getElementById('total').textContent = stats.total;
            document.getElementById('active').textContent = 0;
            document.getElementById('inactive').textContent = 0;

            for (let i = 0; i < lines.length; i++) {
                const [ip, port] = lines[i].split(':');
                if (!ip || !port) continue;

                const row = result.insertRow();
                row.insertCell().textContent = i + 1;
                row.insertCell().textContent = ip;
                row.insertCell().textContent = port;
                const statusCell = row.insertCell();
                const countryCell = row.insertCell();
                const ispCell = row.insertCell();
                const protoCell = row.insertCell();
                const delayCell = row.insertCell();
                statusCell.textContent = '...'; // Initial status

                setTimeout(async () => {
                    try {
                        const res = await fetch(`/check?ip=${ip}:${port}`);
                        const data = await res.json();

                        if (data.status === 'ACTIVE') {
                            statusCell.textContent = 'Active';
                            statusCell.className = 'green';
                            stats.active++;
                        } else {
                            statusCell.textContent = 'Inactive';
                            statusCell.className = 'red';
                            stats.inactive++;
                        }

                        countryCell.textContent = data.country || '-';
                        ispCell.textContent = data.isp || '-';
                        protoCell.textContent = data.httpProtocol || '-';
                        delayCell.textContent = data.delay || '-';
                    } catch {
                        statusCell.textContent = 'Error';
                        statusCell.className = 'red';
                        stats.inactive++;
                    }

                    document.getElementById('active').textContent = stats.active;
                    document.getElementById('inactive').textContent = stats.inactive;
                    saveResultsToLocalStorage();
                    row.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }, 200 * i);
            }
        }

        function getActiveProxies() {
            return Array.from(document.querySelectorAll('#result tr'))
                .filter(r => r.querySelector('.green'))
                .map(r => {
                    const cells = r.querySelectorAll('td');
                    // Ensure cells[4] (country) exists before accessing textContent
                    const country = (cells[4] && cells[4].textContent ? cells[4].textContent.split(' ')[0] : '-');
                    return [cells[1].textContent, cells[2].textContent, country, (cells[5] && cells[5].textContent ? cells[5].textContent : '-')].join(',');
                })
                .sort((a, b) => a.split(',')[2].localeCompare(b.split(',')[2]));
        }

        function copyToClipboard() {
            const proxies = getActiveProxies().join('\n');
            navigator.clipboard.writeText(proxies).then(() => alert('Disalin ke clipboard!'));
        }

        function copyIpPort() {
            const active = Array.from(document.querySelectorAll('#result tr'))
                .filter(r => r.querySelector('.green'))
                .map(r => {
                    const cells = r.querySelectorAll('td');
                    return `${cells[1].textContent}:${cells[2].textContent}`;
                });
            navigator.clipboard.writeText(active.join('\n'))
                .then(() => alert('IP:Port aktif berhasil disalin!'));
        }

        function downloadTxt() {
            const proxies = getActiveProxies().join('\n');
            const blob = new Blob([proxies], { type: 'text/plain' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = 'active_proxies.txt';
            a.click();
        }
    </script>
</body>

</html>`;

const subHtml = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Geo-VPN | VPN Tunnel | CloudFlare</title>

    <meta name="description" content="Akun Vless Gratis. Geo-VPN offers free Vless accounts with Cloudflare and Trojan support. Secure and fast VPN tunnel services.">
    <meta name="keywords" content="Geo-VPN, Free Vless, Vless CF, Trojan CF, Cloudflare, VPN Tunnel, Akun Vless Gratis">
    <meta name="author" content="Geo-VPN">
    <meta name="robots" content="index, follow, noarchive, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

    <meta property="og:title" content="Geo-VPN | Free Vless & Trojan Accounts">
    <meta property="og:description" content="Geo-VPN provides free Vless accounts and VPN tunnels via Cloudflare. Secure, fast, and easy setup.">
    <meta property="og:image" content="https://geoproject.biz.id/circle-flags/bote.png">
    <meta property="og:url" content="https://geoproject.biz.id/vpn"> <meta property="og:type" content="website">
    <meta property="og:site_name" content="Geo-VPN">
    <meta property="og:locale" content="en_US">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Geo-VPN Image Preview">
    <meta property="og:image:type" content="image/png"> <meta property="og:image:secure_url" content="https://geoproject.biz.id/circle-flags/bote.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Geo-VPN | Free Vless & Trojan Accounts">
    <meta name="twitter:description" content="Get free Vless accounts and fast VPN services via Cloudflare with Geo-VPN. Privacy and security guaranteed.">
    <meta name="twitter:image" content="https://geoproject.biz.id/circle-flags/bote.png">
    <meta name="twitter:site" content="@sampiiiiu">
    <meta name="twitter:creator" content="@sampiiiiu">

    <link rel="icon" href="https://geoproject.biz.id/circle-flags/bote.png">
    <link rel="apple-touch-icon" href="https://geoproject.biz.id/circle-flags/bote.png">

    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flag-icon-css/css/flag-icon.min.css">
    <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.7.1/css/all.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.tailwindcss.com"></script>

    <meta name="theme-color" content="#000000">
    <meta name="format-detection" content="telephone=no">
    <meta name="generator" content="Geo-VPN">
    <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE">

    <style>
        :root {
            --color-primary: #00d4ff; /* Biru neon */
            --color-secondary: #00bfff; /* Biru lebih terang */
            --color-background: #020d1a; /* Latar belakang lebih gelap */
            --color-card: rgba(0, 212, 255, 0.1); /* Kartu dengan sedikit transparansi */
            --color-text: #e0f4f4; /* Tetap dengan teks cerah */
            --transition: all 0.3s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: none;
        }

        body {
            display: flex;
            background: url('https://raw.githubusercontent.com/bitzblack/ip/refs/heads/main/shubham-dhage-5LQ_h5cXB6U-unsplash.jpg') no-repeat center center fixed;
            background-size: cover;
            justify-content: center;
            align-items: flex-start; /* Align items to the top */
            color: var(--color-text);
            min-height: 100vh;
            font-family: 'Arial', sans-serif;
            overflow-y: auto; /* Memungkinkan scrolling */
        }

        .container {
            width: 100%;
            max-width: 500px;
            padding: 2rem;
            max-height: 90vh; /* Batasi tinggi agar tidak melebihi viewport */
            overflow-y: auto; /* Membolehkan scroll jika konten lebih tinggi */
            margin-top: 2rem; /* Tambahkan margin atas agar tidak terlalu dekat dengan navbar */
            margin-bottom: 2rem; /* Tambahkan margin bawah */
        }

        .card {
            background: var(--color-card);
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1); /* Biru neon */
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0, 212, 255, 0.2); /* Biru neon */
            transition: var(--transition);
        }

        .card:hover {
            box-shadow: 0 20px 60px rgba(0, 212, 255, 0.3); /* Glow lebih kuat */
        }

        .title {
            text-align: center;
            color: var(--color-primary); /* Biru neon */
            margin-bottom: 1.5rem;
            font-size: 2rem;
            font-weight: 700;
            animation: titleFadeIn 1s ease-out;
        }

        @keyframes titleFadeIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--color-text);
            font-weight: 500;
        }

        .form-control {
            width: 100%;
            padding: 0.75rem 1rem;
            background: rgba(0, 212, 255, 0.05); /* Biru neon */
            border: 2px solid rgba(0, 212, 255, 0.3); /* Biru neon */
            border-radius: 8px;
            color: var(--color-text);
            transition: var(--transition);
        }

        .form-control:focus {
            border-color: var(--color-secondary); /* Biru lebih terang */
            box-shadow: 0 0 8px 3px rgba(0, 255, 255, 0.7); /* Biru neon */
        }

        .btn {
            width: 100%;
            padding: 0.75rem;
            background: var(--color-primary); /* Biru neon */
            color: var(--color-background);
            border: none;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            position: relative;
            overflow: hidden;
        }

        .btn::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300%;
            height: 300%;
            background: rgba(0, 255, 255, 0.3);
            transition: all 0.4s ease;
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
        }

        .btn:hover::after {
            transform: translate(-50%, -50%) scale(1);
        }

        .btn:hover {
            background: var(--color-secondary); /* Biru lebih terang */
            box-shadow: 0 0 20px 10px rgba(0, 255, 255, 0.3); /* Glow saat hover */
        }

        .result {
            margin-top: 1rem;
            padding: 1rem;
            background: rgba(0, 212, 255, 0.1); /* Biru neon */
            border-radius: 8px;
            word-break: break-all;
            opacity: 0;
            animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        .loading {
            display: none;
            text-align: center;
            color: var(--color-primary); /* Biru neon */
            margin-top: 1rem;
        }

        .copy-btns {
            display: flex;
            justify-content: space-between;
            margin-top: 0.5rem;
            gap: 10px; /* Tambahkan jarak antar tombol */
        }

        .copy-btn {
            flex: 1; /* Agar tombol memiliki lebar yang sama */
            background: rgba(0, 212, 255, 0.2); /* Biru neon */
            color: var(--color-primary); /* Biru neon */
            padding: 0.5rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: var(--transition);
            position: relative;
            overflow: hidden;
        }

        .copy-btn::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 300%;
            height: 300%;
            background: rgba(0, 255, 255, 0.3);
            transition: all 0.4s ease;
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
        }

        .copy-btn:hover::after {
            transform: translate(-50%, -50%) scale(1);
        }

        .copy-btn:hover {
            background: rgba(0, 212, 255, 0.3); /* Biru neon */
            box-shadow: 0 0 15px 8px rgba(0, 255, 255, 0.3); /* Glow saat hover */
        }

        #error-message {
            color: #ff4444;
            text-align: center;
            margin-top: 1rem;
        }

        /* Navbar */
        .navbar {
            position: fixed;
            top: 50%;
            left: -80px; /* Awalnya disembunyikan */
            transform: translateY(-50%);
            width: 80px;
            background: transparent; /* Ubah ke transparan */
            color: white;
            padding: 10px 0;
            transition: left 0.3s ease-in-out;
            z-index: 1000;
            border-radius: 0 10px 10px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        /* Saat navbar terbuka */
        .navbar.show {
            left: 0;
        }

        .navbar a img {
            width: 40px;
        }

        .navbar a {
            display: block;
            color: white;
            text-decoration: none;
            padding: 10px 0; /* Sesuaikan padding */
        }

        .navbar a:hover {
            background: transparent; /* Tetap transparan */
        }

        /* Tombol Toggle */
        .toggle-btn {
            position: absolute;
            top: 50%;
            right: -30px; /* Posisi tombol di tengah kanan navbar */
            transform: translateY(-50%);
            background: transparent; /* Ubah ke transparan */
            border: none;
            cursor: pointer;
            z-index: 1001;
            padding: 10px;
            border-radius: 0 10px 10px 0;
            transition: right 0.3s ease-in-out;
        }

        .toggle-btn img {
            width: 20px; /* Ukuran gambar lebih kecil */
            height: 150px; /* Ukuran gambar lebih kecil */
        }

        /* Saat navbar terbuka, tombol ikut bergeser */
        .navbar.show .toggle-btn {
            right: -29px;
        }

        .navbarconten {
            width: 100%;
            overflow-x: hidden; /* Ganti overflow-x menjadi hidden karena ini vertikal */
            margin-bottom: 0px;
            border: 1px solid rgba(0, 212, 255, 0.2); /* Border dengan warna biru neon */
            border-radius: 10px; /* Membuat sudut melengkung */
            padding: 0px; /* Memberi jarak antara border dan konten */
            background-color: rgba(0, 0, 0, 0.82); /* Warna latar belakang */
            box-shadow: 0 0 15px rgba(0, 212, 255, 0.6), /* Glow biru neon */
                        0 0 30px rgba(0, 150, 255, 0.5);  /* Glow biru */
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px; /* Memberikan jarak antar item navigasi */
        }
    </style>
</head>
<body>
    <div class="navbar" id="navbar">
        <button type="button" class="toggle-btn" id="menu-btn" onclick="toggleNavbar()">
            <img src="https://geoproject.biz.id/social/buka.png" alt="Toggle Menu">
        </button>
        <div class="navbarconten text-center">
            <a href="https://wa.me/6282339191527" target="_blank" rel="noopener noreferrer">
                <img src="https://geoproject.biz.id/social/mobile.png" alt="WhatsApp" width="40" class="mt-1">
            </a>
            <a href="/sub" target="_self" rel="noopener noreferrer">
                <img src="https://geoproject.biz.id/social/linksub.png" alt="VPN" width="40" class="mt-1">
            </a>
            <a href="https://cobay.vercel.app/checker" target="_self" rel="noopener noreferrer">
                <img src="https://geoproject.biz.id/social/vpn.png" alt="Checker" width="40" class="mt-1">
            </a>
            <a href="https://t.me/sampiiiiu" target="_blank" rel="noopener noreferrer">
                <img src="https://geoproject.biz.id/social/tele.png" alt="Telegram Channel" width="40" class="mt-1">
            </a>
            <a href="https://t.me/escampuranbot" target="_blank" rel="noopener noreferrer">
                <img src="https://geoproject.biz.id/social/bot.png" alt="Telegram Bot" width="40" class="mt-1">
            </a>
            <a href="https://cobay.vercel.app" target="_self" rel="noopener noreferrer">
                <img src="https://geoproject.biz.id/social/home.png" alt="Home" width="40" class="mt-1">
            </a>
        </div>
    </div>

    <div class="container">
        <div class="card">
            <h1 class="title">Sub Link Generator</h1>
            <form id="subLinkForm">
                <div class="form-group">
                    <label for="app">Aplikasi</label>
                    <select id="app" class="form-control" required>
                        <option value="v2ray">V2RAY</option>
                        <option value="v2rayng">V2RAYNG</option>
                        <option value="clash">CLASH</option>
                        <option value="nekobox">NEKOBOX</option>
                        <option value="singbox">SINGBOX</option>
                        <option value="surfboard">SURFBOARD</option>
                    </select>
                </div>

                <div class="form-group">
    <label for="bug">Bug</label>
    <select id="bug" class="form-control" required>
        <option value="ISI BUG MU">NO BUG</option>
        <option value="business.blibli.com">business.blibli.com</option>
        <option value="ava.game.naver.com">ava.game.naver.com</option>
        <option value="graph.instagram.com">graph.instagram.com</option>
        <option value="quiz.int.vidio.com">quiz.int.vidio.com</option>
        <option value="live.iflix.com">live.iflix.com</option>
        <option value="support.zoom.us">support.zoom.us</option>
        <option value="blog.webex.com">blog.webex.com</option>
        <option value="investors.spotify.com">investors.spotify.com</option>
        <option value="cache.netflix.com">cache.netflix.com</option>
        <option value="zaintest.vuclip.com">zaintest.vuclip.com</option>
        <option value="ads.ruangguru.com">ads.ruangguru.com</option>
        <option value="api.midtrans.com">api.midtrans.com</option>
        <option value="investor.fb.com">investor.fb.com</option>
        <option value="joss.krikkrik.tech">joss.krikkrik.tech</option>
        <option value="bakrie.ac.id">bakrie.ac.id</option>
        <option value="unnes.ac.id">unnes.ac.id</option>
        <option value="edge-ig-mqtt-p4-shv-01-dub4.facebook.com">edge-ig-mqtt-p4-shv-01-dub4.facebook.com</option>
        <option value="cf-vod.nimo.tv">cf-vod.nimo.tv</option>
        <option value="uii.ac.id">uii.ac.id</option>
        <option value="cdn.who.int">cdn.who.int</option>
        <option value="chat.sociomile.com">chat.sociomile.com</option>
        <option value="df.game.naver.com">df.game.naver.com</option>
        <option value="untar.ac.id">untar.ac.id</option>
        <option value="polsri.ac.id">polsri.ac.id</option>
        <option value="space.byu.id">space.byu.id</option>
        <option value="blog.acer.com">blog.acer.com</option>
        <option value="www.lipcon.com">www.lipcon.com</option>
        <option value="abogado.lipcon.com">abogado.lipcon.com</option>
        <option value="m.instagram.com">m.instagram.com</option>
        <option value="quiz.staging.vidio.com">quiz.staging.vidio.com</option>
        <option value="img.email1.vidio.com">img.email1.vidio.com</option>
        <option value="img.email2.vidio.com">img.email2.vidio.com</option>
        <option value="img.email3.vidio.com">img.email3.vidio.com</option>
        <option value="zoomgov.com">zoomgov.com</option>
        <option value="partner.zoom.us">partner.zoom.us</option>
        <option value="zoomcares.zoom.us">zoomcares.zoom.us</option>
        <option value="edu.ruangguru.com">edu.ruangguru.com</option>
        <option value="io.ruangguru.com">io.ruangguru.com</option>
        <option value="joss.krikkriks.live">joss.krikkriks.live</option>
    </select>
</div>

                <div class="form-group">
                    <label for="configType">Tipe Config</label>
                    <select id="configType" class="form-control" required>
                        <option value="vless">VLESS</option>
                        <option value="trojan">TROJAN</option>
                        <option value="shadowsocks">SHADOWSOCKS</option>
                        <option value="mix">ALL CONFIG</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="tls">TLS</label>
                    <select id="tls" class="form-control">
                        <option value="true">TRUE</option>
                        <option value="false">FALSE</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="wildcard">Wildcard</label>
                    <select id="wildcard" class="form-control">
                        <option value="true">TRUE</option>
                        <option value="false">FALSE</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="country">Negara</label>
                    <select id="country" class="form-control">
                        <option value="all">ALL COUNTRY</option>
                        <option value="random">RANDOM</option>
                        <option value="af">AFGHANISTAN</option>
                        <option value="al">ALBANIA</option>
                        <option value="dz">ALJERIA</option>
                        <option value="ad">ANDORRA</option>
                        <option value="ao">ANGOLA</option>
                        <option value="ag">ANTIGUA DAN BARBUDA</option>
                        <option value="ar">ARGENTINA</option>
                        <option value="am">ARMENIA</option>
                        <option value="au">AUSTRALIA</option>
                        <option value="at">AUSTRIA</option>
                        <option value="az">AZERBAIJAN</option>
                        <option value="bs">BAHAMAS</option>
                        <option value="bh">BAHRAIN</option>
                        <option value="bd">BANGLADESH</option>
                        <option value="bb">BARBADOS</option>
                        <option value="by">BELARUS</option>
                        <option value="be">BELGIUM</option>
                        <option value="bz">BELIZE</option>
                        <option value="bj">BENIN</option>
                        <option value="bt">BHUTAN</option>
                        <option value="bo">BOLIVIA</option>
                        <option value="ba">BOSNIA DAN HERZEGOVINA</option>
                        <option value="bw">BOTSWANA</option>
                        <option value="br">BRAZIL</option>
                        <option value="bn">BRUNEI</option>
                        <option value="bg">BULGARIA</option>
                        <option value="bf">BURKINA FASO</option>
                        <option value="bi">BURUNDI</option>
                        <option value="cv">CAP VERDE</option>
                        <option value="kh">KAMBODJA</option>
                        <option value="cm">KAMERUN</option>
                        <option value="ca">KANADA</option>
                        <option value="cf">REPUBLIK AFRIKA TENGAH</option>
                        <option value="td">TADJIKISTAN</option>
                        <option value="cl">CHILE</option>
                        <option value="cn">CINA</option>
                        <option value="co">KOLOMBIA</option>
                        <option value="km">KOMOR</option>
                        <option value="cg">KONGO</option>
                        <option value="cd">KONGO (REPUBLIK DEMOKRATIS)</option>
                        <option value="cr">KOSTA RIKA</option>
                        <option value="hr">KROASIA</option>
                        <option value="cu">CUBA</option>
                        <option value="cy">SIPRUS</option>
                        <option value="cz">CZECHIA</option>
                        <option value="dk">DENMARK</option>
                        <option value="dj">DJIBOUTI</option>
                        <option value="dm">DOMINIKA</option>
                        <option value="do">REPUBLIK DOMINIKA</option>
                        <option value="ec">EKUADOR</option>
                        <option value="eg">MESIR</option>
                        <option value="sv">EL SALVADOR</option>
                        <option value="gn">GUINEA</option>
                        <option value="gq">GUINEA KULTURAL</option>
                        <option value="gw">GUINEA-BISSAU</option>
                        <option value="gy">GUYANA</option>
                        <option value="ht">HAITI</option>
                        <option value="hn">HONDURAS</option>
                        <option value="hu">HUNGARIA</option>
                        <option value="is">ISLANDIA</option>
                        <option value="in">INDIA</option>
                        <option value="id">INDONESIA</option>
                        <option value="ir">IRAN</option>
                        <option value="iq">IRAK</option>
                        <option value="ie">IRLANDIA</option>
                        <option value="il">ISRAEL</option>
                        <option value="it">ITALIA</option>
                        <option value="jm">JAMAIKA</option>
                        <option value="jp">JEPANG</option>
                        <option value="jo">YORDANIA</option>
                        <option value="kz">KAZAKHSTAN</option>
                        <option value="ke">KENYA</option>
                        <option value="ki">KIRIBATI</option>
                        <option value="kp">KOREA UTARA</option>
                        <option value="kr">KOREA SELATAN</option>
                        <option value="kw">KUWAIT</option>
                        <option value="kg">KYRGYZSTAN</option>
                        <option value="la">LAOS</option>
                        <option value="lv">LATVIA</option>
                        <option value="lb">LEBANON</option>
                        <option value="ls">LESOTHO</option>
                        <option value="lr">LIBERIA</option>
                        <option value="ly">LIBIYA</option>
                        <option value="li">LIECHTENSTEIN</option>
                        <option value="lt">LITUANIA</option>
                        <option value="lu">LUKSEMBURG</option>
                        <option value="mk">MAKEDONIA</option>
                        <option value="mg">MADAGASKAR</option>
                        <option value="mw">MALAWI</option>
                        <option value="my">MALAYSIA</option>
                        <option value="mv">MALDIVES</option>
                        <option value="ml">MALI</option>
                        <option value="mt">MALTA</option>
                        <option value="mh">MARSHAL ISLANDS</option>
                        <option value="mr">MAURITANIA</option>
                        <option value="mu">MAURITIUS</option>
                        <option value="mx">MEKSIKO</option>
                        <option value="fm">MICRONESIA</option>
                        <option value="md">MOLDOVA</option>
                        <option value="mc">MONACO</option>
                        <option value="mn">MONGOLIA</option>
                        <option value="me">MONTENEGRO</option>
                        <option value="ma">MAROKO</option>
                        <option value="mz">MOZAMBIQUE</option>
                        <option value="mm">MYANMAR</option>
                        <option value="na">NAMIBIA</option>
                        <option value="np">NEPAL</option>
                        <option value="nl">BELANDA</option>
                        <option value="nz">SELANDIA BARU</option>
                        <option value="ni">NICARAGUA</option>
                        <option value="ne">NIGER</option>
                        <option value="ng">NIGERIA</option>
                        <option value="no">NORWEGIA</option>
                        <option value="om">OMAN</option>
                        <option value="pk">PAKISTAN</option>
                        <option value="pw">PALAU</option>
                        <option value="pa">PANAMA</option>
                        <option value="pg">PAPUA NGUNI</option>
                        <option value="py">PARAGUAY</option>
                        <option value="pe">PERU</option>
                        <option value="ph">FILIPINA</option>
                        <option value="pl">POLAND</option>
                        <option value="pt">PORTUGAL</option>
                        <option value="qa">QATAR</option>
                        <option value="ro">ROMANIA</option>
                        <option value="ru">RUSIA</option>
                        <option value="rw">RWANDA</option>
                        <option value="kn">SAINT KITTS DAN NEVIS</option>
                        <option value="lc">SAINT LUCIA</option>
                        <option value="vc">SAINT VINCENT DAN GRENADINES</option>
                        <option value="ws">SAMOA</option>
                        <option value="sm">SAN MARINO</option>
                        <option value="st">SAO TOME DAN PRINCIPE</option>
                        <option value="sa">ARAB SAUDI</option>
                        <option value="sn">SENEGAL</option>
                        <option value="rs">SERBIA</option>
                        <option value="sc">SEYCHELLES</option>
                        <option value="sl">SIERRA LEONE</option>
                        <option value="sg">SINGAPURA</option>
                        <option value="sk">SLOVAKIA</option>
                        <option value="si">SLOVENIA</option>
                        <option value="so">SOMALIA</option>
                        <option value="za">AFRIKA SELATAN</option>
                        <option value="es">SPANYOL</option>
                        <option value="lk">SRI LANKA</option>
                        <option value="sd">SUDAN</option>
                        <option value="sr">SURINAME</option>
                        <option value="se">SWEDIA</option>
                        <option value="ch">SWISS</option>
                        <option value="sy">SYRIA</option>
                        <option value="tw">TAIWAN</option>
                        <option value="tj">TAJIKISTAN</option>
                        <option value="tz">TANZANIA</option>
                        <option value="th">THAILAND</option>
                        <option value="tg">TOGO</option>
                        <option value="tk">TOKELAU</option>
                        <option value="to">TONGA</option>
                        <option value="tt">TRINIDAD DAN TOBAGO</option>
                        <option value="tn">TUNISIA</option>
                        <option value="tr">TURKI</option>
                        <option value="tm">TURKMENISTAN</option>
                        <option value="tc">TURKS DAN CAICOS ISLANDS</option>
                        <option value="tv">TUVALU</option>
                        <option value="ug">UGANDA</option>
                        <option value="ua">UKRAINA</option>
                        <option value="ae">UNITED ARAB EMIRATES</option>
                        <option value="gb">INGGRIS</option>
                        <option value="us">AMERIKA SERIKAT</option>
                        <option value="uy">URUGUAY</option>
                        <option value="uz">UZBEKISTAN</option>
                        <option value="vu">VANUATU</option>
                        <option value="va">VATICAN</option>
                        <option value="ve">VENEZUELA</option>
                        <option value="vn">VIETNAM</option>
                        <option value="ye">YAMAN</option>
                        <option value="zm">ZAMBIA</option>
                        <option value="zw">ZIMBABWE</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="limit">Jumlah Config</label>
                    <input type="number" id="limit" class="form-control" min="1" max="100" placeholder="Maks 100" required>
                </div>

                <button type="submit" class="btn">Generate Sub Link</button>
            </form>

            <div id="loading" class="loading">Generating Link...</div>
            <div id="error-message"></div>

            <div id="result" class="result" style="display: none;">
                <p id="generated-link"></p>
                <div class="copy-btns">
                    <button id="copyLink" class="copy-btn">Copy Link</button>
                    <button id="openLink" class="copy-btn">Buka Link</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        function toggleNavbar() {
            const navbar = document.getElementById("navbar");
            const menuBtn = document.getElementById("menu-btn").querySelector('img');

            if (navbar.classList.contains("show")) {
                navbar.classList.remove("show");
                menuBtn.src = "https://geoproject.biz.id/social/buka.png"; // Ganti dengan path yang benar
            } else {
                navbar.classList.add("show");
                menuBtn.src = "https://geoproject.biz.id/social/tutup.png"; // Ganti dengan path yang benar
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('subLinkForm');
            const loadingEl = document.getElementById('loading');
            const resultEl = document.getElementById('result');
            const generatedLinkEl = document.getElementById('generated-link');
            const copyLinkBtn = document.getElementById('copyLink');
            const openLinkBtn = document.getElementById('openLink');
            const errorMessageEl = document.getElementById('error-message');
            const appSelect = document.getElementById('app');
            const configTypeSelect = document.getElementById('configType');

            const elements = {
                app: appSelect,
                bug: document.getElementById('bug'),
                configType: configTypeSelect,
                tls: document.getElementById('tls'),
                wildcard: document.getElementById('wildcard'),
                country: document.getElementById('country'),
                limit: document.getElementById('limit')
            };

            appSelect.addEventListener('change', () => {
                const selectedApp = appSelect.value;
                const shadowsocksOption = configTypeSelect.querySelector('option[value="shadowsocks"]');

                if (selectedApp === 'surfboard') {
                    // Jika Surfboard dipilih, paksa Trojan dan nonaktifkan Shadowsocks
                    configTypeSelect.value = 'trojan';
                    shadowsocksOption.disabled = true;
                    // Tampilkan SweetAlert untuk memberitahu pengguna
                    Swal.fire({
                        icon: 'info',
                        title: 'Info',
                        text: 'Aplikasi Surfboard hanya mendukung tipe config Trojan. Pilihan telah disesuaikan.',
                        confirmButtonText: 'Oke',
                        customClass: {
                            popup: 'swal2-dark-popup', // Kelas kustom untuk pop-up
                            title: 'swal2-dark-title', // Kelas kustom untuk judul
                            content: 'swal2-dark-content', // Kelas kustom untuk konten
                            confirmButton: 'swal2-dark-button' // Kelas kustom untuk tombol
                        },
                        didOpen: () => {
                            // Gaya CSS SweetAlert untuk tampilan gelap
                            const style = document.createElement('style');
                            style.innerHTML = `
                                .swal2-dark-popup {
                                    background: rgba(0, 0, 0, 0.9) !important;
                                    color: #e0f4f4 !important;
                                    border: 1px solid rgba(0, 212, 255, 0.2);
                                    backdrop-filter: blur(5px);
                                }
                                .swal2-dark-title {
                                    color: var(--color-primary) !important;
                                }
                                .swal2-dark-content {
                                    color: var(--color-text) !important;
                                }
                                .swal2-dark-button {
                                    background: var(--color-primary) !important;
                                    color: var(--color-background) !important;
                                    font-weight: bold !important;
                                }
                            `;
                            document.head.appendChild(style);
                        }
                    });
                } else {
                    // Aktifkan kembali Shadowsocks untuk aplikasi lain
                    shadowsocksOption.disabled = false;
                }
            });


            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                loadingEl.style.display = 'block';
                resultEl.style.display = 'none';
                errorMessageEl.textContent = '';

                try {
                    const bugValue = elements.bug.value.trim();
                    const limitValue = parseInt(elements.limit.value, 10);

                    // Validasi input
                    if (!bugValue) {
                        throw new Error('Harap isi kolom Bug.');
                    }
                    if (isNaN(limitValue) || limitValue < 1 || limitValue > 100) {
                        throw new Error('Jumlah Config harus antara 1 dan 100.');
                    }

                    const params = new URLSearchParams({
                        type: elements.configType.value,
                        bug: bugValue,
                        tls: elements.tls.value,
                        wildcard: elements.wildcard.value,
                        limit: limitValue,
                    });

                    // Hanya tambahkan parameter negara jika bukan 'all'
                    if (elements.country.value !== 'all') {
                        params.append('country', elements.country.value);
                    }

                    // Ganti domain dengan domain Anda yang sebenarnya
                    const baseDomain = 'https://joss.krikkrik.tech';
                    const generatedLink = `${baseDomain}/vpn/${elements.app.value}?${params.toString()}`;

                    await new Promise(resolve => setTimeout(resolve, 500)); // Simulasi loading

                    loadingEl.style.display = 'none';
                    resultEl.style.display = 'block';
                    generatedLinkEl.textContent = generatedLink;

                    copyLinkBtn.onclick = async () => {
                        try {
                            await navigator.clipboard.writeText(generatedLink);
                            Swal.fire({
                                icon: 'success',
                                title: 'Berhasil Disalin!',
                                text: 'Link telah berhasil disalin ke clipboard.',
                                timer: 1500,
                                showConfirmButton: false,
                                customClass: {
                                    popup: 'swal2-dark-popup',
                                    title: 'swal2-dark-title',
                                    content: 'swal2-dark-content',
                                    confirmButton: 'swal2-dark-button'
                                },
                                didOpen: () => {
                                    const style = document.createElement('style');
                                    style.innerHTML = `
                                        .swal2-dark-popup {
                                            background: rgba(0, 0, 0, 0.9) !important;
                                            color: #e0f4f4 !important;
                                            border: 1px solid rgba(0, 212, 255, 0.2);
                                            backdrop-filter: blur(5px);
                                        }
                                        .swal2-dark-title {
                                            color: var(--color-primary) !important;
                                        }
                                        .swal2-dark-content {
                                            color: var(--color-text) !important;
                                        }
                                        .swal2-dark-button {
                                            background: var(--color-primary) !important;
                                            color: var(--color-background) !important;
                                            font-weight: bold !important;
                                        }
                                    `;
                                    document.head.appendChild(style);
                                }
                            });
                        } catch (err) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Gagal Menyalin',
                                text: 'Terjadi kesalahan saat menyalin link. Silakan coba lagi.',
                                customClass: {
                                    popup: 'swal2-dark-popup',
                                    title: 'swal2-dark-title',
                                    content: 'swal2-dark-content',
                                    confirmButton: 'swal2-dark-button'
                                },
                                didOpen: () => {
                                    const style = document.createElement('style');
                                    style.innerHTML = `
                                        .swal2-dark-popup {
                                            background: rgba(0, 0, 0, 0.9) !important;
                                            color: #e0f4f4 !important;
                                            border: 1px solid rgba(0, 212, 255, 0.2);
                                            backdrop-filter: blur(5px);
                                        }
                                        .swal2-dark-title {
                                            color: #ff4444 !important;
                                        }
                                        .swal2-dark-content {
                                            color: var(--color-text) !important;
                                        }
                                        .swal2-dark-button {
                                            background: var(--color-primary) !important;
                                            color: var(--color-background) !important;
                                            font-weight: bold !important;
                                        }
                                    `;
                                    document.head.appendChild(style);
                                }
                            });
                            console.error('Failed to copy: ', err);
                        }
                    };

                    openLinkBtn.onclick = () => {
                        window.open(generatedLink, '_blank');
                    };

                } catch (error) {
                    loadingEl.style.display = 'none';
                    errorMessageEl.textContent = error.message;
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: error.message,
                        customClass: {
                            popup: 'swal2-dark-popup',
                            title: 'swal2-dark-title',
                            content: 'swal2-dark-content',
                            confirmButton: 'swal2-dark-button'
                        },
                        didOpen: () => {
                            const style = document.createElement('style');
                            style.innerHTML = `
                                .swal2-dark-popup {
                                    background: rgba(0, 0, 0, 0.9) !important;
                                    color: #e0f4f4 !important;
                                    border: 1px solid rgba(0, 212, 255, 0.2);
                                    backdrop-filter: blur(5px);
                                }
                                .swal2-dark-title {
                                    color: #ff4444 !important;
                                }
                                .swal2-dark-content {
                                    color: var(--color-text) !important;
                                }
                                .swal2-dark-button {
                                    background: var(--color-primary) !important;
                                    color: var(--color-background) !important;
                                    font-weight: bold !important;
                                }
                            `;
                            document.head.appendChild(style);
                        }
                    });
                    console.error('Form submission error:', error);
                }
            });
        });
    </script>
</body>
</html>
`;

async function handleRequest(request) {
  const url = new URL(request.url);

  // Add CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Routing logic will go here
  if (url.pathname === '/') {
    return new Response(indexHtml, { headers: { ...corsHeaders, 'Content-Type': 'text/html' } });
  } else if (url.pathname === '/checker') {
    return new Response(checkerHtml, { headers: { ...corsHeaders, 'Content-Type': 'text/html' } });
  } else if (url.pathname === '/sub') {
    return new Response(subHtml, { headers: { ...corsHeaders, 'Content-Type': 'text/html' } });
  } else if (url.pathname === '/check') {
    const ip = url.searchParams.get('ip');
    if (!ip) {
      return new Response(JSON.stringify({ error: "Parameter 'ip' is required." }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Proxy the request to the external API
    const apiUrl = `https://api.checker-ip.web.id/check?ip=${ip}`;
    const apiResponse = await fetch(apiUrl);

    // Return the API response
    return new Response(apiResponse.body, {
      status: apiResponse.status,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response('Not Found', { status: 404, headers: corsHeaders });
}
